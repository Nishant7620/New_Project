from django.db import models

# Create your models here.

class Location(models.Model):

    name1 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    satta_bara_no = models.CharField(max_length=100,unique=True)

    def __str__(self):
        return self.name1
    
