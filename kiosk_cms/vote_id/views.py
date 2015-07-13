from django.shortcuts import render
from .models import Vote_ID


def get_vote_id(request):
    if request.GET.get('device_id') is not None:
        vote_id, created = Vote_ID.objects.get_or_create(vote_id=request.GET.get('device_id'))
    else:
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

        if x_forwarded_for:
            ipaddress = x_forwarded_for.split(',')[-1].strip()
        else:
            ipaddress = request.META.get('REMOTE_ADDR')
        vote_id, created = Vote_ID.objects.get_or_create(vote_id=ipaddress)
    return vote_id
