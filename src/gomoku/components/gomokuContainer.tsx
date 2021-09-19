import React from 'react';

import { Board, CurrentStatus } from './board';
import { SquareListProvider } from "../context/squareListProvider";
import { SQUARE_COUNT } from "../squareCount";

export const Gomoku: React.FC = () => {
  // 黒: 0, 白: 1, なし: null
  var squareList: CurrentStatus[][] = new Array(SQUARE_COUNT);
  for (let i = 0; i < SQUARE_COUNT; i++) {
    squareList[i] = new Array(SQUARE_COUNT).fill(null);
  }

  return (
    <SquareListProvider squareList={squareList}>
      <Board />
    </SquareListProvider>
  );
};
