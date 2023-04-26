from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main'),
    path('about/', views.about, name='about'),
    path('posts/', views.posts, name='posts'),
    path('posts/<int:pk>', views.post_detail, name='post'),
]