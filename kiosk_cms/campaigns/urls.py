from django.conf.urls import patterns, url

urlpatterns = patterns('campaigns.views',
	url(r'^$', 'campaign_collection'),
	url(r'^(?P<pk>[0-9]+)$', 'campaign_element'),
	)