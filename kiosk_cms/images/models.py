from django.db import models

# Create your models here.
class Image(models.Model):
    image = models.ImageField()
    score = models.IntegerField(default=0)
    user_id = models.ForeignKey('auth.User')
    flagged = models.BooleanField(default=False)
    campaign_id = models.ForeignKey('campaigns.Campaign')
