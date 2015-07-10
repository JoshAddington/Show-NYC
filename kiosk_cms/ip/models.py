from django.db import models
from images.models import Image


class IP(models.Model):
    ip_address = models.CharField(max_length=16)
    images = models.ManyToManyField(Image, blank=True)
