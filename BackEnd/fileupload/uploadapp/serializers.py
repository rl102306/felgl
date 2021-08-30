
from django.db import models


from rest_framework import serializers

from .models import File, PosicionLogo , User , Empresa

class FileSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = File
        
        fields = "__all__"

    def last():

        
        rutalast = File.objects.order_by('id').last()

        return rutalast

class PosicionSerializer(serializers.ModelSerializer):

    class Meta:

        model = PosicionLogo

        fields = ('id','posicion','url','usuario','fecha')

    def last():

        
        #dirlast = File.objects.order_by('id').last()

        dirlast = PosicionLogo.objects.order_by('id').last()

        return dirlast

class UserSerializar(serializers.ModelSerializer):


    class Meta:

        model = User

        fields = ('id','nombre','correo','estado',
        'password')

class EmpresaSerializer(serializers.ModelSerializer):

    class Meta:

        model = Empresa

        fields = ('id','nombre','nit','direccion',
        'logo', 'slogan',
        'cantidad_facturas_mensual'
        )

        

    


