from django.core.exceptions import DisallowedRedirect
from django.db import models
from django.db.models.base import Model
from django.db.models.fields import NullBooleanField, PositiveBigIntegerField

#from django.core import serializers

class File(models.Model):

    file = models.FileField(blank=False, null=False)

    def __str__(self):

        return self.file.name


class PosicionLogo(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')

    posicion = models.CharField(max_length=100, null=True)

    url = models.CharField(max_length=200,null=True)

    usuario = models.IntegerField(null=False)

    fecha = models.DateField(null=False)

    def __str__(self):

        return self.posicion


class User(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True,serialize=False,verbose_name='ID')
    
    nombre = models.CharField(max_length=100, null=True)
    
    correo = models.EmailField(verbose_name='Email', max_length=255,unique=True,null=False)
    
    estado = models.BooleanField(default=True)
    
    password = models.CharField(max_length=100,null=False)

    def __str__(self):

        return self.email

    
class Empresa(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True,serialize=False,verbose_name='ID')
    
    nombre = models.CharField(max_length=100, null=True)
    
    nit = models.CharField(max_length=100,null=False)
    
    direccion = models.CharField(max_length=100, null=True)
    
    logo = models.CharField(max_length=100, null=True)
    
    slogan = models.CharField(max_length=500,null=True)
    
    cantidad_facturas_mensual = models.IntegerField(null=False)
    
    estado = models.BooleanField(default=True)

    def __str__(self):

        return self.email

    





    




