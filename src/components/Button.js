import React from "react";

const Button = ({ text, clearList }) => {
  return (
    <div className="btn" onClick={() => clearList()}>
      {text}
    </div>
  );
};
export default Button;
