from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('board.urls')),  # 여기가 board.urls만 포함
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)