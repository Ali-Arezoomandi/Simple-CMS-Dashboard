from rest_framework import serializers
from django.urls import reverse

from .models import User


class UserModelSerializers(serializers.ModelSerializer):
    absolute_custom_url = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "job",
            "status",
            "created_date",
            "absolute_custom_url",
        ]

    def get_absolute_custom_url(self, obj):
        request = self.context.get("request")
        reverse_url = reverse("users:user-detail", kwargs={"pk": obj.id})
        if request is not None:
            return request.build_absolute_uri(reverse_url)
        return reverse_url
