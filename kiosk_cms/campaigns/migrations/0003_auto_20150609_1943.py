# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0002_auto_20150608_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='slug',
            field=models.SlugField(blank=True),
        ),
    ]
