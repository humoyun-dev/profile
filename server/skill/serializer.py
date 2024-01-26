from rest_framework import serializers
from .models import SkillName, Skill, CV

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'image']

class SkillNameSerializer(serializers.ModelSerializer):
    skill = serializers.SerializerMethodField()

    class Meta:
        model = SkillName
        fields = ['id', 'name', 'skill']

    def get_skill(self, obj):
        skill = Skill.objects.filter(skillName=obj)
        serializer = SkillSerializer(skill, many=True)
        return serializer.data


class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CV
        fields = ['id', 'file']
