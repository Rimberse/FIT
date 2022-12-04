from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from authentication.serializer import UserTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from authentication.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated


# On every login, a new access token will be generated which have user id, username and email encoded
class UserTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/login/',
        '/register/',
        '/refresh-token/'
    ]

    return Response(routes)


# An API endpoint tester responding to incoming requests
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f'API responded to: {request.user} GET request'
        return Response({'response': data}, status = status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'API just responded to POST request with text: {text}'
        return Response({'response': data}, status = status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)
