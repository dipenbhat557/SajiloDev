import { onAuthStateChanged } from "firebase/auth";
import { atom, selector, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";

export const isLoggedIn = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const currentUser = get(currUser);
    return !!currentUser.email;
  },
});

export const currUser = atom({
  key: "currUser",
  default: {
    email: null as string | null,
    name: null as string | null,
    photo: null as string | null,
    subscribed: false,
    provider: null as string | null,
  },
});

export const listenForAuthChanges = () => {
  const setCurrentUser = useSetRecoilState(currUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser({
        email: user ? user.email : "",
        name: user ? user.displayName : null,
        photo: user ? user.photoURL : null,
        subscribed: false,
        provider: user ? user.providerId : null,
      });
    });
    return () => unsubscribe();
  }, [setCurrentUser]);
};

export const loginErr = atom({
  key: "loginErr",
  default: false,
});
