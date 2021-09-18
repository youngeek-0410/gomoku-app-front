import React from "react";
import { Square } from "./square";
import { SQUARE_COUNT } from "../squareCount";

type RowProps = {
  isUserBlack: boolean;
  y: number;
};

export const Row: React.FC<RowProps> = ({ isUserBlack, y }) => {
  var SquareElementList: JSX.Element[] = new Array(SQUARE_COUNT);
  for (let x: number = 0; x < SQUARE_COUNT; x++) {
    SquareElementList.push(
      <Square isUserBlack={isUserBlack} x={x} y={y} key={`${x}${y}`}></Square>
    );
  }

  return <div className="us-d-flex us-row">{SquareElementList}</div>;
};
