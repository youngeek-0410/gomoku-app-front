import React from 'react';
import Square from './Square';

function Row() {
  const squareCount: number = 19;
  var SquareElementList: JSX.Element[] = new Array(squareCount);
  for(let x: number = 0; x < squareCount; x++) {
    SquareElementList.push(<Square></Square>)
  }

  return (
    <div className="us-d-flex us-row">
      { SquareElementList }
    </div>
  );
}

export default Row;
