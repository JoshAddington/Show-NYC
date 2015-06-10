from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer
from campaigns.api import CampaignResource

from .models import Image

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

	# GET /api/images/
	def list(self):
		return Image.objects.filter(flagged=False)

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