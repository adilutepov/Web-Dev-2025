from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=90,unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name =models.CharField(max_length=30)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    likes= models.IntegerField(default=0)
    imageUrl = models.URLField()
    description =models.TextField(max_length=300)
    rating = models.FloatField()
    productUrl = models.URLField()

    def __str__(self) -> str:
        return self.name
    

