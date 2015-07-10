# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ip', '0002_auto_20150707_1145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ip',
            name='ip_address',
            field=models.CharField(max_length=16),
        ),
    ]
