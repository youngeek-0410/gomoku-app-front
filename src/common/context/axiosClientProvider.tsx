import React, { createContext, useContext } from "react";
import { AxiosInstance } from "axios";

export const AxiosClientContext = createContext<AxiosInstance | null>(null);

export const AxiosClientProvider: React.FC<{ axiosClient: AxiosInstance }> = ({
  children,
  axiosClient,
}) => {
  return (
    <AxiosClientContext.Provider value={axiosClient}>
      {children}
    </AxiosClientContext.Provider>
  );
};

export const useAxiosClient = () => {
  const context = useContext(AxiosClientContext);
  if (!context) {
    throw new Error(
      "useAxiosClient should use inner AxiosClientContextProvider"
    );
  }
  return context;
};
