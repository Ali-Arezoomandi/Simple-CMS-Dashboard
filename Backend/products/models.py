from django.db import models

from users.models import UserStatusType


# Create your models here.
class ProductsModel(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=9, decimal_places=0)
    stock = models.PositiveIntegerField(default=1)
    status = models.IntegerField(
        choices=UserStatusType.choices, default=UserStatusType.NOT_ACTIVE.value
    )
    image = models.ImageField(upload_to="products", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
