from django.db import models
from django.contrib.auth.models import AbstractUser


# users can consult their profiles, look into their workout history
class User(AbstractUser):
  username = models.CharField(max_length = 50, blank = False, unique = True)
  email = models.EmailField(max_length = 75, unique = True)
  first_name = models.CharField(max_length = 35)
  last_name = models.CharField(max_length = 75)
  phone_number = models.CharField(max_length = 10)
  registration_date = models.DateTimeField(auto_now = False, auto_now_add = True)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

  def __str__(self):
      return "{}".format(self.username + ", " + self.email + ": " + self.first_name + " " + self.last_name)
