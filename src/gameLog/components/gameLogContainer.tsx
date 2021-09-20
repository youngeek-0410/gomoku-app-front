import React, { useState } from "react";

import { GameLogHeader } from "./gameLogHeader";
import { GameLogTimeline } from "./gameLogTimeline";
import { GameLogProvider, GameLogBody } from "../context/gameLogProvider";
import { useAxiosClient } from "../../common/context/axiosClientProvider";

export const GameLog: React.FC = () => {
  const client = useAxiosClient();

  const [gameLogs, setGameLogs] = useState<GameLogBody[]>([]);
  client
    .get("/game_logs")
    .then(async (v) => {
      await setGameLogs(v.data.game_logs);
    })
    .catch((e) => {});

  return (
    <GameLogProvider gameLogs={gameLogs}>
      <GameLogHeader />
      <GameLogTimeline />
    </GameLogProvider>
  );
};
