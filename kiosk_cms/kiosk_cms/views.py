from django.shortcuts import render
from django.http import HttpResponse
from images.forms import ImageForm


def index(request):
	form = ImageForm()
	return render(request, 'index.html', {'form': form})
