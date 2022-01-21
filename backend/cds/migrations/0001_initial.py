# Generated by Django 3.2.8 on 2022-01-21 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Lecture",
            fields=[
                ("lecture_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=100)),
                ("date", models.DateField()),
                ("corporate_author", models.CharField(max_length=100)),
                ("abstract", models.TextField()),
                ("series", models.CharField(max_length=50)),
                ("speaker", models.CharField(max_length=50)),
                ("speaker_details", models.CharField(max_length=50)),
                ("event_details", models.CharField(max_length=50)),
                ("thumbnail_picture", models.TextField()),
                ("language", models.CharField(max_length=3)),
                ("subject_category", models.CharField(max_length=50)),
                ("lecture_note", models.DateTimeField()),
                ("imprint", models.DurationField()),
                ("license", models.CharField(max_length=30)),
            ],
        ),
    ]
