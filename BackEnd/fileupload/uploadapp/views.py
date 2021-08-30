



from rest_framework import serializers, views

from rest_framework.parsers import FileUploadParser

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework import status , viewsets

from rest_framework.decorators import api_view, throttle_classes

from rest_framework.throttling import UserRateThrottle

from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import FileSerializer,PosicionSerializer, UserSerializar

from reportlab.pdfgen import canvas

from PyPDF2 import PdfFileReader,PdfFileWriter

from rest_framework.authentication import TokenAuthentication

from django.contrib.auth.models import User

from django.contrib import auth

from rest_framework.response import Response

class FileUploadView(APIView):

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
     


      file_serializer = FileSerializer(data=request.data)

      if file_serializer.is_valid():

          file_serializer.save()

          return Response(file_serializer.data, status=status.HTTP_201_CREATED)

      else:

          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class UserRegistrationView(APIView):

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    def post(self,request, *args, **kwargs):

        user_serializer = UserSerializar(data = request.data)

        if user_serializer.is_valid():

            user_serializer.save()

            return Response(user_serializer.data,status=status.HTTP_201_CREATED)

        else:
            print(user_serializer.errors)

            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FileSend(APIView):

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    def post(self,request, *args, **kwargs):

        file_last = FileSerializer.last()

        posicion_serializer = PosicionSerializer(data=request.data)

        
          
        if posicion_serializer.is_valid():

            posicion_serializer.save()

            logo = canvas.Canvas('media/logo.pdf')

            direccion = PosicionSerializer.last()

            dire = str(direccion)

            print(dire)

            if dire == 'derecha':

                print(direccion)

                logo.drawImage('media/lgfirmlogo.jpg', 400, 720, 180, 60)

                logo.save()
            
            elif dire  == 'izquierda':

                print(direccion)

                logo.drawImage('media/lgfirmlogo.jpg', 29, 720, 180, 60)

                logo.save()

            logopdf = PdfFileReader(open("media/logo.pdf","rb"))

            fsatandlogo = PdfFileWriter()

            urlfilelast = "media/" + str(file_last)

            fsatpdf = PdfFileReader(open(urlfilelast,"rb"))

            cantidad_pag = fsatpdf.getNumPages()

            for num_pagina in range(cantidad_pag):

                # Union

                fsatpdf_page = fsatpdf.getPage(num_pagina)

                fsatpdf_page.mergePage(logopdf.getPage(0))

                fsatandlogo.addPage(fsatpdf_page)

        
            with open("media/factlogo.pdf","wb") as outputStream:

                fsatandlogo.write(outputStream)

                file_fact_url = "/media/factlogo.pdf" 

            
            
            
            return Response(file_fact_url, status=status.HTTP_200_OK)

        
        else:

            print(posicion_serializer.errors)

            return Response(posicion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    def post(self,request, *args, **kwargs):

       
        
        if request.method == 'POST':

            user = auth.authenticate(

            username=request.POST['username'],

            password = request.POST['password'])
            
            
            if user is not None:


                
                auth.login(request,user)
                
                
                return Response('1024',status=status.HTTP_200_OK)

            else:
                # return render (request,'accounts/login.html', {'error':'Username or password is incorrect!'})
                # grint('Hola'+ request.POST['username'])
                
                return Response('1900',status=status.HTTP_400_BAD_REQUEST)
        
        else:

            return Response('Hola')#Response(status=status.HTTP_404_NOT_FOUND)
