from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from .serializers import ImageSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def image_collection(request):
	if request.method == 'GET':
		images = Image.objects.filter(active=True).filter(flagged=False).select_related()
		serializer = ImageSerializer(images, many=True)
		return Response(serializer.data)
	elif request.method == 'POST':
		data = {
			'image': request.data.get('image'), 
			'user_id': request.data.get('user_id'), 
			'campaign_id': request.data.get('campaign_id')
		}
		serializer = ImageSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def image_element(request, pk):
	image = get_object_or_404(Image, pk=pk)
	
	if request.method == 'GET':
		serializer = ImageSerializer(image)
		return Response(serializer.data)
	elif request.method == 'PUT':
		data = {
			'image': request.data.get('image'), 
			'user_id': request.data.get('user_id'), 
			'campaign_id': request.data.get('campaign_id'),
		}
		serializer = ImageSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method == 'DELETE':
		image.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)