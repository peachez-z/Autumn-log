import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Rabbit from "./components/Rabbit";
import "./styles/App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const rabbitClasses = [
    "r1",
    "r2",
    "r3",
    "r4",
    "r5",
    "r6",
    "r7",
    "r8",
    "r9",
    "r10",
  ];

  const fetchPosts = () => {
    axios.get("http://localhost:8000/api/posts/").then((res) => {
      console.log("받아온 게시물:", res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {rabbitClasses.map((cls, i) => (
        <Rabbit key={i} styleClass={cls} />
      ))}
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
