import React from "react";
import { CurrentStatus } from "./board";
import { Square } from "./square";

type RowProps = {
  currentSquareRow: CurrentStatus[];
  x: number;
};

export const Row: React.FC<RowProps> = ({ currentSquareRow, x }) => {
  return (
    <div className="us-d-flex us-row">
      {currentSquareRow.map((v, y) => {
        return <Square currentStatus={v} x={x} y={y} key={`${x}${y}`} />;
      })}
    </div>
  );
};
