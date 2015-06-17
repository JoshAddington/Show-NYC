from django.shortcuts import render
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
		images = Image.objects.filter(active=True).filter(flagged=False)
		serializer = ImageSerializer(images, many=True)
		return Response(serializer.data)
	elif request.method == 'POST':
		data = {'image': request.DATA.get('image'), 'user_id': request.DATA.get('user_id'), 'campaign_id': request.DATA.get('campaign_id')}
		serializer = ImageSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def image_element(request, pk):
	try:
		image = Image.objects.get(pk=pk)
	except Image.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = ImageSerializer(image)
		return Response(serializer.data)