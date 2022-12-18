from rest_framework import serializers
from .models import Workout, Exercise, Set


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        # Serializer should contain all fields specified within a class model
        fields = ['name', 'date', 'length', 'note', 'history', 'author']


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name', 'instructions']


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = ['kilograms', 'repetitions', 'kilometers', 'time', 'isFinished', 'isFailed']
