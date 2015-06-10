from django.contrib import admin
from .models import Image

class ImageAdmin(admin.ModelAdmin):
	list_display = ('thumb','score', 'flagged', 'campaign_id', 'user_id')
	# set the thumbnail to read only
	readonly_fields = ('thumb', )


# Register your models here.
admin.site.register(Image, ImageAdmin)