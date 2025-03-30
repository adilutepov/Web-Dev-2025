from django.urls import path
from .views import (
    ProductListView, ProductDetailView,
    CategoryListView, CategoryDetailView,
    ProductsByCategoryView
)



urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('category/', CategoryListView.as_view(), name='category-list'),
    path('category/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('category/<int:id>/products/', ProductsByCategoryView.as_view(), name='products-by-category'),
]
