from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils import timezone


# Create your models here.
class Campaign(models.Model):
    sponsor = models.ForeignKey(
        User,
        related_name='campaigns',
        limit_choices_to={'is_staff': True}
    )
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True)
    description = models.TextField(default="Campaign")
    active = models.BooleanField(default=False)
    default_campaign = models.BooleanField(default=False)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def __str__(self):
        return self.name

    def sponsor_name(self):
        return self.sponsor.username

    def is_active(self):
        return self.active

    def activate(self):
        old_campaigns = Campaign.objects.filter(active=True)
        for campaign in old_campaigns:
            campaign.active = False
            campaign.save()
        self.active = True
        self.save()
        return self

    def deactivate(self):
        default_campaigns = Campaign.objects.filter(default_campaign=True)
        for campaign in default_campaigns:
            campaign.active = True
            campaign.save()
        self.active = False
        self.save()
        return self
