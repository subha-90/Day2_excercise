import './App.css';

import Button from "./components /Button";
import Toggle from "./components /Toggle";
import HoverBox from "./components /HoverBox";
import TrafficLight from "./components /TrafficLight";
import TodoList from "./components /TodoList";

function App() {
  return (
      <div>
            <Button label="Click Me" color="blue" />
                  <Toggle />
                        <HoverBox />
                              <TrafficLight color="green" />
                                    <TodoList />
                                        </div>
                                          );
                                          }

                                          export default App;