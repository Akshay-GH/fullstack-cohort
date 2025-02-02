import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym at 6:00 am",
      completed: false,
    },
    {
      title: "Study web dev",
      description: "Study 9 to 12 pm",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "At 6 to 8 am",
      completed: false,
    },
  ]);

  setTodos([...todos, { title: "new todo", description: "adding new todo" }]);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Status: {props.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default App;
