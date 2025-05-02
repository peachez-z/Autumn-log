import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

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
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
