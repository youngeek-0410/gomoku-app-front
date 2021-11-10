import React, { createContext, useContext } from "react";

import { CurrentStatus } from "../components/Board";

export const SquareListContext = createContext<CurrentStatus[][] | null>(null);

export const SquareListProvider: React.FC<{ squareList: CurrentStatus[][] }> = ({
  children,
  squareList,
}) => {
  return (
    <SquareListContext.Provider value={squareList}>
      {children}
    </SquareListContext.Provider>
  );
};

export const useSquareList = () => {
  const context = useContext(SquareListContext);
  if (!context) {
    throw new Error(
      "useSquareList should use inner SquareListContextProvider"
    );
  }
  return context;
};
