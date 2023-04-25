from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_page, name='main'),
    path('about/', views.main_page, name='about'),
    path('posts/', views.posts, name='posts'),
    path('posts/<int:post_id>', views.single_post, name='post'),
]