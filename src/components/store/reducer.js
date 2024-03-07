import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const InitState = {
  todos: [],
  inputTodo: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        inputTodo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const updatedTodos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    case EDIT_TODO:
      const updatedTodosEdited = [...state.todos]; // Create a copy of the todos array
      updatedTodosEdited[state.index] = state.todoInput; // Update the todo at the specified index
      return {
        ...state,
        todos: updatedTodosEdited, // Update the todos array in the new state object
      };
    default:
      throw new Error("Invalid");
  }
}
export { InitState };
export default reducer;
