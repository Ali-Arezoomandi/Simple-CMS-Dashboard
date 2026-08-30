from django.urls import path

from . import views

app_name = 'products'

urlpatterns = [
    path('', views.ProductsListCreateView.as_view(), name='product-list-create'),
    path('<int:pk>', views.ProductsRetrieveUpdatedestroyView.as_view(), name='product-detail'),
    
]