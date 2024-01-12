from rest_framework import generics
from .serializer import *

class SkillNameListAPIView(generics.ListAPIView):
    queryset = SkillName.objects.all()
    serializer_class = SkillNameSerializer


class CVListAPIView(generics.ListAPIView):
    queryset = CV.objects.all()
    serializer_class = CVSerializer
