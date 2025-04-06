from rest_framework import serializers
from .models import Product, Category,Company, Vacancy

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class ProductSerializer(serializers.ModelSerializer):

    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        write_only=True,
        source='category'
    )
    
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'category',      
            'category_id',   
            'likes',
            'imageUrl',
            'description',
            'rating',
            'productUrl'
        )

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name',
                  'description',
                  'city',
                  'address')

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(),
        write_only=True,
        source='company'
    )

    class Meta:
        model = Vacancy
        fields = (
            'id',
            'name',
            'description',
            'salary',
            'company',       
            'company_id',    
        )