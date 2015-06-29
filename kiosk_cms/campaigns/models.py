from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Campaign(models.Model):
    sponsor = models.ForeignKey(User, related_name='campaigns', limit_choices_to={'is_staff': True})
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True)
    description = models.TextField()
    start_date = models.DateTimeField(blank=True)
    end_date = models.DateTimeField(blank=True)

    def __str__(self):
    	return self.name

    def sponsor_name(self):
    	return self.sponsor.username

    def is_active(self):
        now = timezone.now()
    	return (now > self.start_date and now < self.end_date)
