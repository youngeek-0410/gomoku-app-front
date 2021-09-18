import React, { createContext, useContext } from "react";

export const SqueareListContext = createContext<number[][] | null>(null);

export const SqueareListProvider: React.FC<{ squeareList: number[][] }> = ({
  children,
  squeareList,
}) => {
  return (
    <SqueareListContext.Provider value={squeareList}>
      {children}
    </SqueareListContext.Provider>
  );
};

export const useSqueareList = () => {
  const context = useContext(SqueareListContext);
  if (!context) {
    throw new Error(
      "useSqueareList should use inner SqueareListContextProvider"
    );
  }
  return context;
};
