from django.test import TestCase
from campaigns.models import Campaign
from django.contrib.auth.models import User

from .models import Image

class ImageTest(TestCase):

	def create_image(self, image, user_id, campaign_id):
		return Image.objects.create(image=image, user_id=user_id, campaign_id=campaign_id)

	def test_image_creation(self)
		test_image = create_image(image='./blog_oceans.jpg', user_id=User.objects.get(username='intern'), campaign_id = Campaign.objects.get(id=2))
		self.assertTrue(isinstance(test_image, Image))
		self.assertEqual(test_image.__str(), test_image.image.name)	