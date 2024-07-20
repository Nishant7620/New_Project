from django.urls import path
from core import views
urlpatterns = [
    path('base/',views.base,name="base"),
    path('',views.index,name="index"),

]
