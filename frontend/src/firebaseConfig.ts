import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4tdH0aGExE1f6YtT869h215mJ1Oq5fII",
  authDomain: "sajilodev-77b40.firebaseapp.com",
  projectId: "sajilodev-77b40",
  storageBucket: "sajilodev-77b40.appspot.com",
  messagingSenderId: "472416518183",
  appId: "1:472416518183:web:cecc7bafeedc3987a8ce02",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
