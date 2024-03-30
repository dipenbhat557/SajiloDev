import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Signin from "./Signin";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
