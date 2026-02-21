import React, { useLayoutEffect, useState } from "react";

const ChangeBackground = () => {
  const [color, setColor] = useState("black");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h2>Current Background: {color}</h2>
      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
    </div>
  );
};

export default ChangeBackground;
