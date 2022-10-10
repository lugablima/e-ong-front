import React, { createContext, useState, useEffect, useContext } from "react";

interface IUserData {
  userId: number;
  token: string;
}

export interface IUserContext {
  user: IUserData | null;
  setUser: React.Dispatch<React.SetStateAction<IUserData | null>>;
  userCity: string;
  setUserCity: React.Dispatch<React.SetStateAction<string>>;
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
  const [userCity, setUserCity] = useState<string>("");
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, userCity, setUserCity }}>
      {children}
    </UserContext.Provider>
  );
}
