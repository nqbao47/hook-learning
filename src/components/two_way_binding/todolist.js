import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks"));
    return storageTasks;
  });
  console.log(task);

  const handleSubmit = () => {
    setTasks((prev) => {
      const newTasks = [...prev, task];

      // save to Local Store-rage
      const jsonTasks = JSON.stringify(newTasks);
      localStorage.setItem("tasks", jsonTasks);

      return newTasks;
    });
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks((prev) => {
      // Copy mảng cũ thành mảng mới
      const newTasks = [...prev];

      // Xoá task đã chỉ định bằng phương thức splice
      newTasks.splice(index, 1);

      // Save to Local Storage
      const jsonTasks = JSON.stringify(newTasks);
      localStorage.setItem("tasks", jsonTasks);

      return newTasks;
    });
  };

  return (
    <>
      <p>Todo App</p>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add</Button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button onClick={() => handleDelete(index)}>delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
