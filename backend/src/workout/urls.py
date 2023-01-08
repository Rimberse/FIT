from django.urls import path, include

from .views import (
    WorkoutApiView,
    ExerciseApiView,
    SetApiView
)

urlpatterns = [
    path('workout/', WorkoutApiView.as_view()),
    path('exercise/', ExerciseApiView.as_view()),
    path('set/', SetApiView.as_view())
]