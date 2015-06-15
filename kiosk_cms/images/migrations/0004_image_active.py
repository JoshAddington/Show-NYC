# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0003_auto_20150610_2127'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='active',
            field=models.BooleanField(default=False),
        ),
    ]
