from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Workout, Exercise, Set, History
from .serializers import WorkoutSerializer, ExerciseSerializer, SetSerializer
import pytz
from datetime import datetime
import logging


class WorkoutApiView(APIView):
    # Add permission classes to check whether user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # Retrieve all workouts sessions
    def get(self, request, *args, **kwargs):
        # Return all workouts for given requested user
        workouts = Workout.objects.filter(author = request.user.id)
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    # Create workout
    def post(self, request, *args, **kwargs):
        # Create workout data for a given user
        data = {
            'name': request.data.get('name'), 
            'length': request.data.get('length'),
            # If user added a note, retain it else leave it blank
            'note': request.data.get('note') if request.data.get('note') is not None else '',
            # Find History object model associated with a given user
            'history': History.objects.filter(history = request.user.id).first().id,
            'author': request.user.id
        }

        # Get current datetime instance
        now = datetime.now(pytz.utc)
        # Check in user's workout history if it already contains similar workout, if it's the case cancel workout creation => return Forbidden, if not create one (Explannation: users can't simustaneosly create several workout during the same time period)
        # - this is to prevent polluting database with the same workout details, users can only create a new workout each minute in the same day
        if Workout.objects.filter(name = request.data.get('name'), length = request.data.get('length'), date__date = now.date(), date__hour = datetime.now(pytz.utc).hour, date__minute = datetime.now(pytz.utc).minute, author = request.user.id).exists():
                return Response({'error': 'Unable to create a workout, since it already exists'}, status = status.HTTP_403_FORBIDDEN)
        else:
                serializer = WorkoutSerializer(data = data)
                if (serializer.is_valid()):
                    serializer.save()
                    return Response(serializer.data, status = status.HTTP_201_CREATED)

                return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class ExerciseApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    # Retrieve all exercises
    def get(self, request, *args, **kwargs):
        # Return all exercises for last created workout
        exercises = Exercise.objects.filter(workout = Workout.objects.filter(author = request.user.id).last().id)
        serializer = ExerciseSerializer(exercises, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    # Create exercise
    def post(self, request, *args, **kwargs):
        data = {
            'name': request.data.get('name'), 
            'instructions': request.data.get('instructions'),
            # Exercise can either be created independently from workout sessions to compose programs or be added to latest workout sessions, along with sets
            'workout': request.data.get('workout') if request.data.get('workout') is not None else Workout.objects.filter(author = request.user.id).last().id
        }

        serializer = ExerciseSerializer(data = data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class SetApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    # Retrieve all sets for associated exercise
    def get(self, request, *args, **kwargs):
        pass

    # Assign set to existing exercise
    def post(self, request, *args, **kwargs):
        pass
