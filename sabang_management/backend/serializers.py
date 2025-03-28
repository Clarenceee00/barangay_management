from rest_framework import serializers
from .models import *

class ResidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resident
        fields = ('resident_picture', 'last_name', 'first_name', 'middle_name', 'nickname', 'birthdate', 'birth_place', 'age', 'contact_number', 'status', 'is_male', 'is_employed', 'is_voters', 'religion', 'email')

