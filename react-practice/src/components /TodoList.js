import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build Project" },
    { id: 3, task: "Get Job" },
  ]);

  const [input, setInput] = useState("");

  // ➕ Add new todo at START
  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(), // unique id
      task: input,
    };

    setTodos([newTodo, ...todos]); // 👈 add at beginning
    setInput("");
  };

  return (
    <div>
      {/* 📝 Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={addTodo} style={{ marginTop: "10px" }}>
        Add Todo
      </button>

      {/* ✅ Correct way (using id) */}
      <h4>Using ID as key (Correct)</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>

      {/* ❌ Wrong way (using index) */}
      <h4>Using Index as key (Wrong)</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;