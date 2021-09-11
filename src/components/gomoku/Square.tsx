import React, { useState } from 'react';
import gomokuDefault from '../../assets/gomoku-default.png';
import gomokuBlack from '../../assets/gomoku-black.png';
import gomokuWhite from '../../assets/gomoku-white.png';

type SquareProps = {
  isUserBlack: boolean;
  x: number;
  y: number;
};

const Square = ({ isUserBlack, x, y }: SquareProps) => {
  const [img, setImg] = useState(gomokuDefault);

  const putPiece = () => {
    // 碁が置かれていない時のみ有効
    if (img === gomokuDefault) {
      if (isUserBlack) {
        setImg(gomokuBlack);
      } else {
        setImg(gomokuWhite);
      }
    }
  };

  return (
    <div className="us-square" onClick={() => putPiece()}>
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

export default Square;
