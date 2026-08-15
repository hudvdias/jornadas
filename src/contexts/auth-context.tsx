import { createContext } from "react";
import type { User } from "../types/types";

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextData | null>(null);
