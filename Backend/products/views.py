from django.shortcuts import render
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from .models import ProductsModel
from .serializers import PorductModelSerializers

# Create your views here.

class ProductsListCreateView(ListCreateAPIView):
    queryset = ProductsModel.objects.all()
    serializer_class = PorductModelSerializers


class ProductsRetrieveUpdatedestroyView(RetrieveUpdateDestroyAPIView):
    queryset = ProductsModel.objects.all()
    serializer_class = PorductModelSerializers

