from django.contrib import admin
from .models import IP


class IPAdmin(admin.ModelAdmin):
	list_display = ('ip_address',)


# Register your models here.
admin.site.register(IP, IPAdmin)