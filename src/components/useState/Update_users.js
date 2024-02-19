// 5. Set state là thay thế state bằng giá trị mới
//`Initial state` với `Callback` ?

import React from "react";
import { useState } from "react";

export default function UpdateUsers() {
  const [info, setInfo] = useState({
    name: "Nguyễn Quốc Bảo",
    age: 23,
    address: "Cần Thơ, VN",
  });

  // Muốn thêm thuộc tính mới vào thì phải sử dụg toán tử ES6
  // Toán tử Spread ...info
  const handleUpdate = () => {
    setInfo({
      ...info,
      hobby: "Soccer ^^",
    });
  };

  // Hoặc sử dụg callBack
  //   const handleUpdate = () => {
  //     setInfo((prev) => ({
  //       ...prev,
  //       hobby: "Soccer ^^",
  //     }));
  //   };

  // Nên sử dụng callback trog các trường hợp xử lý Logic ví dụ:
  //   const handleUpdate = () => {
  //     setInfo((prev) => {
  //       // Viết logic ở đây
  //       return {
  //         ...prev,
  //         hobby: "Soccer ^^",
  //       };
  //     });
  //   };

  return (
    <>
      <p>{JSON.stringify(info)}</p>
      <button onClick={handleUpdate}>Update now</button>
    </>
  );
}
