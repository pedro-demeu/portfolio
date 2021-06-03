from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import render_home
urlpatterns = [
    path('', render_home)
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
