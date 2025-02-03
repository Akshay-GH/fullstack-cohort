import { useState } from "react";
import { Todos } from "./components/Todos";
import { CreateTodoFun } from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http//:localhost:3000/todo").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <div>
      <CreateTodoFun />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
