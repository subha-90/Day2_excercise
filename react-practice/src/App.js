import "./App.css";

// ✅ FIXED IMPORT PATHS (no space)
import Button from "./components /Button";
import Toggle from "./components /Toggle";
import HoverBox from "./components /HoverBox";
import TrafficLight from "./components /TrafficLight";
import TodoList from "./components /TodoList";

// ✅ NEW: Text Input Component
import { useState } from "react";

function TextMirror() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="title">React Practice Dashboard</h1>

      <div className="grid">
        {/* 🔘 Buttons */}
        <div className="card">
          <h3>Buttons</h3>
          <Button label="Primary" color="#3b82f6" />
          <br /><br />
          <Button label="Danger" color="#ef4444" />
        </div>

        {/* 🔄 Toggle */}
        <div className="card">
          <h3>Toggle</h3>
          <Toggle />
        </div>

        {/* ✨ Hover */}
        <div className="card">
          <h3>Hover Effect</h3>
          <HoverBox />
        </div>

        {/* 🚦 Traffic */}
        <div className="card">
          <h3>Traffic Light</h3>
          <TrafficLight color="green" />
        </div>

        {/* 📋 Todo */}
        <div className="card">
          <h3>Todo List</h3>
          <TodoList />
        </div>

        {/* ⌨️ Text Input (NEW) */}
        <div className="card">
          <h3>Live Input Mirror</h3>
          <TextMirror />
        </div>
      </div>
    </div>
  );
}

export default App;