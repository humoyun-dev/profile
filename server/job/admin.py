from django.contrib import admin
from job.models import ProductImage, Job

class JobImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class JobAdmin(admin.ModelAdmin):
    inlines = [JobImageInline]
    list_display = ('id', 'title', 'date')
    search_fields = ('title', 'date', 'id')

admin.site.register(Job, JobAdmin)