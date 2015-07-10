from django.shortcuts import render
from .models import IP


def user_ip(request):
    print(request.GET.items())
    if request.GET.get('device_id') is not None:
        ip, created = IP.objects.get_or_create(ip_address=request.GET.get('device_id'))
        print(ip.ip_address)
    else:
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

        if x_forwarded_for:
            ipaddress = x_forwarded_for.split(',')[-1].strip()
        else:
            ipaddress = request.META.get('REMOTE_ADDR')
        ip, created = IP.objects.get_or_create(ip_address=ipaddress)
    return ip
