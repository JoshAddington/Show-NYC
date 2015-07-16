from rest_framework import serializers
from images.models import Image
from .models import Campaign


class CampaignSerializer(serializers.ModelSerializer):

	class Meta:
		model = Campaign
		fields = ('name', 'id', 'description', 'sponsor_name', 'sponsor', 'start_date', 'end_date')
