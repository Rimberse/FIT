from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Workout, Exercise, Set
from .serializers import WorkoutSerializer, ExerciseSerializer, SetSerializer


class WorkoutApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # Retrieve all workouts
    def get(self, request, *args, **kwargs):
        # Return all workout for given requested user
        workouts = Workout.objects.filter(user = request.user.id)
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    # Create workout
    def post(self, request, *args, **kwargs):
        # Create workout for the given user
        data = {
            'name': request.data.get('name'), 
            'length': request.data.get('length'),
            'history': request.data.get('history'),
            'author': request.user.id
        }

        serializer = WorkoutSerializer(data = data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class ExerciseApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    # Retrieve all exercises
    def get(self, request, *args, **kwargs):
        # Return all workout for given requested user
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    # Create exercise
    def post(self, request, *args, **kwargs):
        data = {
            'name': request.data.get('name'), 
            'instructions': request.data.get('instructions'),
            'workout': request.data.get('workout')
        }

        serializer = ExerciseSerializer(data = data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
