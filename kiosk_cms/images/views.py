import base64
import cStringIO
from django.contrib.auth.models import User
from django.core.exceptions import MultipleObjectsReturned
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, Http404
from django.utils import timezone
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from .serializers import ImageSerializer, ImageVoteSerializer
from campaigns.models import Campaign
from vote_id.views import get_vote_id


# /api/images/
@api_view(['GET', 'POST'])
def image_collection(request):
    if request.method == 'GET':
        images = Image.objects.filter(active=True).filter(flagged=False).select_related()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        try:
            campaign = Campaign.objects.get(active=True)
        except Campaign.DoesNotExist:
            raise Http404("No campaign is currently active.")
        except MultipleObjectsReturned:
            campaigns = Campaign.objects.filter(active=True)
            campaign = campaigns[0]

        raw_data = request.data
        user, created = User.objects.get_or_create(
            email=raw_data.get('email'),
            defaults={'first_name': raw_data.get('name'),
                      'username': raw_data.get('email')}
        )
        data = {
          'image': raw_data.get('image'),
          'user_id': user.id,
          'campaign_id': campaign.id
        }
        serializer = ImageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
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
        user, created = User.objects.get_or_create(
            email=raw_data.get('email'),
            defaults={'first_name': raw_data.get('name')}
        )
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
        vote_id = get_vote_id(request)
        images = Image.objects.filter(campaign_id__active=True).filter(active=True).filter(flagged=False)

        # sends the request object to the serializer, so it can compared
        serializer = ImageVoteSerializer(images, many=True, context={'vote_id': vote_id})
        return Response(serializer.data)


# /api/images/inactive_campaigns/
@api_view(['GET'])
def inactive_campaign_images(request):
    if request.method == 'GET':
        images = Image.objects.filter(campaign_id__active=False).filter(active=True)
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

# /api/images/winners/
@api_view(['GET'])
def image_winners_collection(request):
    if request.method == 'GET':
        images = Image.objects.filter(campaign_winner=True).select_related().filter(active=True).order_by('id')
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

# /api/images/<image_id>/upvote/
@api_view(['GET'])
def image_upvote(request, pk):
    if request.method == 'GET':
        image = get_object_or_404(Image, pk=pk)
        vote_id = get_vote_id(request)

        # checks to see if a relation has been created between ip address/device id
        # and the image, which indicates a vote.
        if image.vote_id_set.filter(vote_id=vote_id.vote_id).exists():
            serializer = ImageSerializer(image)

        # otherwise, adds a vote is the campaign is active.
        # if a vote was added, creates an Vote_ID--Image relation
        else:
            vote, voted = image.upvote()
            if voted:
                vote_id.images.add(image)
                vote_id.save()
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