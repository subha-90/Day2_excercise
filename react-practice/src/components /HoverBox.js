import { useState } from "react";

function HoverBox() {
  const [color, setColor] = useState("#4f46e5");

  return (
    <div
      onMouseEnter={() => setColor("#ef4444")}
      onMouseLeave={() => setColor("#4f46e5")}
      style={{
        height: "120px",
        borderRadius: "8px",
        backgroundColor: color,
      }}
    ></div>
  );
}

export default HoverBox;