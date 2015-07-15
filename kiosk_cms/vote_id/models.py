from django.db import models
from images.models import Image


class Vote_ID(models.Model):
    vote_id = models.CharField(max_length=36)
    images = models.ManyToManyField(Image, blank=True)
