import React, { useState, useEffect } from "react";

import { GameLogHeader } from "./gameLogHeader";
import { GameLogTimeline } from "./gameLogTimeline";
import { GameLogProvider, GameLogBody } from "../context/gameLogProvider";
import { useAxiosClient } from "../../common/context/axiosClientProvider";

export const GameLog: React.FC = () => {
  const client = useAxiosClient();
  const [gameLogs, setGameLogs] = useState<GameLogBody[]>([]);
  useEffect(() => {
    client
      .get("/game_logs")
      .then(async (v) => {
        setGameLogs(v.data);
      })
      .catch(() => {});
  }, [client]);

  return (
    <GameLogProvider gameLogs={gameLogs}>
      <GameLogHeader />
      <GameLogTimeline />
    </GameLogProvider>
  );
};
