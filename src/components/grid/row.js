import React from "react";
import clsx from "clsx";

const Row = ({ children, className }) => {
  return <div className={clsx("flex flex-wrap ", className)}>{children}</div>;
};

export default Row;
