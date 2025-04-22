from rest_framework import serializers
from .models import *

class ResidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resident
        fields = ('id', 'resident_picture', 'last_name', 'first_name', 'middle_name', 'nickname', 'birthdate', 'birth_place', 'age', 'contact_number', 'status', 'is_male', 'is_employed', 'is_voters', 'religion', 'email')


class BarangayClearanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarangayClearance
        fields = ('id', 'name', 'birthday', 'address', 'used_in')


class PagpapatunayForScholarSerializer(serializers.ModelSerializer):
    class Meta:
        model = PagpapatunayForScholar
        fields = ('id', 'parent_name', 'age', 'occupation', 'monthly_income')


class ResidencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Residency
        fields = ('id', 'name', 'address', 'is_male')


class JobSeekerAndOathSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSeekerAndOath
        fields = ('id', 'name', 'age', 'birthday', 'address', 'is_male')

        
class IndigencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Indigency
        fields = ('id', 'name', 'used_in', 'is_male')

        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'project_name', 'status', 'project_details', 'project_picture')


class BarangayOfficialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarangayOfficials
        fields = ('id', 'official_picture', 'position', 'name', 'contact_number', 'address', 'term_start', 'term_end')