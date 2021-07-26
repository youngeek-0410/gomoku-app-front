import React from 'react';
import { Alert, Table } from 'react-bootstrap';

type Rank = {
  name: string;
  score: number;
};

const ranks: Rank[] = [
  {
    name: "ますたー",
    score: 10000,
  },
  {
    name: "ますたー",
    score: 1000,
  },
  {
    name: "ますたー",
    score: 100,
  },
  {
    name: "ますたー",
    score: 10,
  },
  {
    name: "ますたー",
    score: 5,
  },
  {
    name: "ますたー",
    score: 3,
  },
  {
    name: "ますたー",
    score: 1,
  },
];

const Ranking = () => {
  const RankingList: JSX.Element[] = [];
  for(var i in ranks) {
    RankingList.push(
      <tr>
        <td>{ i }</td>
        <td>{ ranks[i].name }</td>
        <td>{ ranks[i].score }</td>
      </tr>
    );
  };

  return (
    <>
      <Alert variant="info">
        <Alert.Heading>ランキング</Alert.Heading>
        <p>
          今までの勝利数のランキングを表示します。
        </p>
        <hr/>
      </Alert>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>名前</th>
          <th>勝利数</th>
        </tr>
      </thead>
      <tbody>
        { RankingList }
      </tbody>
    </Table>
    </>

  )
};

export default Ranking;
