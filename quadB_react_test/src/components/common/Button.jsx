import React from "react";

const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
