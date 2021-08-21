from typing import runtime_checkable
from rest_framework import serializers

from .models import File, PosicionLogo

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

        fields = ('id','posicion','url')

    def last():

        
        #dirlast = File.objects.order_by('id').last()

        dirlast = PosicionLogo.objects.order_by('id').last()

        return dirlast