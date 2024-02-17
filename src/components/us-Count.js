import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleClear = () => {
    setCount(1);
  };

  return (
    <div
      className="container"
      style={{ textAlign: "center" }}
    >
      <p>{count}</p>

      <div
        className="btn-count"
        style={{ display: "block" }}
      >
        <button onClick={handleCount}> Click me !!</button>
        <button onClick={handleClear}> Clear !!</button>
      </div>
    </div>
  );
}
