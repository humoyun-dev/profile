from django.db import models
from django.utils.text import slugify
from user.models import CustomUser
from django.urls import reverse

def generate_unique_slug(model, name, base_slug=None):
    if not base_slug:
        base_slug = slugify(name)

    unique_slug = base_slug
    counter = 1

    while model.objects.filter(slug=unique_slug).exists():
        unique_slug = f"{base_slug}-{counter}"
        counter += 1

    return unique_slug

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog/images', blank=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, default=None)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = generate_unique_slug(Blog, self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('blog-detail', args=[str(self.slug)])

    def __str__(self):
        return self.title
