import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Useeffect = () => {
  const [username, setUsername] = useState("Adithya");
  const handleClick = () => {
    document.title = username;
  };
  useEffect(() => {
    document.title= username;
  }, []);
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Useeffect;
