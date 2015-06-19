from django.conf.urls import patterns, url
from campaigns import views

urlpatterns = patterns('',
	url(r'^$', views.campaign_collection),
	url(r'^active/$', views.active_campaign_collection),
	url(r'^(?P<pk>[0-9]+)/$', views.campaign_element),
	)