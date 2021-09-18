import React, { createContext, useContext } from "react";

export const SquareListContext = createContext<number[][] | null>(null);

export const SquareListProvider: React.FC<{ squareList: number[][] }> = ({
  children,
  squareList,
}) => {
  return (
    <SquareListContext.Provider value={squeareList}>
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
