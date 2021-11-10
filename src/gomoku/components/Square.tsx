import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { CurrentStatus } from "./Board";

const gomokuDefault = `${process.env.PUBLIC_URL}/gomoku-default.png`;
const gomokuBlack = `${process.env.PUBLIC_URL}/gomoku-black.png`;
const gomokuWhite = `${process.env.PUBLIC_URL}/gomoku-white.png`;

type SquareProps = {
  currentStatus: CurrentStatus;
  x: number;
  y: number;
};

export const Square: React.FC<SquareProps> = ({ currentStatus, x, y }) => {
  const [img, setImg] = useState(gomokuDefault);

  useEffect(() => {
    // currentSquareListの副作用
    if (currentStatus === 0) {
      setImg(gomokuBlack);
    } else if (currentStatus === 1) {
      setImg(gomokuWhite);
    }
  }, [currentStatus]);

  return (
    <StyleSquare>
      <SquareImg src={img} alt="" data-x={x} data-y={y} />
    </StyleSquare>
  );
};

const StyleSquare = styled.div`
  width: 100% / $square-count;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
    background: #5a380442;
  }
`;

const SquareImg = styled.img`
  width: 100%;
  height: 100%;
`;
