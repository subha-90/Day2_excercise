function TrafficLight({ color }) {
  let message = "";

  if (color === "red") message = "Stop";
  else if (color === "yellow") message = "Slow Down";
  else if (color === "green") message = "Go";

  return <h3>{message}</h3>;
}

export default TrafficLight;