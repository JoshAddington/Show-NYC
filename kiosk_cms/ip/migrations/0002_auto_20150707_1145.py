# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ip', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ip',
            old_name='image',
            new_name='images',
        ),
    ]
