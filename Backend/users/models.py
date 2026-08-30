from django.db import models


# Create your models here.
class UserStatusType(models.IntegerChoices):
    ACTIVE = 1, "active"
    NOT_ACTIVE = 2, "not_active"


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    job = models.CharField(max_length=255)
    status = models.IntegerField(choices=UserStatusType.choices, default=UserStatusType.NOT_ACTIVE.value)
    
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
