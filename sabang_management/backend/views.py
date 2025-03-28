from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets, permissions
from .serializers import *
from .models import *

class ResidentViewset(viewsets.ViewSet):
    permission_clasess = [permissions.AllowAny]
    queryset = Resident.objects.all()
    serializer_class = ResidentSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)      

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def retrieve(self, request, pk=None):
        resident =  self.queryset.get(pk=pk)
        serializer = self.serializer_class(resident)
        return Response(serializer.data)

    def update(self, request, pk=None):
        resident =  self.queryset.get(pk=pk)
        serializer = self.serializer_class(resident, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def destroy(self, request, pk=None):
        resident =  self.queryset.get(pk=pk)
        resident.delete()
        return Response(status=202)