import { useState, type ReactNode } from "react";
import { AuthContext } from "../contexts/auth-context";
import type { User } from "../types/types";

type Props = { children: ReactNode };

// recupera o usuário do local storage
function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return null;
  return JSON.parse(storedUser);
}

export function AuthContextProvider(props: Props) {
  const [user, setUser] = useState<User | null>(getStoredUser);
  const isAuthenticated = user !== null;

  async function login(user: User) {
    console.log({ message: "entrou no login" });
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      <>{props.children}</>
    </AuthContext.Provider>
  );
}
