import React from "react";
import "../styles/PostList.scss";
import axios from "axios";

function PostList({ posts, onPostDeleted }) {
  const handleDelete = async (id) => {
    const input = window.prompt(
      "삭제하려면 비밀번호를 입력하세요 (없으면 Enter)"
    );
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}/`, {
        data: { password: input || "" }, // ✅ null이나 undefined 방지
        headers: { "Content-Type": "application/json" },
      });
      onPostDeleted();
    } catch (err) {
      alert("❌ 삭제 실패: " + (err.response?.data?.detail || "서버 오류"));
    }
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post">
          {/* <p className="post-title">{post.title}</p> */}
          <div className="post-content">
            {post.image && (
              <img
                src={`http://localhost:8000${post.image}`}
                alt="post"
                className="post-image"
              />
            )}
            <p className="post-text">{post.content}</p>
          </div>
          <div className="post-footer">
            <p className="timestamp">
              {new Date(post.created_at).toLocaleString()}
            </p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(post.id)}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
