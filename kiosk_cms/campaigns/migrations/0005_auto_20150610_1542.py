# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0004_campaign_sponsor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='sponsor',
            field=models.ForeignKey(related_name='campaigns', to=settings.AUTH_USER_MODEL),
        ),
    ]
