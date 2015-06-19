from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Campaign
from .serializers import CampaignSerializer

def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def campaign_collection(request):
	if request.method == 'GET':
		campaigns = Campaign.objects.all().select_related()
		serializer = CampaignSerializer(campaigns, many=True)
		return Response(serializer.data)
	
@api_view(['GET'])
def campaign_element(request, pk):	
	campaign = get_object_or_404(Campaign, pk=pk)
	
	if request.method == 'GET':
		serializer = CampaignSerializer(campaign)
		return Response(serializer.data)
