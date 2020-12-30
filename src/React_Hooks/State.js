import React from "react";
import { useState } from "react";
import LifeCycle from "./LifeCycle";
function State() {
  let [user, setUser] = useState({ name: "syed", age: 40 });
  let [flag, setFlag] = useState(1);
  const handler = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  return (
    <>
      {/* <h2>Age is {user.age}</h2>
      <button onClick={handler}>Increment</button> */}
      {flag ? <LifeCycle></LifeCycle> : null}
      <button onClick={() => setFlag(!flag)}>UnMount</button>
    </>
  );
}

export default State;
