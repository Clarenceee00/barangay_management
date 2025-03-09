from django.urls import path
from .views import resident_create, admin_dashboard, user_dashboard

urlpatterns = [
    path('', resident_create, name='resident_create'),
    path('', admin_dashboard, name='admin_dashboard'),
    path('', user_dashboard, name='user_dashboard'),
]
