import { useRecoilValue } from "recoil";
import { def } from "../assets";
import { navLinks, serviceDropdowns } from "../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { currUser, isLoggedIn } from "../store";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const Navbar = ({
  bgColor,
  textColor,
  borderColor,
  logo,
}: {
  bgColor: string;
  textColor: string;
  borderColor: string;
  logo: string;
}) => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const currentUser = useRecoilValue(currUser);
  let timeoutId: NodeJS.Timeout;

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
    <>
      <div
        className={` ${bgColor} bg-opacity-70 backdrop-blur-sm hover:backdrop-blur-lg	border-radius:0.5rem  	 fixed w-full h-[60px] hidden sm:flex items-center ${textColor} justify-between z-30`}
      >
        <div className="flex items-center gap-10 w-[65%]">
          <div
            className="w-[20%] cursor-pointer
        "
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center  gap-10 w-[50%]">
            {navLinks?.map((nav, index) => (
              <div
                key={index}
                className={`${textColor} flex items-center text-[14px] gap-2 cursor-pointer relative`}
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
                    <IoMdArrowDropdown className={`inline ${textColor} `} />
                  </>
                ) : (
                  <a className="hover:text-slate-400" href={nav?.link}>
                    {nav?.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        {!isLogIn && (
          <div className="w-[18%] gap-3 flex items-center justify-around pr-2">
            <p
              className="text-[#0766FF] hover:text-[#799fdc] cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Log in
            </p>
            <p
              className={`px-4 py-1 bg-white cursor-pointer text-[#0766FF] hover:bg-slate-200    rounded-lg ${borderColor}`}
              onClick={() => navigate("/signup")}
            >
              Register
            </p>
          </div>
        )}
        {isLogIn && (
          <div
            className="w-[3%] h-[80%] flex items-center rounded-full justify-center mr-4"
            onClick={() => navigate("/user")}
          >
            <img
              src={currentUser?.photo || def}
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          </div>
        )}

        {showDropdown && (
          <div
            className="dropdown-menu top-14 p-3 rounded-b-xl rounded-r-xl left-[15%] text-black bg-white w-[16%] absolute z-50 "
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => handleMouseOverDropdown()}
          >
            <ul className="w-full">
              {serviceDropdowns?.map((service, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-[#0766FF30] text-[#0B619E] px-2 py-1 rounded-sm text-[12px] cursor-pointer "
                  >
                    <p onClick={() => navigate(`/afterservice/${index + 1}`)}>
                      {service?.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* Mobile menu */}
      <div
        className={`shadow-2xl shadow-slate-500 sm:hidden cursor-pointer z-40 flex items-center h-[70px] px-6 w-full mr-3 justify-between ${bgColor}`}
      >
        <div className="w-[30%] cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        {toggle ? (
          <AiOutlineMenuUnfold
            className={`text-2xl ${
              bgColor == "bg-white" ? "text-black" : "text-white"
            }`}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenuFold
            className={`text-2xl ${
              bgColor == "bg-white" ? "text-black" : "text-white"
            }`}
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#ffffff] absolute top-14 right-3   min-w-[140px] z-50 rounded-xl rounded-tr-none flex flex-col items-end gap-4`}
        >
          <ImCross className="text-sm" onClick={() => setToggle(false)} />
          <li
            className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <a href="/" className="w-full text-left">
              Home
            </a>
          </li>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`font-poppins w-full text-[17px]   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {link.title === "Services" ? (
                <a className="w-full text-left" href="/afterservice/0">
                  Services
                </a>
              ) : (
                <a className="w-full text-left" href={link?.link}>
                  {link.title}
                </a>
              )}
            </li>
          ))}
          {isLogIn ? (
            <li
              className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="/user" className="w-full text-left">
                Profile
              </a>
            </li>
          ) : (
            <>
              <li
                className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a href="/signin" className="w-full text-left">
                  Login
                </a>
              </li>
              <li
                className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a href="/signup" className="w-full text-left">
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
