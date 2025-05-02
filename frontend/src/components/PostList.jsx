import React from "react";
import "../styles/PostList.scss";

function PostList({ posts }) {
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
          <p className="timestamp">
            {new Date(post.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
