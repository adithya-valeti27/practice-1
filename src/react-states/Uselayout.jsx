import React from "react";
import { useState, useLayoutEffect } from "react";

const Uselayout = () => {
  const [num, setNum] = useState(0);
  useLayoutEffect(() => {
    console.log(num);
  }, [num]);
  return (
    <div>
      <button onClick={()=>setNum((num) => num + 1)}>+</button>
      <button onClick={()=>setNum((num = num - 1))}>-</button>
      <button onClick={()=>setNum((num) => 0)}>reset</button>
    </div>
  );
};

export default Uselayout;
