from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('resident', ResidentViewset, basename='resident')
urlpatterns = router.urls

# urlpatterns = [
#     path('/', , name=''),
# ]
