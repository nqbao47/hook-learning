import * as React from "react";
import Content from "./components/Context/Content.jsx";
import { useContext } from "react";
import { ThemeContext } from "./components/Context/ThemeContext.jsx";
import "./App.css";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: "50px" }}>
      <button onClick={context.handleToggle}>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
