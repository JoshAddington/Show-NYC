from django.conf.urls import patterns, url
from images import views

urlpatterns = patterns('',
	url(r'^$', views.image_collection),
	url(r'^(?P<pk>[0-9]+)/$', views.image_element),
	url(r'^winners/', views.image_winners_collection)
	)