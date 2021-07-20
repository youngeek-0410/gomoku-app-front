import React, { useState } from 'react';
import gomokuDefault from './gomoku-default.png';
import gomokuBlack from './gomoku-black.png';
import gomokuWhite from './gomoku-white.png';

type SquareProps = {
  isUserBlack: boolean,
  x: number,
  y: number,
}

function Square({ isUserBlack, x, y }: SquareProps) {
  const [img, setImg] = useState(gomokuDefault);

  const putPiece = () => {
    if (img == gomokuDefault) {
      if (isUserBlack) {
        setImg(gomokuBlack);
      } else {
        setImg(gomokuWhite);
      }
    }
  };

  return (
    <div className='us-square' onClick={ () => putPiece() }>
      <img src={img} alt="" className="us-w-100 us-h-100" data-x={x} data-y={y}/>
    </div>
  )
}

export default Square;
