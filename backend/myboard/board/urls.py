
from django.urls import path
from . import views

urlpatterns = [
    path('', views.frontend),
    path('posts/', views.PostListAPIView.as_view()),
    path('posts/<int:pk>/', views.PostDetailAPIView.as_view()),
]
