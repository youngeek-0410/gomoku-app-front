import React, { useState } from 'react';
import gomokuDefault from './gomoku-default.png';
import gomokuBlack from './gomoku-black.png';
import gomokuWhite from './gomoku-white.png';

function Square() {
  const [img, setImg] = useState(gomokuDefault);
  const [isUserBlack, setIsUserBlack] = useState(true);

  const putPiece = () => {
    console.log(isUserBlack)
    if (isUserBlack) {
      setImg(gomokuBlack);
    } else {
      setImg(gomokuWhite);
    }

    setIsUserBlack(false);
  };

  return (
    <div className='us-square' onClick={ () => putPiece() }>
      <img src={img} alt="" className="us-w-100 us-h-100"/>
    </div>
  )
}

export default Square;
