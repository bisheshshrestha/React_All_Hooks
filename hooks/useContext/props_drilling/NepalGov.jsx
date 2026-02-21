import React from "react";
import StateGov from "./StateGov";

const NepalGov = () => {
  const money = 1000;
  return (
    <div>
      <h1>Nepal Governmanet Component</h1>
      <StateGov money={money} />
    </div>
  );
};

export default NepalGov;
