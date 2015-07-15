from django.db import models
from rest_framework.exceptions import MethodNotAllowed
from campaigns.models import Campaign


# Create your models here.
class Image(models.Model):
    image = models.ImageField()
    score = models.IntegerField(default=0)
    user_id = models.ForeignKey('auth.User', related_name='user')
    flagged = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    campaign_id = models.ForeignKey(Campaign, related_name='images')
    campaign_winner = models.BooleanField(default=False)

    def __str__(self):
        return self.image.name

    def image_name(self):
        return self.image.name

    def user(self):
        return self.user_id.username

    def campaign(self):
        return self.campaign_id.name

    def vote_id(self, vote_id):
        return self.vote_id_set.filter(vote_id=vote_id).exists()

    def upvote(self):
        if self.campaign_id.is_active():
            self.score += 1
            self.save()
            return (self, True)
        return (self, False)

    def downvote(self):
        if self.score > 0:
            if self.campaign_id.is_active():
                self.score -= 1
                self.save()
                return (self, True)
        return (self, False)

    def thumb(self):
        if self.image:
            return u'<img src="%s" width=80 height=80 />' % (self.image.url)
        else:
            return u'No image file found'
    thumb.short_description = 'Image'
    thumb.allow_tags = True
