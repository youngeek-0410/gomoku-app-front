import React from 'react';
import Square from './Square';

type RowProps = {
  isUserBlack: boolean,
  y: number,
}

const Row = ({ isUserBlack, y }: RowProps) => {
  const squareCount: number = 19;
  var SquareElementList: JSX.Element[] = new Array(squareCount);
  for(let x: number = 0; x < squareCount; x++) {
    SquareElementList.push(<Square isUserBlack={ isUserBlack } x={x} y={y}></Square>)
  }

  return (
    <div className="us-d-flex us-row">
      { SquareElementList }
    </div>
  );
}

export default Row;
