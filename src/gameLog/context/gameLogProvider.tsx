import React, { createContext, useContext } from "react";

export const GameLogContext = createContext<GameLogBody[] | null>(null);

export type GameLogBody = {
  id: number;
  win_user: number;
  created_at: string;
  user_1_name: string;
  user_2_name: string;
};

export const GameLogProvider: React.FC<{ gameLogs: GameLogBody[] }> =
  ({ children, gameLogs}) => {
    return (
      <GameLogContext.Provider value={gameLogs}>
        {children}
      </GameLogContext.Provider>
    );
  };

export const useGameLog = () => {
  const context = useContext(GameLogContext);
  if (!context) {
    throw new Error("useGameLog should use inner GameLogContextProvider");
  }
  return context;
};
