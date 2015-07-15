from rest_framework import serializers
from .fields import Base64ImageField
from .models import Image
from vote_id.models import Vote_ID
from vote_id.views import get_vote_id


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
        vote_id = self.context.get('vote_id', None)
        if vote_id is not None:
            try:
                voted = Vote_ID.objects.filter(
                                        images=obj,
                                        vote_id=vote_id.vote_id
                                        ).count()
                return voted == 1
            except Vote_ID.DoesNotExist:
                return False
        return "error"
