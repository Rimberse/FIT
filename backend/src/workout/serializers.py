from rest_framework import serializers
from .models import Workout, Exercise, Set


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['name', 'length', 'note']


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name', 'instructions']


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = ['kilograms', 'repetitions', 'kilometers', 'time', 'isFinished', 'isFailed']
