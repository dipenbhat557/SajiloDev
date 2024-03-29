import { useRecoilValue } from "recoil";
import { def, logo } from "../assets";
import { navLinks } from "../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../store";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);

  return (
    <div
      className={`bg-[#1F2123] fixed z-50 w-full h-[70px] flex items-center justify-between shadow-2xl shadow-black`}
    >
      <div className="h-full w-[65%] flex items-center justify-around">
        <div className="h-full w-[30%]">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex items-center justify-around w-[90%] h-full">
          {navLinks?.map((nav, index) => {
            return (
              <div
                key={index}
                className="text-white flex items-center text-[14px] gap-2 cursor-pointer"
                onClick={() => navigate(nav?.link)}
              >
                {nav?.title}
                {nav?.title === "Services" ? <IoMdArrowDropdown /> : ""}
              </div>
            );
          })}
        </div>
      </div>
      {!isLogIn && (
        <div className="h-full w-[25%] flex items-center justify-between pr-2">
          <p className="text-[#0766FF]">Log in</p>
          <p className="px-4 py-1 bg-white text-[#0766FF] rounded-lg">
            Register
          </p>
        </div>
      )}
      {isLogIn && (
        <div className="h-full w-[15%] flex items-center justify-center ">
          <img
            src={def}
            className="w-[80%] h-[80%] object-contain rounded-full"
          />
        </div>
      )}
    </div>
  );
};
export default Navbar;
