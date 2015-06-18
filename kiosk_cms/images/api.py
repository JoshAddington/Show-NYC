from django.contrib.auth.models import User
from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer
from campaigns.api import CampaignResource
from apis.models import ApiKey

from .models import Image
from campaigns.models import Campaign

class ImageResource(DjangoResource):
	preparer = FieldsPreparer(fields={
		'id': 'id',
		'title': 'image.name',
		'author': 'user_id.username',
		'url': 'image.url',
		'score': 'score',
		'campaign': 'campaign_id.name',
		'campaign_id': 'campaign_id.id',
		'campaign_winner': 'campaign_winner',
		'flagged': 'flagged',
	})

	def is_authenticated(self):
		return True

		# TODO Implement API authentication
		# 
		# try:
		# 	key = ApiKey.objects.get(key=self.request.GET.get('api_key'))
		# 	return True
		# except ApiKey.DoesNotExist:
		# 	return False

	# GET /api/images/
	def list(self):
		return Image.objects.filter(flagged=False).filter(active=True)

	# GET /api/images/<pk>/
	def detail(self, pk):
		return Image.objects.select_related().get(pk=pk)

	# POST /api/images/
	def create(self):
		return Image.objects.create(
			image=self.data['title'],
			user_id=User.objects.get(username=self.data['author']),
		    campaign_id = Campaign.objects.get(id=self.data['campaign_id']),
		)

	# PUT /api/images/<pk>/
	def update(self, pk):
		try:
			image = Image.objects.get(pk=pk)
		except Image.DoesNotExist:
			image = Image()

		image.title = self.data['title']
		image.user_id = User.objects.get(username=self.data['author'])
		image.campaign_id = Campaign.objects.get(id=self.data['campaign_id'])
		image.save()
		return image

	# DELETE /api/images/<pk>/
	def delete(self, pk):
		Image.objects.get(pk=pk).delete()