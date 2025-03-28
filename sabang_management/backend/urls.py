from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('resident', ResidentViewset, basename='resident'),
router.register('clearance', BarangayClearanceViewset, basename='clearance'),
router.register('pagpapatunay', PagpapatunayForScholarViewset, basename='pagpapatunay'),
router.register('residency', ResidencyViewset, basename='residency')
router.register('seekerOath', JobSeekerAndOathViewset, basename='seekerOath'),
router.register('indigency', IndigencyViewset, basename='indigency'),
router.register('project', ProjectViewset, basename='project'),
router.register('officials', BarangayOfficialsViewset, basename='officials')
urlpatterns = router.urls

# urlpatterns = [
#     path('/', , name=''),
# ]
