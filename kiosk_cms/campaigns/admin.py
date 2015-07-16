from django.conf.urls import patterns, url
from django.contrib import admin
from django.shortcuts import render
from .models import Campaign
from .forms import CampaignAdminForm
from images.models import Image


class ImageInline(admin.TabularInline):
    model = Image
    fields = ('thumb', 'user_id', 'score', 'active', 'flagged', 'campaign_winner')
    readonly_fields = ('thumb', 'user_id' )

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
            (r'^(?P<pk>[0-9]+)/template/$', self.my_view)
        )
        return my_urls + urls

    def my_view(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        winning_image = Image.objects.filter(campaign_winner=True).filter(campaign_id=pk).select_related()
        top_images = Image.objects.filter(campaign_winner=False).filter(active=True).filter(campaign_id=pk).order_by('-score').only('image')[0:7]
        return render(request, 'template.html', {
            'campaign': campaign,
            'winning_image': winning_image,
            'top_images': top_images
        })

    class Media:
        js = ('js/kiosk_template.js',)


# Register your models here.
admin.site.register(Campaign, CampaignAdmin)
