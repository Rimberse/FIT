from django.urls import path, include

from .views import (
    WorkoutApiView,
    ExerciseApiView
)

urlpatterns = [
    path('workout/', WorkoutApiView.as_view()),
    path('exercise/', ExerciseApiView.as_view()),
]