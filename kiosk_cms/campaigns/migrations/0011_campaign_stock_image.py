# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0010_campaign_next_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='stock_image',
            field=models.ImageField(default='hi', upload_to=b''),
            preserve_default=False,
        ),
    ]
