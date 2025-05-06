from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from rest_framework.parsers import JSONParser
from django.conf import settings
from django.shortcuts import render

def frontend(request):
    return render(request, 'index.html')

super_pw = settings.SUPER_DELETE_PASSWORD

class PostListAPIView(APIView):
    def get(self, request):
        posts = Post.objects.all().order_by('-created_at')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("❌ 유효하지 않은 데이터:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PostDetailAPIView(APIView):
    parser_classes = [JSONParser]

    def delete(self, request, pk):
            try:
                post = Post.objects.get(pk=pk)
                input_password = request.data.get('password', '')

                super_pw = getattr(settings, 'SUPER_DELETE_PASSWORD', None)

                # 일반 비번 or 슈퍼 비번 허용
                if (post.password and post.password != input_password) and input_password != super_pw:
                    return Response({'detail': '비밀번호가 일치하지 않습니다.'}, status=403)

                post.delete()
                return Response(status=204)

            except Post.DoesNotExist:
                return Response(status=404)
        
    def put(self, request, pk):  
        try:
            post = Post.objects.get(pk=pk)
            input_password = request.data.get('password')

            if post.password != input_password:
                return Response({'detail': '비밀번호가 일치하지 않습니다.'}, status=status.HTTP_403_FORBIDDEN)

            serializer = PostSerializer(post, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)  # ✅ 이 줄!
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Post.DoesNotExist:
            return Response({'detail': '게시글이 존재하지 않습니다.'}, status=status.HTTP_404_NOT_FOUND)
