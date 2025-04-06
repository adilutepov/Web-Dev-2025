from django.contrib import admin

from .models import Product, Category,Company, Vacancy

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Company)
admin.site.register(Vacancy)