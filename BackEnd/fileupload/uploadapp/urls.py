from django.urls import path

from .views import *

urlpatterns = [
    path('fu/post', FileUploadView.as_view()),
    path('posicion/post', FileSend.as_view()),
    path('signup/post',UserRegistrationView.as_view()),
    path('login/post',UserLoginView.as_view()),
    path('company/post',CompanyRegistrationView.as_view()),
    path('user/post',UserRegistrationView.as_view()),
    path('guc/get',GUC.as_view()),
   
]