import React, { useEffect, useState } from "react";
import bunnyImg from "../assets/mouse.png"; // 또는 public 경로로 src="/bunny.png"

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <img
      src={bunnyImg}
      alt="bunny"
      className="mouse-bunny"
      style={{
        left: position.x + 10,
        top: position.y + 10,
      }}
    />
  );
}

export default MouseFollower;
