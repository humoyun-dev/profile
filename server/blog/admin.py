from django.contrib import admin
from blog.models import Blog

class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date', 'author')
    search_fields = ('title', 'date', 'author__username')
    list_filter = ('date', 'author__username')
    date_hierarchy = 'date'
    ordering = ('-date',)
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blog, BlogAdmin)
