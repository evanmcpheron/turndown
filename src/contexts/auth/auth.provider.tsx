import { auth } from "@/src/services";
import { userApi } from "@/src/services/api/users";
import { User } from "@/src/types/models";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./auth.types";

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (res) => {
      if (res?.uid) {
        const fetchedUser = await userApi.getById(res.uid);
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
    await userApi.post(
      {
        email,
        display_name: name,
        phone_number: "",
        photo_url: "",
        is_active: true,
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

export default AuthProvider;
