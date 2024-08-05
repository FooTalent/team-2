import React, { useState, useMemo, createContext, useContext } from "react";

interface UserContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  cargando: boolean;
  setCargando: React.Dispatch<React.SetStateAction<boolean>>;
}

 const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [cargando, setCargando] = useState<boolean>(true);

  const value = useMemo(() => ({ user, setUser, cargando, setCargando }), [user, cargando]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}