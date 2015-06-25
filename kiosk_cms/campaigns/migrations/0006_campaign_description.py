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
            name='description',
            field=models.TextField(default='This campaign will conquer the world! We are Genghis Khan!'),
            preserve_default=False,
        ),
    ]
