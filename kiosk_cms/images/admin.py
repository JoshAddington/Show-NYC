from django.contrib import admin
from .models import Image

class ImageAdmin(admin.ModelAdmin):
	list_display = ('thumb','score', 'flagged', 'active', 'campaign_id', 'user_id')
	
	# Make the active column editable from the list display
	list_editable = ('active', )

	# set the thumbnail to read only
	readonly_fields = ('thumb', )


# Register your models here.
admin.site.register(Image, ImageAdmin)