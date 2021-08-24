from django.urls import path

from .views import *

urlpatterns = [
    
    path('post', FileUploadView.as_view()),
    path('posicion/post', FileSend.as_view()),
]