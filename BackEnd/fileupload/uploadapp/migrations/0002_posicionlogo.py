# Generated by Django 3.2.4 on 2021-08-21 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PosicionLogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posicion', models.CharField(default='', max_length=70)),
                ('url', models.CharField(default='', max_length=70)),
            ],
        ),
    ]
