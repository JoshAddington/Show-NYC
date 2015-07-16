from rest_framework import serializers
from images.models import Image
from .models import Campaign


class CampaignSerializer(serializers.ModelSerializer):

	class Meta:
		model = Campaign
		fields = ('name', 'id', 'description', 'sponsor_name', 'sponsor', 'start_date', 'end_date')


class CampaignWinnerSerializer(serializers.ModelSerializer):
	winning_image = serializers.SerializerMethodField('winningImage')
	top_images = serializers.SerializerMethodField('topImages')

	class Meta:
		model = Campaign
		fields = ('name', 'id', 'description', 'sponsor_name',
				  'sponsor', 'winning_image', 'top_images')

	def winningImage(self, obj):
		pass

	def topImages(self, obj):
		pass