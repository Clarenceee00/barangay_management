from django.urls import path
from .views import resident_create

urlpatterns = [
    path('', resident_create, name='resident_create'),
]
