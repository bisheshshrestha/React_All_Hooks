import React from "react";
import People from "./People";

export const Village = ({ money }) => {
  return (
    <div>
      <h1>Village Governmanet Component</h1>
      <People money={money} />
    </div>
  );
};
