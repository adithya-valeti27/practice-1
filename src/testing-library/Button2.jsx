import React from "react";

const Button2 = () => {
  const handleClick = () => {
    console.log("I got clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Button2;
