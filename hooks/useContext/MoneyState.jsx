import React, { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {
  const money = 1000;
  const [counter, setCounter] = useState(0);

  const person = {
    name: "Bishesh",
    salary: 100000,
    email: "bishesh@gmail.com",
  };

  return (
    <MyContext.Provider value={{ money, counter, setCounter, person }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MoneyState;
