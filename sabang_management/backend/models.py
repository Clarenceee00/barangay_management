from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username


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