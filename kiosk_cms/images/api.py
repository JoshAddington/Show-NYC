from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer

from .models import Image

class ImageResource(DjangoResource):
	preparer = FieldsPreparer(fields={
		'id': 'id',
		'title': 'image.name',
		'author': 'user_id.username',
		'url': 'image.url',
		'score': 'score',
		# 'campaign': 'campaign_id',
		'campaign_winner': 'campaign_winner',
		'flagged': 'flagged',
	})

	# GET /api/images/
	def list(self):
		return Image.objects.all()

	# GET /api/images/<pk>/
	def detail(self, pk):
		return Image.objects.get(id=pk)