# Generated by Django 5.1.7 on 2025-04-01 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_alter_barangayclearance_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='project_details',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('Ongoing', 'Ongoing'), ('Completed', 'Completed'), ('Upcoming', 'Upcoming')], max_length=9),
        ),
        migrations.AlterField(
            model_name='resident',
            name='status',
            field=models.CharField(choices=[('Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced')], max_length=8),
        ),
    ]
