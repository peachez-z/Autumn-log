import React from "react";
import "../styles/PostList.scss";
import axios from "axios";

function PostList({ posts, onPostDeleted }) {
  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}/`);
      onPostDeleted();
    } catch (err) {
      alert("삭제 실패");
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
