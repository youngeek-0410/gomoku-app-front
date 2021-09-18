import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Row } from './row';
import { useSquareList } from "../context/squareListProvider";
import { jadge } from "../common/jadge";

export type CurrentUser = 0 | 1;
export type CurrentStatus = 0 | 1 | null;

export const Board: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(0);
  const squareList = useSquareList();
  const [currentSquareList, setCurrentSquareaist] = useState<CurrentStatus[][]>(squareList);

  const onClickHandle = (e: any) => {
    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;

    // 碁が置かれていない時のみ有効
    if (clickedX && clickedY && currentSquareList[clickedX][clickedY] === null) {
      let nextCurrentSquareList = currentSquareList;
      nextCurrentSquareList[clickedX][clickedY] = currentUser;
      setCurrentSquareaist(nextCurrentSquareList);

      // 勝利判定
      if (jadge(currentSquareList)) {
        console.log("勝負あり");
      }
      const nextCurrentUser: CurrentUser = currentUser === 0 ? 1 : 0;
      setCurrentUser(nextCurrentUser);
    }
  };

  return (
    <>
      <Card
        className="us-gomoku-card us-m-auto"
        onClick={(e: React.MouseEvent<HTMLInputElement>) => onClickHandle(e)}
      >
        {currentSquareList.map((v, x) => {
          return <Row currentSquareRow={v} x={x} key={x} />;
        })}
      </Card>

      <div className="us-m-15px us-tar">
        <Link to="/">
          <Button variant="dark">ゲームを終了する</Button>
        </Link>
      </div>
    </>
  );
}
