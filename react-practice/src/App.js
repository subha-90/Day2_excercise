import "./App.css";

import Button from "./components /Button";
import Toggle from "./components /Toggle";
import HoverBox from "./components /HoverBox";
import TrafficLight from "./components /TrafficLight";
import TodoList from "./components /TodoList";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">React Practice Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>Buttons</h3>
          <Button label="Primary" color="#3b82f6" />
          <br /><br />
          <Button label="Danger" color="#ef4444" />
        </div>

        <div className="card">
          <h3>Toggle</h3>
          <Toggle />
        </div>

        <div className="card">
          <h3>Hover Effect</h3>
          <HoverBox />
        </div>

        <div className="card">
          <h3>Traffic Light</h3>
          <TrafficLight color="green" />
        </div>

        <div className="card">
          <h3>Todo List</h3>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;