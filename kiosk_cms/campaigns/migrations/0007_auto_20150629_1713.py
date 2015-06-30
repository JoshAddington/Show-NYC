# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0006_auto_20150629_1713'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='description',
            field=models.TextField(default=b'Campaign'),
        ),
    ]
