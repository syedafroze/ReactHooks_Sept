import React, { useEffect, useMemo } from "react";
import { useState,useCallback ,useContext } from "react";
import ContextApi from '../contextApi'
function Memo() {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);
  let name = useContext(ContextApi)
  let factValue = useMemo(() => factorial(num), [num]);
  let Value = useCallback(() => factorial(num), [num]);
  // console.log(factValue)
  // console.log(Value);

  useEffect(()=>factorial(num),[num,num2]);
  // let factValue = factorial(num);
  return (
    <div>
      <h1> name is {name}</h1>
      <h2> num is {num}</h2>
      <button onClick={() => setNum(num + 1)}>Num ++</button>
      <h2>Factorial of num is {factValue}</h2>
      <br></br>
      <h2>Num2 is {num2}</h2>
      <button onClick={() => setNum2(num2 + 1)}>Num2 ++</button>
    </div>
  );
}

function factorial(num) {
  if (num == 1) {
    console.log("in function ");
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

export default Memo;
