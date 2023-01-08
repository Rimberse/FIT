from django.urls import path, include


from .views import (
    WorkoutApiView,
    ExerciseApiView,
    SetApiView
)


urlpatterns = [
    path('workouts/', WorkoutApiView.as_view()),
    path('exercises/', ExerciseApiView.as_view()),
    path('sets/', SetApiView.as_view())
]
