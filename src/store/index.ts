import { atom, selector } from "recoil";

export const isLoggedIn = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const user = get(currUser);
    return user.email !== "";
  },
});

export const currUser = atom({
  key: "currUser",
  default: {
    email: "",
  },
});
