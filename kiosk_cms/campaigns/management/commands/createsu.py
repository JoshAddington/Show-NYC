import os

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        if not User.objects.filter(username=os.environ['DJ_ADMIN']).exists():
            User.objects.create_superuser(os.environ['DJ_ADMIN'], os.environ['DJ_ADMIN_EMAIL'], os.environ['DJ_ADMIN_PASSWORD'])
