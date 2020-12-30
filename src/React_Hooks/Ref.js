import React, { useEffect } from "react";
import { useRef, useState } from "react";
function Ref() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const show = () => {
    setValue(inputRef.current.value);
  };


  useEffect(() => inputRef.current.focus(), []);

  //

  return (
    <>
      <input type="text" ref={inputRef}></input>
      <button>Enter</button>
      <button onClick={show}>Focus</button>
      <h2>{value}</h2>
    </>
  );
}

export default Ref;

//Recat.createRef()
