import classNames from "classnames";
import { empty } from "./puzzle";
import React from "react";

const Cell = ({ children, onClick, canMove }) => {
  const isEmpty = children === empty;
  const className = classNames({
    cell: !isEmpty,
    "empty-cell": isEmpty,
    "no-move": !canMove
  });
  return (
    <div className={className} onClick={onClick}>
      {isEmpty ? "" : children}
    </div>
  );
};
export default Cell;
