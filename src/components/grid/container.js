import React from "react";
import clsx from "clsx";
const classes = "lg:container mx-auto";
const Container = ({ children, className, tag: Tag = "div" }) => {
  return <Tag className={clsx(classes, className)}>{children}</Tag>;
};

export default Container;
