from django.db import models
from django.utils import timezone

class Post(models.Model):
    content = models.TextField()
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    password = models.CharField(max_length=100, default='') 
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
