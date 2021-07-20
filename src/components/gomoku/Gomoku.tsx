import React from 'react';
import { Card } from 'react-bootstrap';

import Row from './Row';
import './index.css';

function Gomoku() {
  const squareCount: number = 19;
  var squareList: number[][] = new Array(squareCount);
  for(let i = 0; i < squareCount; i++) {
    squareList[i] = new Array(squareCount).fill(0);
  };

  var RowElementList: JSX.Element[] = new Array(squareCount);
  for(let y: number = 0; y < squareCount; y++) {
    RowElementList.push(<Row></Row>);
  }

  return (
    <div>
      <Card className='us-gomoku-card us-m-auto us-m-30px'>
        { RowElementList }
      </Card>
    </div>
  );
}

export default Gomoku;
