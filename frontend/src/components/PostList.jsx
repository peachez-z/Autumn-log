import React, { useState } from "react";
import "../styles/PostList.scss";
import axios from "axios";

function PostList({ posts, onPostUpdated, onPostDeleted }) {
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const startEdit = (post) => {
    setEditingId(post.id);
    setEditContent(post.content);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  const submitEdit = async (postId) => {
    const password = window.prompt("비밀번호를 입력하세요:");
    if (!password) return;

    try {
      const res = await axios.put(
        `http://localhost:8000/api/posts/${postId}/`,
        {
          content: editContent,
          password: password,
        }
      );
      console.log("✅ 수정 성공:", res.data);

      await onPostUpdated(); // 비동기 fetchPosts()
      setEditingId(null);
      setEditContent("");
    } catch (err) {
      console.error("❌ 실제 오류 발생:", err);
      alert("❌ 수정 실패: " + (err.response?.data?.detail || "오류 발생"));
    }
  };

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

            {editingId === post.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="edit-textarea"
                />
                <div className="edit-controls">
                  <button onClick={() => submitEdit(post.id)}>저장</button>
                  <button onClick={cancelEdit}>취소</button>
                </div>
              </>
            ) : (
              <p className="post-text">{post.content}</p>
            )}
          </div>
          <div className="post-footer">
            <p className="timestamp">
              {new Date(post.created_at).toLocaleString()}
            </p>
            <button onClick={() => startEdit(post)}>✏️</button>
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
