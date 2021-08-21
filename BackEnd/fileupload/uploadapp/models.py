from django.db import models
from django.db.models.fields import PositiveBigIntegerField

#from django.core import serializers

class File(models.Model):

    file = models.FileField(blank=False, null=False)

    def __str__(self):

        return self.file.name


class PosicionLogo(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')

    posicion = models.CharField(max_length=100, null=True)

    url = models.CharField(max_length=200,null=True)

    def __str__(self):

        return self.posicion


