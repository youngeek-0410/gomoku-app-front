import React from 'react';
import { GameLog } from '../../gameLog/components/gameLogContainer';

import { StartModal } from './startModal';

export const Home: React.FC = () => {
  return (
    <>
      <h1>五目並べゲーム</h1>
      <StartModal />
      <GameLog />
    </>
  );
};

