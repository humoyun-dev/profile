from django.db import models
from django.utils.text import slugify

def generate_unique_slug(model, name, base_slug=None):
    if not base_slug:
        base_slug = slugify(name)

    unique_slug = base_slug
    counter = 1

    while model.objects.filter(slug=unique_slug).exists():
        unique_slug = f"{base_slug}-{counter}"
        counter += 1

    return unique_slug

class Job(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = generate_unique_slug(Job, self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ProductImage(models.Model):
    product = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='images')
    image = models.FileField(blank=False, upload_to='job/images')

    def image_url(self):
        return self.image.url