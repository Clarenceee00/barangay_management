from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_groups',  # Change this to a unique name
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions',  # Change this to a unique name
        blank=True
    )



class Resident(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name
