import React, { useState } from "react";
import axios from "axios";

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/posts/", { title, content });
      setTitle("");
      setContent("");
      onPostCreated(); // 목록 다시 불러오게
      console.log("onPostCreated 호출됨");
    } catch (error) {
      alert("글 작성 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>새 게시물 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">작성</button>
    </form>
  );
}

export default PostForm;
