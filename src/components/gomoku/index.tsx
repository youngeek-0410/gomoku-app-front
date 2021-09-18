import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Row from './row';
import { useJadge } from "./hooks/useJadge";

export const squareCount: number = 15;

// 碁が置かれていないか
var squareList: number[][] = new Array(squareCount);
for(let i = 0; i < squareCount; i++) {
  squareList[i] = new Array(squareCount).fill(null);
};


const Gomoku = () => {
  const [isUserBlack, setIsUserBlack] = useState(true);

  var RowElementList: JSX.Element[] = new Array(squareCount);
  for(let y: number = 0; y < squareCount; y++) {
    RowElementList.push(<Row isUserBlack={isUserBlack} y={y} key={y}></Row>);
  }

  const toggleUserBlack = (e: any) => {
    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;

    // 碁が置かれていない時のみ有効
    if (clickedX && clickedY && squareList[clickedX][clickedY] === null) {
      squareList[clickedX][clickedY] = isUserBlack ? 0 : 1;

      // 勝利判定
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if (useJadge(squareList)) {
        console.log("勝負あり")
      }
      setIsUserBlack(!isUserBlack);
    }
  };

  return (
    <div>
      <Card className="us-gomoku-card us-m-auto" onClick={ (e: React.MouseEvent<HTMLInputElement>) => toggleUserBlack(e) }>
        { RowElementList }
      </Card>

      <div className="us-m-15px us-tar">
        <Link to="/">
          <Button variant="dark">ゲームを終了する</Button>
        </Link>
      </div>
    </div>
  );
}

export default Gomoku;
