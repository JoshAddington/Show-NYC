from django.db import models

# Create your models here.
class Campaign(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    start_date = models.DateTimeField(blank=True)
    end_date = models.DateTimeField(blank=True)

    def __str__(self):
    	return self.name