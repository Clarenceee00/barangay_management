# Generated by Django 5.1.7 on 2025-04-22 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_project_project_details_alter_project_status_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='barangayofficials',
            name='official_picture',
            field=models.ImageField(blank=True, null=True, upload_to='official_pics/'),
        ),
    ]
