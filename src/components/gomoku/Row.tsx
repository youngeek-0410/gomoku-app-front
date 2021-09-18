import React from 'react';
import Square from './square';
import { squareCount } from "./index";

type RowProps = {
  isUserBlack: boolean,
  y: number,
}

const Row = ({ isUserBlack, y }: RowProps) => {
  var SquareElementList: JSX.Element[] = new Array(squareCount);
  for(let x: number = 0; x < squareCount; x++) {
    SquareElementList.push(<Square isUserBlack={ isUserBlack } x={x} y={y} key={`${x}${y}`}></Square>)
  }

  return (
    <div className="us-d-flex us-row">
      { SquareElementList }
    </div>
  );
}

export default Row;
