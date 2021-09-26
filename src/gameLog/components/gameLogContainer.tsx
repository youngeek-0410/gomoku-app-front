import React from "react";
import useSWR from "swr";

import { GameLogHeader } from "./gameLogHeader";
import { GameLogTimeline } from "./gameLogTimeline";
import { GameLogProvider, GameLogBody } from "../context/gameLogProvider";

const fetcher = async () => {
  const res = await fetch(`${process.env.REACT_APP_GOMOKU_API_URL}/game_logs`);
  return await res.json();
};

export const GameLog: React.FC = () => {
  let { data } = useSWR<GameLogBody[]>("/gamelogs", fetcher);
  if(!data) data = [];

  return (
    <GameLogProvider gameLogs={data}>
      <GameLogHeader />
      <GameLogTimeline />
    </GameLogProvider>
  );
};
