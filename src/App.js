import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [Todo, setTodo] = useState([]);
  const addTodo = () => {
    const copyArray = [...Todo];
    copyArray.push(inputValue);
    setTodo(copyArray);
    setInputValue("");
  };
   const deleteTodo = (index) =>{
    const copyArray = [...Todo];
     copyArray.splice(index, 1)
     setTodo(copyArray)
     
   }
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addTodo}>Нажми на меня</button>
      {Todo.map((element, index) => (
        <div key={index}>
          <button onClick={() =>deleteTodo(index)}>Удалить</button>
          <p  >
            {element}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
