from django.urls import path
from . import views

from rest_framework_simplejwt.views import(TokenRefreshView)

urlpatterns = [
    path('login/', views.UserTokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('refresh-token/', TokenRefreshView.as_view(), name ='token_refresh'),
    path('register/', views.RegisterView.as_view(), name ='auth_register'),
    path('', views.getRoutes),
]