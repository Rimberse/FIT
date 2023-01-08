from rest_framework import serializers
from .models import Workout, Exercise, Set


class WorkoutSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Workout
        # Serializer should contain all fields specified within a class model
        fields = ['id', 'name', 'date', 'length', 'note', 'history', 'author']


class ExerciseSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Exercise
        fields = ['id', 'name', 'instructions', 'workout']


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = ['kilograms', 'pounds', 'repetitions', 'kilometers', 'miles', 'time', 'isFinished', 'isFailed', 'exercise']
