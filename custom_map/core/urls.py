from django.urls import path
from core import views
urlpatterns = [
    path('base/',views.base,name="base"),
    path('',views.index,name="index"),
    path('details/<int:location_id>/',views.get_location_details,name="details"),

]
