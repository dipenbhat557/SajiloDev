import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Signin from "./Signin";
import User from "./User";
import ContactUs from "./ContactUs";
import AfterService from "./AfterService";

const Pages = () => {
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
          element={<AfterService currentService={0} />}
        />
        <Route
          path="/afterservice/1"
          element={<AfterService currentService={1} />}
        />
        <Route
          path="/afterservice/2"
          element={<AfterService currentService={2} />}
        />
        <Route
          path="/afterservice/3"
          element={<AfterService currentService={3} />}
        />
        <Route
          path="/afterservice/4"
          element={<AfterService currentService={4} />}
        />
        <Route
          path="/afterservice/5"
          element={<AfterService currentService={5} />}
        />
        <Route
          path="/afterservice/6"
          element={<AfterService currentService={6} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
