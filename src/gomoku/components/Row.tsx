import React from "react";
import styled from "styled-components";

import { CurrentStatus } from "./Board";
import { Square } from "./Square";
import { SQUARE_COUNT } from "../squareCount";

type RowProps = {
  currentSquareRow: CurrentStatus[];
  y: number;
};

export const Row: React.FC<RowProps> = ({ currentSquareRow, y }) => {
  return (
    <SquareList>
      {currentSquareRow.map((v, x) => {
        return <Square currentStatus={v} x={x} y={y} key={`${x}${y}`} />;
      })}
    </SquareList>
  );
};

const SquareList = styled.div`
  display: flex;
  height: 100% / ${SQUARE_COUNT};
`;