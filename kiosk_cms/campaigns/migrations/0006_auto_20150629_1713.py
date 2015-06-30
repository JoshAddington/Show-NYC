# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0005_auto_20150610_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='active',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='campaign',
            name='description',
            field=models.TextField(default='Campaign!'),
            preserve_default=False,
        ),
    ]
