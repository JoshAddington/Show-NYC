from django.db import models
import uuid

# Create your models here.
class ApiKey(models.Model):
	user = models.ForeignKey('auth.User')
	key = models.UUIDField(default=uuid.uuid4, editable=False)
