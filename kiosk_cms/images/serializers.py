from rest_framework import serializers
from .fields import Base64ImageField
from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Image
        fields = ('id', 'image_name', 'image', 'user', 'user_id', 'campaign',
                  'campaign_id', 'score', 'flagged')

class ImageVoteSerializer(serializers.ModelSerializer):
	ip = serializers.SerializerMethodField()

	class Meta:
		model = Image
		fields = ('id', 'image_name', 'image', 'user', 'user_id', 'campaign',
                  'campaign_id', 'score', 'flagged', 'ip')

	def get_ip():
		ip = self.context