# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0004_image_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='IP',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ip_address', models.CharField(max_length=15)),
                ('image', models.ManyToManyField(to='images.Image', blank=True)),
            ],
        ),
    ]
