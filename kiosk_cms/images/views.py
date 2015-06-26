from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.utils import timezone
from rest_framework import status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from .serializers import ImageSerializer


# Create your views here.
# /api/images/
@api_view(['GET', 'POST'])
def image_collection(request):
    if request.method == 'GET':
        images = Image.objects.filter(active=True).filter(flagged=False).select_related()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        raw_data = request.data
        user, created = User.objects.get_or_create(email=raw_data.get('email'), defaults={'first_name': raw_data.get('name'), 'username': raw_data.get('email')})
        data = {
          'image': raw_data.get('image'),
          'user_id': user.id,
          'campaign_id': raw_data.get('campaign_id')
        }
        serializer = ImageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# /api/images/<image_id>/
@api_view(['GET', 'PUT', 'DELETE'])
def image_element(request, pk):
    image = get_object_or_404(Image, pk=pk)

    if request.method == 'GET':
        serializer = ImageSerializer(image)
        return Response(serializer.data)
    elif request.method == 'PUT':
        raw_data = request.data
        user, created = User.objects.get_or_create(email=raw_data.get('email'), defaults={'first_name': raw_data.get('name')})
        data = {
          'image': raw_data.get('image'),
          'user_id': user.id,
          'campaign_id': raw_data.get('campaign_id')
        }
        serializer = ImageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# /api/images/active_campaigns/
@api_view(['GET'])
def active_campaign_images(request):
    if request.method == 'GET':
        now = timezone.now()
        images = Image.objects.filter(campaign_id__start_date__lte=now).filter(campaign_id__end_date__gte=now)
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)


# /api/images/inactive_campaigns/
@api_view(['GET'])
def inactive_campaign_images(request):
    if request.method == 'GET':
        now = timezone.now()
        images = Image.objects.filter(campaign_id__end_date__lte=now)
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

# /api/images/winners/
@api_view(['GET'])
def image_winners_collection(request):
    if request.method == 'GET':
        images = Image.objects.filter(campaign_winner=True).select_related()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

# /api/images/<image_id>/upvote/
@api_view(['GET'])
def image_upvote(request, pk):
    image = get_object_or_404(Image, pk=pk)

    if request.method == 'GET':
        vote = image.upvote()
        serializer = ImageSerializer(vote)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

# /api/images/<image_id>/downvote/
@api_view(['GET'])
def image_downvote(request, pk):
    image = get_object_or_404(Image, pk=pk)

    if request.method == 'GET':
        vote = image.downvote()
        serializer = ImageSerializer(vote)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)