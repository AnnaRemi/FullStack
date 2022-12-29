from django.contrib import admin
from django.urls import path, include
from my_back_api import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('my_back_api.urls')),
    path('auth/', obtain_auth_token),
]
