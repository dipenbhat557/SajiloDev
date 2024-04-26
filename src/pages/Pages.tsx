import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Signin from "./Signin";
import User from "./User";
import ContactUs from "./ContactUs";
import AfterService from "./AfterService";
import Orders from "./Orders";
import { listenForAuthChanges } from "../store";

const Pages = () => {
  listenForAuthChanges();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/afterservice/0"
          element={<AfterService currentServiceIncoming={0} />}
        />
        <Route
          path="/afterservice/1"
          element={<AfterService currentServiceIncoming={1} />}
        />
        <Route
          path="/afterservice/2"
          element={<AfterService currentServiceIncoming={2} />}
        />
        <Route
          path="/afterservice/3"
          element={<AfterService currentServiceIncoming={3} />}
        />
        <Route
          path="/afterservice/4"
          element={<AfterService currentServiceIncoming={4} />}
        />
        <Route
          path="/afterservice/5"
          element={<AfterService currentServiceIncoming={5} />}
        />
        <Route
          path="/afterservice/6"
          element={<AfterService currentServiceIncoming={6} />}
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
