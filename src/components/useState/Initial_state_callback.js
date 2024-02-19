//4. `Initial state` với `Callback` ?

import React from "react";
import { useState } from "react";

// Giả sử muốn tính tổng đơn hàng như sau
const orders = [100, 200, 300];

export default function InitStateCallback() {
  // Nếu truyền thẳng `total` để làm initState thì mỗi khi set State thì logic sẽ bị render lại
  // Đây là cách hạn chế hiện tạii
  //   const total = orders.reduce((total, cur) => total + cur);
  //   const [count, setCount] = useState(total)

  // Sử dụng callBack để khởi tạo giá trị initState
  const [count, setCount] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const handleCount = () => {
    // Sử dụng callBack
    // Lúc này kết quả trả về sẽ là giá strị của hàm callback return ra
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
