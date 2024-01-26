from django.urls import path
from .views import *

urlpatterns = [
    path('api/skillnames/', SkillNameListAPIView.as_view(), name='skillname-list'),
    path('api/cvs/', CVListAPIView.as_view(), name='cv-list'),
]
