import React from "react";

function PostList({ posts }) {
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.image && (
              <img
                src={`http://localhost:8000${post.image}`}
                alt="게시물 이미지"
                width="200"
              />
            )}
            <strong>{post.title}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
