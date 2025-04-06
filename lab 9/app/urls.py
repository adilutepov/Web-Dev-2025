from django.urls import path
from .views import (
    ProductListView, ProductDetailView,
    CategoryListView, CategoryDetailView,
    ProductsByCategoryView ,CompanyListView,CompanyDetailView,
    CompanyVacancyListView,VacancyListView,VacancyDetailView,TopTenVacancyListView
)



urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('category/', CategoryListView.as_view(), name='category-list'),
    path('category/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('category/<int:id>/products/', ProductsByCategoryView.as_view(), name='products-by-category'),
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacancyListView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', TopTenVacancyListView.as_view()),
]
