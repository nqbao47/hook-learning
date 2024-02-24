// Bài toán 2 - Call API

import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function CallApi() {
  const [title, setTitle] = useState("");
  const [datas, setDatas] = useState([]);
  const [type, setType] = useState("posts");

  // Trường hợp `useEffect(callback, [])`
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setDatas(posts);
      }); // Thêm `[]` để ngăn việc callAPI liên tục
  }, []);

  // Trường hợp `useEffect(callback, [deps])`
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, [type]);

  return (
    <div>
      <br />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      {tabs.map((tab) => (
        <Button
          variant="contained"
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                  marginLeft: "5px",
                }
              : { marginLeft: "5px" }
          }
          key={tab}
          onClick={() => setType(tab)}
        >
          {tab}
        </Button>
      ))}
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{data.title || data.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CallApi;
