import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(100); // number
  const [name, setName] = useState("Bishesh"); // string
  const [price, setPrice] = useState(10.99); // float
  const [nums, setNums] = useState([10, 20, 30]); //array
  const [person, setPerson] = useState({
    id: 1,
    name: "Bishesh",
    salary: 10000,
  }); // object

  return (
    <div>
      <h1>{counter}</h1>
      <h2>{person.name}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrease</button>

      <button onClick={() => setPerson({ name: "Superman" })}>
        Change name to Superman
      </button>
    </div>
  );
};

export default Counter;
