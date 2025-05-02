from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('board.urls')),  # 여기가 board.urls만 포함
]
