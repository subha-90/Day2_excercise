import { useState } from "react";

function HoverBox() {
  const [color, setColor] = useState("blue");

    return (
        <div
              onMouseEnter={() => setColor("red")}
                    onMouseLeave={() => setColor("blue")}
                          style={{
                                  width: "200px",
                                          height: "200px",
                                                  backgroundColor: color,
                                                        }}
                                                            ></div>
                                                              );
                                                              }

                                                              export default HoverBox;