from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'content','image', 'created_at', 'password']
        extra_kwargs = {
        'password': {'write_only': True}  # ✅ API 응답에 포함되지 않게 설정
    }
