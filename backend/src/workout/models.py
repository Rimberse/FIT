from django.db import models
from history.models import History
from authentication.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


# User's history contains all his workout history, since day 1
class Workout(models.Model):
    name = models.CharField(max_length = 50)
    date = models.DateTimeField(auto_now = False, auto_now_add = True)
    length = models.TimeField(auto_now = False, auto_now_add = False)
    note = models.TextField(max_length = 512, blank=True)
    history = models.ForeignKey(History, on_delete = models.CASCADE)          # Many to one
    author = models.ForeignKey(User, on_delete = models.CASCADE)              # Many to one

    def __str__(self):
        return f'({self.name}, {self.date}: {self.length})'


# One workout may contain multiple exercises composed either from a dedicated program, or from manually created by user
class Exercise(models.Model):
    name = models.CharField(max_length = 50, unique = True)
    instructions = models.TextField(max_length = 2048)
    workout = models.ForeignKey(Workout, on_delete = models.CASCADE)          # Many to one

    def __str__(self):
        return "{}".format(self.name + ", " + self.instructions)


# Used by Exercise model to count sets within exercise and repetition ranges, one exercise may contain multiple sets
# - In the end set can either be finished successfully or failed (person not being capable to lift the required weight or other unexpected circumstances)
class Set(models.Model):
    # - Set can either be consisted of listing weights
    kilograms = models.FloatField(validators = [MinValueValidator(0.0)], blank=True)
    pounds = models.FloatField(validators = [MinValueValidator(0.0)], blank=True)
    repetitions = models.IntegerField(validators = [MinValueValidator(0)], blank=True)
    # - Or from a cardio activity (e.g. running)
    kilometers = models.FloatField(validators = [MinValueValidator(0.0)], blank=True)
    miles = models.FloatField(validators = [MinValueValidator(0.0)], blank=True)
    time = models.TimeField(auto_now = False, auto_now_add = False, blank=True)

    isFinished = models.BooleanField(default = False)
    isFailed = models.BooleanField(default = False)                           
    exercise = models.ForeignKey(Exercise, on_delete = models.CASCADE)          # Many to one

    def __str__(self):
        return "{}".format(self.repetitions + ", " + self.kilograms + ": " + self.isFinished)
