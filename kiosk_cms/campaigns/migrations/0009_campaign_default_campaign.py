# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0008_auto_20150701_0901'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='default_campaign',
            field=models.BooleanField(default=False),
        ),
    ]
