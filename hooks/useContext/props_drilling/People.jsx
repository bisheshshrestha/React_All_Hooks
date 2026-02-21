import React, { useContext } from "react";
import MyContext from "../MyContext";

const People = () => {
  const { person, money, counter, setCounter } = useContext(MyContext);
  // console.log(data);

  return (
    <div>
      <h1>Welcome to People Component</h1>
      <h1>Name = {person.name}</h1>
      <h1>Email = {person.email}</h1>
      <h2>Money = {money}</h2>
      <h1>Counter = {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default People;
