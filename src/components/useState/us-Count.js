/**
 * 1. Component sẽ đc re-render lại sau khi đc `setState`
2. `Initial state` chỉ dùng cho lần đầu
3. Set state với `Callback` ? 
*/
import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleCount = () => {
    // Set bình thường
    setCount(count + 1);

    // Sử dụng callBack
    // Lúc này kết quả trả về sẽ là giá trị của hàm callback return ra
    setCount((prevState) => prevState + 1);
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
      </div>
    </div>
  );
}
