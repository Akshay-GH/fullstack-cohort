//hooks
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <CustomButton count={count} setCount={setCount}></CustomButton>
//       </div>
//     </>
//   );
// }

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

// export default App;

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym ",
      description: "go to gym at 6:00 am",
      completed: false,
    },
    {
      title: "study web dev",
      description: "study 9 to 12 pm",
      completed: false,
    },
    {
      title: "study dsa  ",
      description: "at 6 to 8 am",
      completed: false,
    },
  ]);

  function addTodo() {}
  return <div>{JSON.stringify(todos)}</div>;
}

export default App;
