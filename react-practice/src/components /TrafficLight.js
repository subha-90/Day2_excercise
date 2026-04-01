function TrafficLight({ color }) {
      let message;

        if (color === "red") message = "Stop";
          else if (color === "yellow") message = "Slow Down";
            else if (color === "green") message = "Go";

              return <h2>{message}</h2>;
              }

              export default TrafficLight;
