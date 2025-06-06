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


class Resident(models.Model):
    STATUS_CHOICES = [
        ('Single', 'Single'),
        ('Married', 'Married'),
        ('Divorced', 'Divorced'),
    ]
    
    id = models.AutoField(primary_key=True)
    resident_picture = models.ImageField(upload_to='resident_pics/')
    last_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30)
    birthdate = models.DateField()
    birth_place = models.CharField(max_length=50)
    age = models.IntegerField()
    contact_number = models.CharField(max_length=11)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES)
    is_male = models.BooleanField()
    is_employed = models.BooleanField()
    is_voters = models.BooleanField()
    religion = models.CharField(max_length=30)
    email = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nickname} ({'Male' if self.is_male else 'Female', 'Employed' if self.is_employed else 'Unemployed', 'Voters' if self.is_voters else 'Not Voters'})"


class BarangayClearance(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    birthday = models.DateField()
    address = models.CharField(max_length=100)
    used_in = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class PagpapatunayForScholar(models.Model):
    id = models.AutoField(primary_key=True)
    parent_name = models.CharField(max_length=50)
    age = models.IntegerField()
    occupation = models.CharField(max_length=30)
    monthly_income = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.parent_name


class Residency(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"


class JobSeekerAndOath(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    birthday = models.DateField()
    address = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"


class Indigency(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    used_in = models.CharField(max_length=100)
    is_male = models.BooleanField()

    def __str__(self):
        return f"{self.name} ({'Male' if self.is_male else 'Female'})"


class Project(models.Model):
    STATUS_CHOICES = [
        ('Ongoing', 'Ongoing'),
        ('Completed', 'Completed'),
        ('Upcoming', 'Upcoming'),
    ]

    id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=100)
    status = models.CharField(max_length=9, choices=STATUS_CHOICES)
    project_details = models.CharField(max_length=200, null=True, blank=True)
    project_picture = models.ImageField(upload_to='project_pics/')

    def __str__(self):
        return f"{self.project_name} ({self.get_status_display()})"


class BarangayOfficials(models.Model):
    id = models.AutoField(primary_key=True)
    official_picture = models.ImageField(upload_to='official_pics/', null=True, blank=True)
    position = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=11)
    address = models.CharField(max_length=100)
    term_start = models.DateField()
    term_end = models.DateField()

    def __str__(self):
        return f"{self.name} the barangay {self.position}"