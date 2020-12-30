import React, { useEffect } from "react";
import { useState } from "react";
function LifeCycle() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("Mounted");
    return () => console.log("Unmounted");
  }, [count]); //here the second parameter can pass empty array when u want to use useEffect as ComponentDidMount

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2> age is {age}</h2>
      <button onClick={() => setAge(age + 1)}>INcrement Age</button>
    </div>
  );
}

export default LifeCycle;

/*
componentDidMount- will be called after the component get mounted to the DOM 
and it will called only for the  first render 
*/
