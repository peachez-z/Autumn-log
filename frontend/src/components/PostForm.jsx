import React, { useState } from "react";
import axios from "axios";

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:8000/api/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setContent("");
      setImage(null);
      onPostCreated();
    } catch (error) {
      alert("작성 실패");
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
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button type="submit">작성</button>
    </form>
  );
}

export default PostForm;
