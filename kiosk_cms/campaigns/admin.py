import os
import requests
import tempfile
import zipfile
from PIL import Image as PilImage
from StringIO import StringIO

from django.template.loader import render_to_string
from django.core.servers.basehttp import FileWrapper
from django.conf.urls import patterns, url
from django.contrib import admin, messages
from django.http import HttpResponseRedirect, StreamingHttpResponse
from django.shortcuts import render
from .models import Campaign
from .forms import CampaignAdminForm
from images.models import Image
from kiosk_cms import settings



# Image list for campaign admin page
class ImageInline(admin.TabularInline):
    model = Image
    fields = ('thumb', 'user_id', 'score', 'active', 'flagged', 'campaign_winner')
    readonly_fields = ('thumb', 'user_id')

    # image thumbnail for image list
    def thumb(self, obj):
        if obj.image:
            return u'<a href="%s"><img src="%s" width=80 height=80 /></a>' % (obj.image.url, obj.image.url)
        else:
            return u'No image file found'
    thumb.short_description = 'Image'
    thumb.allow_tags = True


class CampaignAdmin(admin.ModelAdmin):
    list_display = ('name', 'active', 'next_active', 'default_campaign', 'start_date', 'end_date')
    inlines = [ImageInline, ]
    prepopulated_fields = {'slug': ('name',), }
    form = CampaignAdminForm

    def get_urls(self):
        urls = super(CampaignAdmin, self).get_urls()
        my_urls = patterns('',
            (r'^(?P<pk>[0-9]+)/template/$', self.generate_template)
        )
        return my_urls + urls

    def send_zipfile(self, request, context=None):
        """                                                                         
        Create a ZIP file on disk and transmit it in chunks of 8KB,
        without loading the whole file into memory. ZIP file contains
        a folder with the index.html file and winning images
        for the active campaign.
        """
        temp = tempfile.TemporaryFile()
        archive = zipfile.ZipFile(temp, 'w', zipfile.ZIP_DEFLATED)
        page = render_to_string('template.html', {'campaign': context['campaign'],
                        'next_campaign': context['next_campaign'],
                        'winning_image': context['winning_image'],
                        'top_images': context['top_images']})
        self.zip_image(context['next_campaign'].stock_image, archive)
        for image in context['top_images']:
            self.zip_image(image.image, archive)
        self.zip_image(context['winning_image'].image, archive)
        archive.writestr('index.html', page)
        archive.close()
        chunk_size = 8192
        wrapper = FileWrapper(temp)
        response = StreamingHttpResponse(wrapper, content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename=kiosk.zip'
        response['Content-Length'] = temp.tell()
        temp.seek(0)
        return response

    # retrieves image from S3, converts image to bytes, adds image to zip file
    def zip_image(self, image, zipfile):
        # print(image.name)
        # try:
        if image.name:
            name = image.name
        elif image:
            print('hi')
            name = image
        r = requests.get(settings.MEDIA_URL+str(name))
        content = PilImage.open(StringIO(r.content)).tobytes()
        zipfile.writestr(name, content)
        # except:
        #     print('hi')

    def generate_template(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        next_campaign = Campaign.objects.filter(next_active=True).select_related()
        print(next_campaign[0].stock_image)
        winning_image = Image.objects.filter(campaign_winner=True).filter(campaign_id=pk).select_related()
        top_images = Image.objects.filter(campaign_winner=False).filter(active=True).filter(campaign_id=pk).order_by('-score').only('image')[:6]
        if next_campaign:
            if winning_image:
                if len(top_images) == 6:
                    return self.send_zipfile(request, context={
                        'next_campaign': next_campaign[0],
                        'campaign': campaign,
                        'winning_image': winning_image[0],
                        'top_images': top_images
                    })
                else:
                    messages.error(request, "The campaign must have 6 active images in order to generate the template.")
            else:
                messages.error(request, "An image must be marked as the campaign winner to generate the template.")

        else:
            if not winning_image:
                messages.error( request, "An image must be marked as the campaign winner to generate the template.")
            messages.error(request, "A campaign must be marked as next active in order to generate the template.")
        return HttpResponseRedirect('..')

    class Media:
        js = ('js/kiosk_template.js',)


# Register your models here.
admin.site.register(Campaign, CampaignAdmin)
