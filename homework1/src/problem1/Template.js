import React, { useState } from "react";
import "./Template.css";
import Input from "./Input";
import Box from "./Box";
const Template = () => {
  const [BoxColor, setBoxColor] = useState("");
  return (
    <div className="box-box">
      <div className="Box-temp">
        <h1>색깔을 입력해봐 </h1>
        <Input setBoxColor={setBoxColor} />
        <Box BoxColor={BoxColor} />
      </div>
    </div>
  );
};

export default Template;
