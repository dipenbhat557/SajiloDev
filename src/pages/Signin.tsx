import { useEffect, useState } from "react";
import { login, logo1 } from "../assets";
import Navbar from "../components/Navbar";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currUser, loginErr } from "../store";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

interface FormData {
  email: string;
  password: string;
}

const Signin = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const setCurrentUser = useSetRecoilState(currUser);
  const navigate = useNavigate();
  let googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useRecoilState(loginErr);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        if (res?.user?.email) {
          setCurrentUser({ email: res.user.email });
          navigate("/");
          console.log(res.user);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (res?.user?.email) {
          setCurrentUser({ email: res.user.email });
          navigate("/");
          console.log(res.user);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => setLoginError(false), 3000);
  }, []);

  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar
        logo={logo1}
        bgColor="bg-white"
        textColor="text-black"
        borderColor="border border-[#E0E0E9]"
      />
      {loginError && (
        <div className="w-full h-[50px] text-red-800 font-semibold text-[17px] top-20 text-center absolute p-2">
          Please Login before performing this action !!
        </div>
      )}
      <div className=" sm:h-[97%] h-[95%] w-full flex flex-col">
        <div
          className={`items-center justify-center sm:p-36 w-full h-[89%] sm:h-[96%] flex  bg-[#F0F4FC] shadow-slate-500 shadow-sm`}
        >
          <div className="w-[60%] h-[80%]  hidden sm:flex flex-col gap-3">
            <div className="flex flex-col w-[40%]">
              <p className="font-semibold text-[25px] font-serif">Welcome to</p>
              <p className="font-bold text-[35px] font-serif">SajiloDev</p>
            </div>
            <p className="leading-loose text-[10px]">
            <p className="leading-loose text-[10px]">
              Here, we believe that building a strong professional network
              begins with your participation.
              <br />
              We are delighted to offer a modern and user-friendly service to
              ensure you have the best experience.
            </p>
            <button
              className=" w-[30%] rounded-lg py-2 bg-[#4461F2] text-white font-serif"
              onClick={() => navigate("/afterservice/1")}
            >
              Get your Own Site
            </button>
            <img
              src={login}
              alt="login bg"
              className="w-[80%] h-[60%] object-contain"
            />
          </div>
          <div className="w-[80%] sm:w-[38%] h-auto sm:h-[80%] flex flex-col justify-around gap-8">
            <p className="text-[22px] font-semibold">Log in</p>
            <form
              onSubmit={handleSubmit}
              className="w-full h-[50%] sm:h-[70%] gap-8 flex flex-col"
            >
              {error && (
                <p className="text-red-500 text-[8px] p-2">Try again !!</p>
              )}
              <input
                type="text"
                name="email"
                placeholder="Enter Email or Phone"
                onChange={handleChange}
                value={formData.email}
                className={`px-8 py-2 placeholder:text-[10px] placeholder:text-slate-700  ${
                  error
                    ? "shadow-red-700 shadow-lg"
                    : "shadow-slate-600 shadow-sm"
                } rounded-md`}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  className={`w-full px-8 -z-10 py-2 placeholder:text-[10px] placeholder:text-slate-700 ${
                    error
                      ? "shadow-lg shadow-red-700"
                      : "shadow-sm shadow-slate-600"
                  } rounded-md`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 z-50 "
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              <button
                type="submit"
                className="w-[45%] mx-auto sm:px-8 py-2 rounded-lg bg-[#4461F2] text-white text-[12px] font-medium"
              >
                Sign in
              </button>
            </form>
            <div className="flex gap-3 h-[5%] items-center justify-center">
              <div className="border-b border-slate-700 w-[25px]" />
              <p className="text-slate-700 text-[10px] my-4">
                Or Continue with
              </p>
              <div className="border-b border-slate-700 w-[25px]" />
            </div>
            <div className="w-[70%] h-[13%] flex items-center mx-auto justify-around">
              <FaGoogle className="text-xl" onClick={handleGoogleSignIn} />
              <FaXTwitter className="text-xl" />
              <FaFacebook className="text-xl" />

              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-full h-fit  flex  flex-col gap-6 items-center justify-between">
          <div className="w-[30%] h-full flex items-center justify-center">
            <div className="font-serif font-light text-[12px]">
              <p> Copyright@2024 </p>
              <p className="text-center">Sajilo Dev</p>
            </div>
          </div>
          <div className="w-[40%] h-[20%] text-[14px] lg:h-full flex  flex-col  overflow-y-hidden lg:flex-row   lg:justify-evenly ">
            <p className="cursor-pointer flex justify-between items-center ">
              About <MdOutlineFactory />
            </p>
            <p className="cursor-pointer flex justify-between items-center">
              Contact us <MdOutlineConnectWithoutContact />
            </p>
            <p className="cursor-pointer flex justify-between items-center">
              Customer Support <FcSupport />
            </p>
            <p className="cursor-pointer flex justify-between items-center">
              Jobs <FaRegMoneyBill1 />
            </p>
            <p className="cursor-pointer flex justify-between items-center">
              Subscription <MdOutlineUnsubscribe />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
