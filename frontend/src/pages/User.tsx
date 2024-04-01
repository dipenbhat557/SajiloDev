import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Works from "../components/Works";
import { styles } from "../styles";

const User = () => {
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };
  const handleSaveClick = () => {
    setEditable(false);
  };
  return (
    <>
      <Navbar bgColor="bg-[#1F2123]" textColor="text-white" borderColor="" />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">User Credentials</p>
          <p className="leading-loose text-[14px] font-light text-center">
            We will create our services the best in the town We will
            <br /> create our services the best in the town
          </p>
        </div>
        <div className="h-[370px] w-full -z-20" />

        <div
          className={`${styles.padding} top-[520px] absolute bg-white left-[15%]  w-[70%] mx-auto h-[400px] rounded-md shadow-slate-400 shadow-sm flex flex-col justify-around items-center`}
        >
          <div className="w-full h-[10%] flex items-center justify-end">
            {editable && (
              <button
                className="text-white bg-[#0766FF] px-12 rounded-full py-1"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
            {!editable && (
              <button
                className="text-white bg-[#0766FF] px-12 rounded-full py-1"
                onClick={handleSaveClick}
              >
                Save
              </button>
            )}
          </div>
          <div className="w-[80%] h-[75%] flex  justify-around">
            <div className="w-[40%] h-full justify-around flex flex-col gap-3">
              <p className="font-serif">Email</p>
              <input
                type="text"
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                placeholder="Enter your email"
                readOnly={!editable}
              />
              <p className="font-serif">Password</p>
              <input
                type="text"
                placeholder="Enter your password"
                readOnly={!editable}
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
              />
              <p className="font-serif">Contact Number</p>
              <input
                type="text"
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                readOnly={!editable}
                placeholder="Enter your contact number"
              />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-3 ">
              <p className="font-serif">Additional Email ID</p>
              <input
                type="text"
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                readOnly={!editable}
                placeholder="Enter your additional email"
              />
            </div>
          </div>
          <div className="w-[80%] h-[10%] flex items-center justify-center">
            <button className="px-14 py-1 text-white bg-[#1F2123] rounded-full text-[18px] font-serif">
              Logout
            </button>
          </div>
        </div>
        <Works />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};
export default User;
