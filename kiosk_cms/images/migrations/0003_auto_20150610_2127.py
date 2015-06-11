# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0002_image_campaign_winner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='campaign_id',
            field=models.ForeignKey(related_name='images', to='campaigns.Campaign'),
        ),
        migrations.AlterField(
            model_name='image',
            name='user_id',
            field=models.ForeignKey(related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
