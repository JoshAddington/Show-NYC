# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0009_campaign_default_campaign'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='next_active',
            field=models.BooleanField(default=False),
        ),
    ]
