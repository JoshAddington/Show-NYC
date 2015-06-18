from django.db import models
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

    def activate(self):
        if self.active:
            return "Image is already activated."
        else:
            self.active = True

    def deactivate(self):
        if self.active:
            self.active = False
        else:
            return "Image is already deactivated."

    def upvote(self):
        if self.campaign_id.is_active:
            self.score += 1
            self.save()
            return self
        else:
            return "Campaign %s is no longer active" % self.campaigns.name

    def downvote(self):
        if self.score > 0:
            if self.campaign_id.is_active:
                self.score -= 1
                self.save()
                return self
            else:
                return "Campaign %s is no longer active" % self.campaigns.name

    def thumb(self):
        if self.image:
            return u'<img src="%s" width=80 height=80 />' % (self.image.url)
        else:
            return u'No image file found'
    thumb.short_description = 'Image'
    thumb.allow_tags = True