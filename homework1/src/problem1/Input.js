import React from "react";

const Input = ({ setBoxColor }) => {
  const onChange = (e) => {
    setBoxColor(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange}></input>
    </div>
  );
};

export default Input;
