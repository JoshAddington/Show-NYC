from django.db import models

# Create your models here.
class Campaign(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    start_date = models.DateTimeField(blank=True)
    end_date = models.DateTimeField(blank=True)
