import { useRef, useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState("");
  const [todos, setTodos] = useState([]);

  const taskRef = useRef();

  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        tasks,
      },
    ]);

    setTasks("");
    taskRef.current.focus();
  };

  const handleDelteTask = (index) => {
    console.log(index);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>ToDo ^^!!</h1>

      <input
        ref={taskRef}
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={() => handleSubmit()}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.tasks}{" "}
            <button onClick={() => handleDelteTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
