import React from "react";
import { CurrentStatus } from "./board";
import { Square } from "./square";
import { SQUARE_COUNT } from "../squareCount";

type RowProps = {
  currentSquareList: CurrentStatus[][];
  y: number;
};

export const Row: React.FC<RowProps> = ({ currentSquareList, y }) => {
  var SquareElementList: JSX.Element[] = new Array(SQUARE_COUNT);
  for (let x: number = 0; x < SQUARE_COUNT; x++) {
    SquareElementList.push(
      <Square currentStatus={currentSquareList[x][y]} x={x} y={y} key={`${x}${y}`} />
    );
  }

  return <div className="us-d-flex us-row">{SquareElementList}</div>;
};
