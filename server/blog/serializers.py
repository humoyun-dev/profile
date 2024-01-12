from rest_framework import serializers
from .models import Blog
from user.serializers import CustomUserSerializer  # Import the CustomUserSerializer

class BlogSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer()

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'image', 'author', 'slug', 'date']

