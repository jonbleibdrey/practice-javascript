import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState();
  const [showFields, setShowFields] = useState(false);

  const refresh = () => {
    loadUsers();
    setShowFields(true);
  };

  async function loadUsers() {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const task = await response.json();

    setTask(task);
    console.log(task);
  }

  return (
    <>
      {showFields ? (
        <div className="image">
          <img src={logo} alt="logo" className="img" />
          <h1>Activity: {task && task.activity}</h1>
          <h2>Participants: {task && task.participants}</h2>
          <h3>Type: {task && task.type}</h3>
          <a href={task && task.link}>Wikepedia it</a>
          <br />
          <button onClick={() => refresh()}>new task</button>
        </div>
      ) : (
        <div>
          <h1> Click me</h1>
          <button onClick={() => refresh()}>new task</button>
        </div>
      )}
    </>
  );
}

export default App;
