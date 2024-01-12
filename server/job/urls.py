from django.urls import path
from .views import JobListAPIView, JobDetailAPIView

urlpatterns = [
    path('api/jobs/', JobListAPIView.as_view(), name='job-list'),
    path('api/jobs/<slug:slug>/', JobDetailAPIView.as_view(), name='job-detail'),
]
