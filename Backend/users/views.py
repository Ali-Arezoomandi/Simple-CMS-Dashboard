from django.shortcuts import render
from rest_framework.generics import (
    ListCreateAPIView, 
    RetrieveUpdateDestroyAPIView
)

from .models import User
from.serializers import UserModelSerializers

# Create your views here.
class UserListCreateView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializers

class UserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializers
