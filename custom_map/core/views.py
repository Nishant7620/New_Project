from django.shortcuts import render,redirect,get_object_or_404
from .models import Location

# Create your views here.

def base(request):
    return render(request,"core/base.html")


def index(request):
    locations = Location.objects.all()
    return render(request,"core/index.html",{'locations':locations})

def get_location_details(request,location_id):
    location = get_object_or_404(Location, id=location_id)
    return render(request,"core/details.html",{'location':location})
    