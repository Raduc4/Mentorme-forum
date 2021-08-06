import React from "react";
import clsx from "clsx";
const Column = ({ children, className, style }) => {
  return (
    <div className={clsx("px-3", className)} style={style}>
      {children}
    </div>
  );
};

export default Column;
