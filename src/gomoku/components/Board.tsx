import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Row } from './Row';
import { CompleteModal } from './CompleteModal';
import { useSquareList } from "../context/squareListProvider";
import { UserSection } from "./UserSection";
import { jadge } from "../common/jadge";
import { useAxiosClient } from '../../common/context/axiosClientProvider';
import { useQuery } from '../../common/hooks/useQuery';
import { GlobalSpinner, GlobalOverray } from "../../common/components";

export type CurrentUser = 0 | 1;
export type CurrentStatus = 0 | 1 | null;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const Board: React.FC = () => {
  const client = useAxiosClient();
  const query = useQuery();
  const userId1 = query.get("user_id_1");
  const userId2 = query.get("user_id_2");

  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>(0);

  const squareList = useSquareList();
  const [currentSquareList, setCurrentSquareaist] =
    useState<CurrentStatus[][]>(squareList);

  useEffect(() => {
    const run = async () => {
      if (currentUser === 1 && userId2 === "-1") {
        setShowOverray(true);
        const currentSquareListJson = JSON.stringify(currentSquareList);
        const { data } = await client.get(
          `${process.env.REACT_APP_GOMOKU_CPU_API_URL}/gomoku/cpu?current_square_list=${currentSquareListJson}`
        );
        await putPiece(data.x, data.y);
        setShowOverray(false);
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const putPiece = async (clickedX: number, clickedY: number) => {
    let nextCurrentSquareList = currentSquareList;
    nextCurrentSquareList[clickedY][clickedX] = currentUser;
    setCurrentSquareaist(nextCurrentSquareList);
    let isJadge: boolean = false;

    await Promise.all([jadge(currentSquareList), delay(200)]).then((v) => {
      isJadge = v[0];
    });

    if (isJadge) {
      try {
        // CPUと対戦する場合
        // user_id_2 === -1 はuser2がCPUであることを示す
        if (userId2 === "-1") {
          await client.post("/game_logs", {
            user_id: userId1,
            win_user: currentUser + 1,
          });
        } else {
          await client.post("/game_logs", {
            user_id_1: userId1,
            user_id_2: userId2,
            win_user: currentUser + 1,
          });
        }
      } catch {
        // ゲームログが正常に保存できなかった場合でも処理は変わらない
      }
      setShowOverray(false);
      setShowModal(true);
    } else {
      const nextCurrentUser: CurrentUser = currentUser === 0 ? 1 : 0;
      setCurrentUser(nextCurrentUser);
    }
  };

  const onClickHandle = async (e: any) => {
    // イベント中は画面を操作できないようにする
    setShowOverray(true);

    const clickedX: number = e.target.dataset.x;
    const clickedY: number = e.target.dataset.y;

    // 碁が置かれていない時のみ有効
    if (
      clickedX &&
      clickedY &&
      currentSquareList[clickedY][clickedX] === null
    ) {
      await putPiece(clickedX, clickedY);
    }

    setShowOverray(false);
  };
  return (
    <>
      <GomokuWrapper>
        <GomokuBoard
          onClick={(e: React.MouseEvent<HTMLInputElement>) => onClickHandle(e)}
        >
          {showOverray && <GlobalOverray />}
          {showOverray && <GlobalSpinner animation="border" />}
          {currentSquareList.map((v, y) => {
            return <Row currentSquareRow={v} y={y} key={y} />;
          })}
        </GomokuBoard>
        <UserSection currentUser={currentUser} />
        <CompleteModal show={showModal} currentUser={currentUser} />
      </GomokuWrapper>
      <FinishButton>
        <Link to="/">
          <Button variant="dark">ゲームを終了する</Button>
        </Link>
      </FinishButton>
    </>
  );
};

const GomokuWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 40px;
  height: auto;
  border: 3px solid #b8b8b8;
  border-radius: 16px;
`;

const GomokuBoard = styled(Card)`
  max-width: 700px;
  background: url(${process.env.PUBLIC_URL}/gomoku-background.jpg);
  margin: 0 auto;
  border: 2px #000000 solid;
  border-radius: 10px;
`;

const FinishButton = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: right;
`;