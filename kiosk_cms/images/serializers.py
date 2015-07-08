from rest_framework import serializers
from .fields import Base64ImageField
from .models import Image
from ip.models import IP
from ip.views import user_ip


class ImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Image
        fields = ('id', 'image_name', 'image', 'user', 'user_id', 'campaign',
                  'campaign_id', 'score', 'flagged')


class ImageVoteSerializer(serializers.ModelSerializer):
    voted = serializers.SerializerMethodField('VotedByUser')

    class Meta:
        model = Image
        fields = ('id', 'image_name', 'image', 'user', 'user_id', 'campaign',
                  'campaign_id', 'score', 'flagged', 'voted')

    def VotedByUser(self, obj):
        request = self.context.get('request', None)
        if request is not None:
            try:
                vote_ip = user_ip(request)
                voted = IP.objects.filter(images=obj, ip_address=vote_ip.ip_address).count()
                return voted == 1
            except IP.DoesNotExist:
                return False
        return "error"
