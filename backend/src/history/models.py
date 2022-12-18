from django.db import models
from authentication.models import User;


# User's history contains all their workout history, since day 1
class History(models.Model):
    history = models.OneToOneField(User, on_delete = models.CASCADE)          # One to one

    def __str__(self):
        return self.history
