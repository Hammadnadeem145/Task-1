import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const storedTodos = window.localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleNewTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoAdd() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  // const handleTodoDelete = (index) => {t
  //   setTodos(todos.filter((todo, i) => i !== index));
  // };

  function handleTodoDelete(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button onClick={handleNewTodoAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*      
       <label htmlFor="input">Enter Data:</label>
       <input type="text" value={data} onChange={e => setData(e.target.value)} />
       <button onClick={handleSaveClick}>Save</button> */
