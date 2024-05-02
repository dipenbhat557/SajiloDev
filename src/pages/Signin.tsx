import { useEffect, useState } from "react";
import { google, login, logo1 } from "../assets";
import Navbar from "../components/Navbar";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currUser, loginErr } from "../store";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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
  let githubProvider = new GithubAuthProvider();
  let facebookProvider = new FacebookAuthProvider();
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
          setCurrentUser({
            email: res.user.email,
            name: res?.user?.displayName,
          });
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
          setCurrentUser({
            email: res.user.email,
            name: res?.user?.displayName,
          });
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

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        if (res?.user?.email) {
          setCurrentUser({
            email: res.user.email,
            name: res?.user?.displayName,
          });
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

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        if (res?.user?.email) {
          setCurrentUser({
            email: res.user.email,
            name: res?.user?.displayName,
          });
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
      <div className=" sm:h-[97%] h-[90%] w-full flex justify-around flex-col">
        <div
          className={`items-center justify-center sm:p-36 w-full h-[89%] sm:h-[96%] flex  bg-[#F0F4FC] shadow-slate-500 shadow-sm`}
        >
          <div className="w-[60%] h-[80%]  hidden sm:flex flex-col gap-3">
            <div className="flex flex-col w-[40%]">
              <p className="font-semibold text-[25px] font-serif">Welcome to</p>
              <p className="font-bold text-[35px] font-serif">SajiloDev</p>
            </div>
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
                  className="absolute right-2 top-2 z-30 "
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
              <div className="w-[12%] sm:w-[8%] h-full">
                <img
                  src={google}
                  alt="google logo"
                  className="w-full h-full object-contain cursor-pointer  "
                  onClick={handleGoogleSignIn}
                />
              </div>

              <FaGithub
                onClick={handleGithubSignIn}
                className="cursor-pointer text-3xl "
              />
              <FaFacebook
                onClick={handleFacebookSignIn}
                className="cursor-pointer text-3xl text-blue-800"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[6%] flex flex-col-reverse sm:flex-row items-center justify-around sm:justify-between">
          <div className="w-auto sm:w-[30%] h-full flex items-center justify-center">
            <p className="font-serif font-light text-[14px]">
              Copyright@2024 sajiloDev
            </p>
          </div>
          <div className="w-full sm:w-[50%] text-[12px] sm:text-[14px] h-full flex items-center justify-evenly">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact us</p>
            <p className="cursor-pointer">Customer Support</p>
            <p className="cursor-pointer">Jobs</p>
            <p className="cursor-pointer">Subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
