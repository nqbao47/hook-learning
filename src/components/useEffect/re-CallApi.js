import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function ReCallApi() {
  const [resources, setResources] = useState([]);
  const [types, setTypes] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((res) => res.json())
      .then((resources) => {
        setResources(resources);
      });
  }, [types]);

  return (
    <>
      <br />
      <br />
      {tabs.map((tab) => (
        <Button
          key={tab}
          style={
            types === tab
              ? { color: "#fff", backgroundColor: "#333", marginLeft: "5px" }
              : { marginLeft: "5px" }
          }
          onClick={() => setTypes(tab)}
        >
          {tab}
        </Button>
      ))}

      <ul>
        {resources.slice(0, 3).map((rs) => (
          //   <li key={rs.id}>{rs.email || rs.title || rs.address}</li>
          <img
            key={rs.id}
            src={rs.url}
            alt={rs.title}
          />
        ))}
      </ul>
      <h1>Làm lại bài học useEffect phần CallAPI</h1>
    </>
  );
}

export default ReCallApi;
