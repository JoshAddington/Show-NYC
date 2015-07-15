from django.contrib import admin
from .models import Vote_ID


class Vote_ID_Admin(admin.ModelAdmin):
	list_display = ('vote_id',)


# Register your models here.
admin.site.register(Vote_ID, Vote_ID_Admin)
