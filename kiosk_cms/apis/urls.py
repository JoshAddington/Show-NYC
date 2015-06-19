from django.conf.urls import patterns, url, include

urlpatterns = patterns('',
	url(r'images/', include('images.urls')),
	url(r'campaigns/', include('campaigns.urls')),
)