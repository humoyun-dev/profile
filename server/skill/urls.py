from django.urls import path
from .views import *

urlpatterns = [
    path('skillnames/', SkillNameListAPIView.as_view(), name='skillname-list'),
    path('cvs/', CVListAPIView.as_view(), name='cv-list'),
]
