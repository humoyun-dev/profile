from django.urls import path
from .views import JobListAPIView, JobDetailAPIView

urlpatterns = [
    path('jobs/', JobListAPIView.as_view(), name='job-list'),
    path('jobs/<slug:slug>/', JobDetailAPIView.as_view(), name='job-detail'),
]
