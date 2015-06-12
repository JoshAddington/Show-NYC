from django.conf.urls import patterns, url, include

from images.api import ImageResource
from campaigns.api import CampaignResource

urlpatterns = patterns('',
	url(r'^images/', include(ImageResource.urls())),
	url(r'^campaigns/', include(CampaignResource.urls())),
)