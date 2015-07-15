# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0004_image_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vote_ID',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('vote_id', models.CharField(max_length=36)),
                ('images', models.ManyToManyField(to='images.Image', blank=True)),
            ],
        ),
    ]
