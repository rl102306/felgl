from django.urls import path

from .views import *

urlpatterns = [
    path('api/post', FileUploadView.as_view()),
    path('api/posicion/post', FileSend.as_view()),
    path('api/signup/post',UserRegistrationView.as_view()),
    path('api/login/post',UserLoginView.as_view()),
   
]