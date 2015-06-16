from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import Campaign
from images.models import Image


class ImageInline(admin.TabularInline):
    model = Image
    fields = ('thumb', 'user_id', 'score', 'active', 'flagged')
    readonly_fields = ('thumb', )

    def thumb(self, obj):
        if obj.image:
            return u'<a href="%s"><img src="%s" width=80 height=80 /></a>' % (obj.image.url, obj.image.url)
        else:
            return u'No image file found'
    thumb.short_description = 'Image'
    thumb.allow_tags = True


class CampaignAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date')

    fields = ('sponsor', 'name', 'slug', 'start_date', 'end_date')
    inlines = [ImageInline, ]
    prepopulated_fields = {'slug' : ('name',), }
    
    

# Register your models here.
admin.site.register(Campaign, CampaignAdmin)
