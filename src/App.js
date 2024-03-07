import "./App.css";
import { useStore, actions } from "./components/store";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, inputTodo } = state;

  const todoRef = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(inputTodo));
    dispatch(actions.setTodoInput(""));

    todoRef.current.focus();
  };

  const handleDeleteTodo = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  const handleEditTodo = (index) => {
    todoRef.current.focus();
    state.editMode = true;
    state.currentIndex = index;
    dispatch(actions.setTodoInput(todos[index]));
  };

  return (
    <div style={{ padding: "50px" }}>
      <input
        ref={todoRef}
        value={inputTodo}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>x</button>{" "}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
