from django.conf.urls import patterns, url

urlpatterns = patterns('images.views',
	url(r'^$', 'image_collection'),
	url(r'^(?P<pk>[0-9]+)$', 'image_element'),
	)