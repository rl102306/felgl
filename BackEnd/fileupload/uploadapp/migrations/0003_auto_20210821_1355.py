# Generated by Django 3.2.4 on 2021-08-21 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadapp', '0002_posicionlogo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posicionlogo',
            name='posicion',
            field=models.FileField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='posicionlogo',
            name='url',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]