import React from "react";

import { useGameLog } from "../context/gameLogProvider";

export const GameLogTimeline: React.FC = () => {
  const gameLogs = useGameLog();

  if (gameLogs.length === 0) {
    return <p>取得中、、</p>;
  }
  return (
    <>
      {gameLogs.map((v, i) => {
        return (
          <p key={i}>
            {v.user_1_name} vs {v.user_2_name} 勝者:{" "}
            {v.win_user === 1
              ? v.user_1_name
              : v.win_user === 2
              ? v.user_2_name
              : "引き分け"}
          </p>
        );
      })}
    </>
  );
};
