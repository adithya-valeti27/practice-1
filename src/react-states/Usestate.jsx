import React from "react";
import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count => count + 1)}>+</button>
      <button onClick={()=>setCount(count => count - 1)}>-</button>
      <button onClick={()=>setCount(count => 0)}>reset</button>
    </div>
  );
};

export default Usestate;
