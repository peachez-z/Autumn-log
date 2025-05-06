import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Rabbit from "./components/Rabbit";
import MouseFollower from "./components/MouseFollower";
import "./styles/App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newId = Date.now(); // 고유 ID
      const top = Math.floor(Math.random() * 80) + 10; // 10~90%
      const duration = Math.floor(Math.random() * 10) + 15; // 15~24초
      const delay = Math.random() * 1;

      const newRabbit = {
        id: newId,
        style: {
          top: `${top}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          left: "-100px",
        },
      };

      setRabbits((prev) => [...prev.slice(-9), newRabbit]); // 마지막 9마리만 유지

      // 일정 시간 후 자동 제거
      setTimeout(() => {
        setRabbits((prev) => prev.filter((r) => r.id !== newId));
      }, (duration + delay) * 1000);
    }, 2000); // 2초마다 1마리

    return () => clearInterval(interval);
  }, []);

  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/posts/`).then((res) => {
      console.log("받아온 게시물:", res.data);
      setPosts(res.data);
    });
  };

  const handleUpdate = async () => {
    await fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {" "}
      <MouseFollower />
      <div className="page-wrapper">
        <header className="storybook-header">
          <div className="cloud-box">
            <span className="emoji-left">🐇</span>
            <span className="storybook-title">가을 방명록</span>
            <span className="emoji-right">🐇</span>
          </div>
          <p className="storybook-sub">가을이에게 살며시 말을 건네보세요💕</p>
        </header>

        {/* <header className="header">ฅᐢ..ᐢ₎♡ 가을 방명록 ♡₍ᐢ..ᐢ₎ฅ</header> */}
        <div className="flying-rabbit-container">
          {rabbits.map((r) => (
            <Rabbit key={r.id} style={r.style} />
          ))}
        </div>

        <div className="app-container">
          <PostForm onPostCreated={fetchPosts} />
          <PostList
            posts={posts}
            onPostUpdated={fetchPosts}
            onPostDeleted={fetchPosts}
          />
        </div>
      </div>
    </>
  );
}

export default App;
