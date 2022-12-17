from django.urls import path, include
from .views import NoteViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('notes', NoteViewSet, basename='notes')
router.register('users', UserViewSet)

urlpatterns = [
   path('api/', include(router.urls)),
]
   