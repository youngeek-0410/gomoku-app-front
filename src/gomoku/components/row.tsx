import React from "react";
import styled from "styled-components";

import { CurrentStatus } from "./board";
import { Square } from "./square";
import { SQUARE_COUNT } from "../squareCount";

type RowProps = {
  currentSquareRow: CurrentStatus[];
  x: number;
};

export const Row: React.FC<RowProps> = ({ currentSquareRow, x }) => {
  return (
    <SquareList>
      {currentSquareRow.map((v, y) => {
        return <Square currentStatus={v} x={x} y={y} key={`${x}${y}`} />;
      })}
    </SquareList>
  );
};

const SquareList = styled.div`
  display: flex;
  height: 100% / ${SQUARE_COUNT};
`;