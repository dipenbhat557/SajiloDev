import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Signin from "./Signin";
import User from "./User";
import ContactUs from "./ContactUs";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
