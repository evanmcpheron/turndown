import { User } from "@/helpers";
import { auth, dateToTimestamp } from "@/helpers/firebase";
import {
  getUserById,
  postUser,
} from "@/helpers/firebase/api/users/users.api.helpers";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (res) => {
      if (res?.uid) {
        const fetchedUser = await getUserById(res.uid);
        setUser(fetchedUser);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return unSubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    return;
  };

  const signUp = async (email: string, password: string, name: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await postUser(
      {
        email,
        display_name: name,
        phone_number: "",
        photo_url:
          "https://firebasestorage.googleapis.com/v0/b/turndown-6c530.firebasestorage.app/o/default_profile.jpg?alt=media&token=6998d783-d405-4cd6-b66a-1511ffdd6a70",
        is_active: true,
        deleted: false,
        created_at: dateToTimestamp(),
        updated_at: dateToTimestamp(),
      },
      res?.user?.uid
    );
    return;
  };

  const signOutFn = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signUp, signOut: signOutFn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
