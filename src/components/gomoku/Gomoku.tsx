import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Row from './Row';
import '../../scss/index.scss';

const squareCount: number = 19;

// 碁が置かれていないか
var squareList: boolean[][] = new Array(squareCount);
for(let i = 0; i < squareCount; i++) {
  squareList[i] = new Array(squareCount).fill(true);
};


const Gomoku = () => {
  const [isUserBlack, setIsUserBlack] = useState(true);

  var RowElementList: JSX.Element[] = new Array(squareCount);
  for(let y: number = 0; y < squareCount; y++) {
    RowElementList.push(<Row isUserBlack={isUserBlack} y={y}></Row>);
  }

  const toggleUserBlack = (e: any) => {
    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;

    // 碁が置かれていない時のみ有効
    if(squareList[clickedX][clickedY]) {
      setIsUserBlack(!isUserBlack);
      squareList[clickedX][clickedY] = false;
    }
  }

  return (
    <div>
      <Card className="us-gomoku-card us-m-auto us-m-30px" onClick={ (e: React.MouseEvent<HTMLInputElement>) => toggleUserBlack(e) }>
        { RowElementList }
      </Card>
    </div>
  );
}

export default Gomoku;
