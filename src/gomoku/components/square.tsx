import React, { useState, useEffect } from 'react';

import { CurrentStatus } from "./board";

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
    } else if(currentStatus === 1){
      setImg(gomokuWhite);
    }
  }, [currentStatus]);

  return (
    <div className="us-square">
      <img
        src={img}
        alt=""
        className="us-w-100 us-h-100"
        data-x={x}
        data-y={y}
      />
    </div>
  );
};
