from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class Admin(BaseUserManager):
    def create_user(self, username, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            username,
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class BarangayClearance(models.Model):
    name = models.CharField(max_length=50)
    birthday = models.DateField()
    address = models.CharField(max_length=100)
    used_in = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class PagpapatunayForScholar(models.Model):
    parent_name = models.CharField(max_length=50)
    age = models.IntegerField()
    occupation = models.CharField(max_length=30)
    monthly_income = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.parent_name


class Residency(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"


class JobSeekerAndOath(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    birthday = models.DateField()
    address = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"


class Indigency(models.Model):
    name = models.CharField(max_length=50)
    used_in = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"