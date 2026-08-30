from rest_framework import serializers
from django.urls import reverse

from .models import ProductsModel


class PorductModelSerializers(serializers.ModelSerializer):
    absolute_custom_url = serializers.SerializerMethodField()

    class Meta:
        model = ProductsModel
        fields = [
            "id",
            "title",
            "price",
            "stock",
            "status",
            "image",
            "created_at",
            "absolute_custom_url",
        ]

    def get_absolute_custom_url(self, obj):
        request = self.context.get("request")
        reverse_url = reverse("products:product-detail", kwargs={"pk": obj.id})
        if request is not None:
            return request.build_absolute_uri(reverse_url)
        return reverse_url
