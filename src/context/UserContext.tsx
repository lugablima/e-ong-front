import React, { createContext, useState, useEffect, useContext } from "react";

interface IUserData {
  userId: number;
  token: string;
}

export interface IUserContext {
  user: IUserData | null;
  setUser: React.Dispatch<React.SetStateAction<IUserData | null>>;
}

interface Props {
  children: React.ReactNode;
}

function getLocalUser() {
  const localUserRaw = localStorage.getItem("user");

  if (localUserRaw === null) return localUserRaw;

  const localUser: IUserData = JSON.parse(localUserRaw);
  return localUser;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<IUserData | null>(getLocalUser());
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
