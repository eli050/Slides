import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../../constants/authTypes";
import { getCurrentUser } from "../../utils/localStorageDAL";

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser());

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}