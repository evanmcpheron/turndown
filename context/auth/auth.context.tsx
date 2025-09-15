import { auth } from "@/helpers/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

// ⬇️ Replace with your real Firebase user object or null
type User = { uid: string; email?: string | null } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (res) => {
      setUser(res);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
    });

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
    });

  const signOutFn = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signUp, signOut: signOutFn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
