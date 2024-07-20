from django.contrib import admin
from .models import Location

# Register your models here.

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ['id','name1','name2','price','satta_bara_no']
