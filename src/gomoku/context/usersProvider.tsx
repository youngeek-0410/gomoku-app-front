import React, { createContext, useContext } from "react";

export type User = {
  id: number;
  name: string;
};

export type Users = {
  0: User,
  1: User,
};

export const UsersContext = createContext<Users | null>(null);

export const UsersProvider: React.FC<{ users: Users }> =
  ({ children, users}) => {
    return (
      <UsersContext.Provider value={users}>
        {children}
      </UsersContext.Provider>
    );
  };

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers should use inner UsersContextProvider");
  }
  return context;
};
