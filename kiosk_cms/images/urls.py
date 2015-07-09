from django.conf.urls import patterns, url
from images import views

urlpatterns = patterns('',
	url(r'^$', views.image_collection),
	url(r'^(?P<pk>[0-9]+)/$', views.image_element),
	url(r'^winners/$', views.image_winners_collection),
	url(r'^active_campaigns/$', views.active_campaign_images),
	url(r'^inactive_campaigns/$', views.inactive_campaign_images),
	url(r'^(?P<pk>[0-9]+)/upvote/$', views.image_upvote),
	url(r'^(?P<pk>[0-9]+)/downvote/$', views.image_downvote),
	)