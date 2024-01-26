from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=155, blank=True, null=True)
    last_name = models.CharField(max_length=158, blank=True, null=True)
    username = models.CharField(max_length=56, unique=True)
    profile_image = models.ImageField(upload_to='user/profile/images', blank=True, null=True)
    email = models.EmailField(max_length=150)

    def __str__(self):
        return self.username
