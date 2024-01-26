from django.db import models

class SkillName(models.Model):
    name = models.CharField(max_length=244)

    def __str__(self):
        return self.name

class Skill(models.Model):
    skillName = models.ForeignKey(SkillName, on_delete=models.CASCADE)
    name = models.CharField(max_length=244)
    image = models.ImageField(upload_to='skill/images')

    def __str__(self):
        return self.name

class CV(models.Model):
    file = models.FileField(upload_to='cv/')