from django.contrib import admin
from .models import Image

class ImageAdmin(admin.ModelAdmin):
	list_display = ('thumb','score', 'flagged_col', 'active', 'campaign_id', 'user_id')
	exclude = ('campaign_winner',)
	# Make the active column editable from the list display
	list_editable = ('active', )

	# set the thumbnail to read only
	readonly_fields = ('thumb', )

	def flagged_col(self, obj):
		return not obj.flagged # invert the boolean value
	flagged_col.boolean = True
	flagged_col.admin_order_field = 'flagged'
	flagged_col.short_description  = 'Flagged'


# Register your models here.
admin.site.register(Image, ImageAdmin)