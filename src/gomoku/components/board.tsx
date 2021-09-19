import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from  'react-router';
import { Link } from 'react-router-dom';

import { Row } from './row';
import { useSquareList } from "../context/squareListProvider";
import { jadge } from "../common/jadge";

export type CurrentUser = 0 | 1;
export type CurrentStatus = 0 | 1 | null;

export const Board: React.FC = () => {
  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>(0);
  const squareList = useSquareList();
  const [currentSquareList, setCurrentSquareaist] = useState<CurrentStatus[][]>(squareList);
  const history = useHistory();

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const onClickHandle = async (e: any) => {
    // イベント中は画面を操作できないようにする
    setShowOverray(true);

    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;
    await delay(5000)

    // 碁が置かれていない時のみ有効
    if (
      clickedX &&
      clickedY &&
      currentSquareList[clickedX][clickedY] === null
    ) {
      let nextCurrentSquareList = currentSquareList;
      nextCurrentSquareList[clickedX][clickedY] = currentUser;
      setCurrentSquareaist(nextCurrentSquareList);

      // 勝利判定
      const isJadge = await jadge(currentSquareList);

      if (isJadge) {
        alert("勝負あり");
        history.push("/");
      }
      const nextCurrentUser: CurrentUser = currentUser === 0 ? 1 : 0;
      setCurrentUser(nextCurrentUser);
    }

    setShowOverray(false);
  };

  return (
    <>
      {showOverray && <div className="us-overray"></div>}
      <Card
        className="us-gomoku-card us-m-auto"
        style={{
          background: `url(${process.env.PUBLIC_URL}/gomoku-background.jpg)`,
        }}
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
