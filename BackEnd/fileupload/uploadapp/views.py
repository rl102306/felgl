
from rest_framework import serializers, views

from rest_framework.parsers import FileUploadParser

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework import status , viewsets

from rest_framework.decorators import api_view, throttle_classes

from rest_framework.throttling import UserRateThrottle

from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import FileSerializer,PosicionSerializer,UserSerializar,EmpresaSerializer, GetUserCompany

from reportlab.pdfgen import canvas

from PyPDF2 import PdfFileReader,PdfFileWriter

from rest_framework.authentication import TokenAuthentication

from django.contrib.auth.models import User

from django.contrib import auth

from rest_framework.response import Response

import json

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


        
        name_user = request.POST['firts_name']
        
        pasword = request.POST['password']

        emal = request.POST['email']

        usname = request.POST['username']
        
        isactive = False

        usernew = User.objects.create_user(

            username = usname,

            email = emal,

            password = pasword,

            first_name = name_user,

            is_active = isactive

        )

        return Response(status=status.HTTP_201_CREATED)


    '''    
    
    user_serializer = UserSerializar(data = request.data)

        if user_serializer.is_valid():

            user_serializer.save()

            return Response(user_serializer.data,status=status.HTTP_201_CREATED)

        else:
            print(user_serializer.errors)

            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)'''


class FileSend(APIView):

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    def post(self,request, *args, **kwargs):

        #file_last = FileSerializer.last()

        useridjson = request.POST['usuario']
        
        posicionlogo = request.POST['posicion']

        urlfile = request.POST['url']


        
        posicion_serializer = PosicionSerializer(data=request.data)

        
          
        if posicion_serializer.is_valid():


            posicion_serializer.save()

            #Cambiar esto por que toma un archivo en especifico

            #filepdfini = '.' + urlfile

            idulast = PosicionSerializer.idurllast(urlfile)

            
            filepdfini = 'fileini' + str(idulast) + '.pdf'

            filepdfiniruta = './media/'+ filepdfini

            logo = canvas.Canvas(filepdfiniruta)

            logofile = PosicionSerializer.getlogourl(useridjson)

            logfilecp = '.' + logofile

            if posicionlogo == 'derecha':

                logo.drawImage(logfilecp, 400, 720, 180, 60)

                logo.save()
            
            elif posicionlogo  == 'izquierda':

                logo.drawImage(logfilecp, 29, 720, 180, 60)

                logo.save()

            logopdf = PdfFileReader(open(filepdfiniruta,"rb"))

            fsatandlogo = PdfFileWriter()

            urlfilelast = "." + str(urlfile)

            fsatpdf = PdfFileReader(open(urlfilelast,"rb"))

            cantidad_pag = fsatpdf.getNumPages()

            for num_pagina in range(cantidad_pag):

                # Union

                fsatpdf_page = fsatpdf.getPage(num_pagina)

                fsatpdf_page.mergePage(logopdf.getPage(0))

                fsatandlogo.addPage(fsatpdf_page)

            filepdffin = 'filefin' + str(idulast) + '.pdf'

            filepdffinruta = './media/'+ filepdffin

            with open(filepdffinruta,"wb") as outputStream:

                fsatandlogo.write(outputStream)

                file_fact_url = "/media/"+filepdffin 

            
            
            
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

                id_usuario = request.user.id
                
                return Response(id_usuario,
                    status=200,
                    content_type='text/plain')

            else:
                
                return Response('1900',status=status.HTTP_400_BAD_REQUEST)


        
        else:

            return Response(status=status.HTTP_404_NOT_FOUND)


#CODIGO NUEVO

class CompanyRegistrationView(APIView): 

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

    parser_class = (FileUploadParser,)

    def post(self,request, *args, **kwargs):

        company_serializer = EmpresaSerializer(data = request.data)

        if company_serializer.is_valid():

            company_serializer.save()

            return Response(company_serializer.data,status=status.HTTP_201_CREATED)

        else:
            print(company_serializer.errors)

            return Response(company_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GUC(APIView): 

    authentication_classes = (TokenAuthentication,)

    permission_classes = (IsAuthenticated,)

 
    def get(self, request, *args, **kwargs):

        if request.method == 'GET':

            data = request.data

            iduid=request.POST['uid']


            print(iduid)

            
            guc_serializer = GetUserCompany.getuc(iduid)

            data = json.loads(guc_serializer)

            for key, value in data[0].items():

                print(key+":"+str(value))

            json_string = json.dumps(guc_serializer)

            #print(json_string)

            #print("Datatype"+str(data))

        return Response(guc_serializer)