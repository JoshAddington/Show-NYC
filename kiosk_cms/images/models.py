from django.db import models
from campaigns.models import Campaign

# Create your models here.
class Image(models.Model):
    image = models.ImageField()
    score = models.IntegerField(default=0)
    user_id = models.ForeignKey('auth.User', related_name='user')
    flagged = models.BooleanField(default=False)
    campaign_id = models.ForeignKey(Campaign, related_name='images')
    campaign_winner = models.BooleanField(default=False)


    def __str__(self):
    	return self.image.name

    def thumb(self):
        if self.image:
            return u'<img src="%s" width=80 height=80 />' % (self.image.url)
        else:
            return u'No image file found'
    thumb.short_description = 'Image'
    thumb.allow_tags = True