from .models import Note
from .serializers import NoteSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        


class NoteViewSet(viewsets.ModelViewSet):
        queryset = Note.objects.all()
        serializer_class = NoteSerializer
        permission_classes = [IsAuthenticated]  
        authentication_classes = (TokenAuthentication,)


