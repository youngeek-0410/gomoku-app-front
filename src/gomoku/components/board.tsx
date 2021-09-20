import React, { useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Row } from './row';
import { CompleteModal } from './completeModal';
import { useSquareList } from "../context/squareListProvider";
import { UserSection, UserSectionLoading } from "./userSection";
import { jadge } from "../common/jadge";
import { useAxiosClient } from '../../common/context/axiosClientProvider';
import { useQuery } from '../../common/hooks/useQuery';

export type CurrentUser = 0 | 1;
export type CurrentStatus = 0 | 1 | null;

export const Board: React.FC<{ loading: boolean }> = ({ loading }) => {
  const client = useAxiosClient();
  const query = useQuery();
  const userId1 = query.get("user_id_1")
  const userId2 = query.get("user_id_2")

  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>(0);

  const squareList = useSquareList();
  const [currentSquareList, setCurrentSquareaist] =
    useState<CurrentStatus[][]>(squareList);

  const onClickHandle = async (e: any) => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    // イベント中は画面を操作できないようにする
    setShowOverray(true);

    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;

    // 碁が置かれていない時のみ有効
    if (
      clickedX &&
      clickedY &&
      currentSquareList[clickedX][clickedY] === null
    ) {
      let nextCurrentSquareList = currentSquareList;
      nextCurrentSquareList[clickedX][clickedY] = currentUser;
      setCurrentSquareaist(nextCurrentSquareList);
      let isJadge: boolean = false;

      await Promise.all([jadge(currentSquareList), delay(200)]).then((v) => {
        isJadge = v[0];
      });

      if (isJadge) {
        if (userId2 === "-1") {
          client
            .post("/game_logs", { user_id: userId1, win_user: currentUser + 1 })
            .then(() => {
              setShowOverray(false);
              setShowModal(true);
            })
            .catch(() => {
              setShowOverray(false);
              setShowModal(true);
            });
        } else {
          client
            .post("/game_logs", {
              user_id_1: userId1,
              user_id_2: userId2,
              win_user: currentUser + 1,
            })
            .then(() => {
              setShowOverray(false);
              setShowModal(true);
            })
            .catch(() => {
              setShowOverray(false);
              setShowModal(true);
            });
        }
      } else {
        const nextCurrentUser: CurrentUser = currentUser === 0 ? 1 : 0;
        setCurrentUser(nextCurrentUser);
      }
    }

    setShowOverray(false);
  };

  return (
    <>
      <Card
        className="us-gomoku-card us-m-auto"
        style={{
          background: `url(${process.env.PUBLIC_URL}/gomoku-background.jpg)`,
        }}
        onClick={(e: React.MouseEvent<HTMLInputElement>) => onClickHandle(e)}
      >
        {showOverray && <div className="us-overray"></div>}
        {showOverray && <Spinner animation="border" className="us-spinner" />}
        {currentSquareList.map((v, x) => {
          return <Row currentSquareRow={v} x={x} key={x} />;
        })}
      </Card>
      {loading && <UserSectionLoading />}
      {!loading && <UserSection currentUser={currentUser} />}
      <div className="us-m-15px us-tar">
        <Link to="/">
          <Button variant="dark">ゲームを終了する</Button>
        </Link>
      </div>

      {!loading && <CompleteModal show={showModal} currentUser={currentUser} />}
    </>
  );
};
