# Generated by Django 4.1.1 on 2022-12-04 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout', '0002_exercise_instructions_alter_set_kilograms_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workout',
            name='note',
            field=models.TextField(blank=True, max_length=512),
        ),
    ]
