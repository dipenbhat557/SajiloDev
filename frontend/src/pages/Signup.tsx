import { useState } from "react";
import { facebook, google, insta, login, twitter } from "../assets";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "../store";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <>
      <Navbar
        bgColor="bg-white"
        textColor="text-black"
        borderColor="border border-[#E0E0E9]"
      />
      <div className="h-screen w-full flex flex-col">
        <div
          className={`items-center justify-center p-36 w-full h-[92%] flex  bg-[#F0F4FC] shadow-slate-500 shadow-sm`}
        >
          <div className="w-[60%] h-[80%]  flex flex-col gap-3">
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
            <button className=" w-[30%] rounded-lg py-2 bg-[#4461F2] text-white font-serif">
              Get your Own Site
            </button>
            <img
              src={login}
              alt="login bg"
              className="w-[80%] h-[60%] object-contain"
            />
          </div>
          <div className="w-[38%] h-[80%] flex flex-col gap-8">
            <p className="text-[22px] font-semibold">Register</p>
            <form
              onSubmit={handleSubmit}
              className="w-full h-[70%] gap-8 flex flex-col"
            >
              <input
                type="text"
                name="email"
                placeholder="Enter Email or Phone"
                onChange={handleChange}
                value={formData.email}
                className="px-8 py-2 placeholder:text-[10px] placeholder:text-slate-700 shadow-sm shadow-slate-600 rounded-md"
              />
              <div className="relative">
                <input
                  type={showPassword1 ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full px-8 -z-10 py-2 placeholder:text-[10px] placeholder:text-slate-700 shadow-sm shadow-slate-600 rounded-md"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility1}
                  className="absolute right-2 top-2 z-50 "
                >
                  {showPassword1 ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  className="w-full px-8 -z-10 py-2 placeholder:text-[10px] placeholder:text-slate-700 shadow-sm shadow-slate-600 rounded-md"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility2}
                  className="absolute right-2 top-2 z-50"
                >
                  {showPassword2 ? "🙈" : "👁️"}
                </button>
              </div>

              <button type="submit">Register</button>
            </form>

            <div className="flex gap-3 items-center justify-center">
              <div className="border-b border-slate-700 w-[25px]" />
              <p className="text-slate-700 text-[10px] my-4">
                Or Continue with
              </p>
              <div className="border-b border-slate-700 w-[25px]" />
            </div>
            <div className="w-[70%] h-[13%] flex items-center mx-auto justify-around">
              <div className="w-[15%] cursor-pointer h-full shadow-black shadow-sm rounded-3xl">
                <img
                  src={google}
                  alt="google"
                  className="w-[3]  h-full object-contain rounded-full"
                />
              </div>
              <div className="w-[15%] cursor-pointer h-full shadow-black shadow-sm rounded-3xl">
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[3]  h-full object-contain rounded-full"
                />
              </div>
              <div className="w-[15%] cursor-pointer h-full shadow-black shadow-sm rounded-3xl">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[3]  h-full object-contain rounded-full"
                />
              </div>
              <div className="w-[15%] cursor-pointer h-full shadow-black shadow-sm rounded-3xl">
                <img
                  src={insta}
                  alt="insta"
                  className="w-[3]  h-full object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[6%] flex items-center justify-between">
          <div className="w-[30%] h-full flex items-center justify-center">
            <p className="font-serif font-light text-[14px]">
              Copyright@2024 sajiloDev
            </p>
          </div>
          <div className="w-[50%] text-[14px] h-full flex items-center justify-evenly">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact us</p>
            <p className="cursor-pointer">Customer Support</p>
            <p className="cursor-pointer">Jobs</p>
            <p className="cursor-pointer">Subscription</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
