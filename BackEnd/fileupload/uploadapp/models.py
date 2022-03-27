from django.db import models

from django.contrib.auth.models import User


#from django.core import serializers

class File(models.Model):

    file = models.FileField(blank=False, null=False)

    def __str__(self):

        return self.file.name


class PosicionLogo(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')

    posicion = models.CharField(max_length=100, null=True)

    url = models.CharField(max_length=200,null=True)

    usuario = models.CharField(max_length=200,null=True)

    fecha = models.DateField(null=True)

    def __str__(self):

        return self.posicion


''' class User(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True,serialize=False,verbose_name='ID')
    
    nombre = models.CharField(max_length=100, null=True)
    
    correo = models.EmailField(verbose_name='Email', max_length=255,unique=True,null=False)
    
    estado = models.BooleanField(default=True)
    
    password = models.CharField(max_length=100,null=False)

    def __str__(self):

        return self.email
'''
    
class Empresa(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True,serialize=False,verbose_name='ID')
    
    nombre = models.CharField(max_length=100, null=True)
    
    nit = models.CharField(max_length=100,null=True)
    
    direccion = models.CharField(max_length=100, null=True)
    
    logo = models.FileField(blank=True, null=True)
    
    slogan = models.CharField(max_length=500,null=True)
    
    cantidad_facturas_mensual = models.CharField(max_length=500,null=False)
    
    estado = models.BooleanField(default=True)

    def __str__(self):

        return str(self.nombre)


class Profile(models.Model):

    id = models.AutoField(auto_created=True, primary_key=True,serialize=False,verbose_name='ID')

    user = models.ForeignKey(User,null=True,blank=True,on_delete=models.CASCADE)

    empresa = models.ForeignKey(Empresa,null=True,blank=True,on_delete=models.CASCADE)

    def __str__(self):

        return str(self.id)


    
    class Meta:

        verbose_name = 'Profile'

        verbose_name_plural = 'Profiles'





    




