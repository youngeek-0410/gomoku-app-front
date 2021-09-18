import React from "react";
import { Square } from "./square";
import { SQUEARE_COUNT } from "./squeareCount";

type RowProps = {
  isUserBlack: boolean;
  y: number;
};

export const Row = ({ isUserBlack, y }: RowProps) => {
  var SquareElementList: JSX.Element[] = new Array(SQUEARE_COUNT);
  for (let x: number = 0; x < SQUEARE_COUNT; x++) {
    SquareElementList.push(
      <Square isUserBlack={isUserBlack} x={x} y={y} key={`${x}${y}`}></Square>
    );
  }

  return <div className="us-d-flex us-row">{SquareElementList}</div>;
};
