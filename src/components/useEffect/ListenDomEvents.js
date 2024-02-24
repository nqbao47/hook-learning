// Bài toán 3 - Listen DOM Events
// Ví dụ: Scroll

import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function ListenDomEvents() {
  const [datas, setDatas] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  // Trường hợp `useEffect(callback, [deps])`
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, [type]);

  // Lắng nghe sự kiện scroll trang
  useEffect(() => {
    const handleScroll = () => {
      //   if (window.scrollY >= 200) {
      //     setShowGoToTop(true);
      //   } else {
      //     setShowGoToTop(false);
      //   }
      setShowGoToTop(window.scrollY >= 100);
    };

    // sự kiện listener vẫn không mât khi component unmounted => memory leak
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
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
      {showGoToTop && (
        <Button
          onClick={() => handleGoOnTop()}
          style={{ position: "fixed", right: 40, bottom: 40 }}
          variant="contained"
        >
          On Top
        </Button>
      )}
    </div>
  );
}

export default ListenDomEvents;
