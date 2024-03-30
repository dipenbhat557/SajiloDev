import { useRecoilValue } from "recoil";
import { def, logo } from "../assets";
import { navLinks, serviceDropdowns } from "../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../store";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);
  const [showDropdown, setShowDropdown] = useState(false);
  let timeoutId: number;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 1000);
  };

  const handleMouseOverDropdown = () => {
    setShowDropdown(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="bg-[#1F2123] fixed z-50 w-full h-[70px] flex items-center justify-between shadow-2xl shadow-black">
      <div className="flex items-center justify-around w-[65%]">
        <div className="w-[30%]">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex items-center justify-around w-[90%]">
          {navLinks?.map((nav, index) => (
            <div
              key={index}
              className="text-white flex items-center text-[14px] gap-2 cursor-pointer relative"
              onMouseEnter={() => {
                if (nav.title === "Services") {
                  setShowDropdown(true);
                }
              }}
              onMouseLeave={() => {
                if (nav.title === "Services") {
                  handleMouseLeave();
                }
              }}
              onClick={() => {
                navigate(nav.link);
              }}
            >
              {nav.title === "Services" ? (
                <>
                  {nav.title}
                  <IoMdArrowDropdown className="inline text-white " />
                </>
              ) : (
                <a href={nav?.link}>{nav?.title}</a>
              )}
            </div>
          ))}
        </div>
      </div>
      {!isLogIn && (
        <div className="w-[25%] flex items-center justify-between pr-2">
          <p className="text-[#0766FF]">Log in</p>
          <p className="px-4 py-1 bg-white text-[#0766FF] rounded-lg">
            Register
          </p>
        </div>
      )}
      {isLogIn && (
        <div className="w-[15%] flex items-center justify-center ">
          <img
            src={def}
            className="w-[3] h-[80%] object-contain rounded-full"
          />
        </div>
      )}

      {showDropdown && (
        <div
          className="dropdown-menu top-14 ml-60 p-3 rounded-b-xl rounded-r-xl text-black bg-white w-[16%] absolute z-30"
          onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => handleMouseOverDropdown()}
        >
          <ul>
            {serviceDropdowns?.map((service, index) => {
              return (
                <li className="hover:bg-[#0766FF30] text-[#0B619E] px-2 py-1 rounded-sm text-[12px] cursor-pointer">
                  <a href={`/${service?.link}`}>{service?.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
