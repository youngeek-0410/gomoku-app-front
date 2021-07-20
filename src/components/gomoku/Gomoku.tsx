import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Row from './Row';
import './index.css';

const squareCount: number = 19;
var squareList: number[][] = new Array(squareCount);
for(let i = 0; i < squareCount; i++) {
  squareList[i] = new Array(squareCount).fill(0);
};


function Gomoku() {
  const [isUserBlack, setIsUserBlack] = useState(true);

  var RowElementList: JSX.Element[] = new Array(squareCount);
  for(let y: number = 0; y < squareCount; y++) {
    RowElementList.push(<Row isUserBlack={isUserBlack} y={y}></Row>);
  }

  const toggleUserBlack = (e: any) => {
    console.log(e.target);
    setIsUserBlack(!isUserBlack);
  }

  return (
    <div>
      <Card className="us-gomoku-card us-m-auto us-m-30px" onClick={ (e: any) => toggleUserBlack(e) }>
        { RowElementList }
      </Card>
    </div>
  );
}

export default Gomoku;
