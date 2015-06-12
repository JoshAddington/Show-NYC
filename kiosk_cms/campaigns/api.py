from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer

from .models import Campaign

class CampaignResource(DjangoResource):
	preparer = FieldsPreparer(fields={
		'id': 'id',
		'name': 'name',
		'slug': 'slug',
		'campaign_sponsor': 'sponsor.username',
		'active': 'is_active',
		'start_date': 'start_date',
		'end_date': 'end_date',
	})

	# GET /api/images/
	def list(self):
		return Campaign.objects.all()

	# GET /api/images/<pk>/
	def detail(self, pk):
		return Campaign.objects.get(id=pk)