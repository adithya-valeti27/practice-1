import React, { useRef } from "react";
import { useState } from "react";
const Useref = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const handleClick = () =>{
    setName(inputRef.current.value);
  }

  return (
    <div>
      <p>{name}</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Useref;
