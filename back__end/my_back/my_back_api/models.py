from django.db import models
import datetime

class Note(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField(default=datetime.date.today)

