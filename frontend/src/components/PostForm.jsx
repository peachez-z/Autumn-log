import React, { useState } from "react";
import axios from "axios";
import "../styles/PostForm.scss";

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);
    formData.append("password", password);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/posts/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTitle("");
      setContent("");
      setImage(null);
      setPassword("");
      onPostCreated();
    } catch (error) {
      alert("작성 실패");
    }
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="가을에게 하고싶은 말~~?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        required
      />
      <input
        type="password"
        placeholder="비밀번호 (삭제 및 수정 시 필요)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="form-bottom">
        <div className="file-upload">
          <label htmlFor="file">사진 선택</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        {image && <span className="file-name">{image.name}</span>}
        <button type="submit">작성</button>
      </div>
    </form>
  );
}

export default PostForm;
