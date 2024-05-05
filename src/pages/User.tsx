import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Works from "../components/Works";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { signOut, updateEmail, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRecoilValue } from "recoil";
import { currUser } from "../store";
import Popup from "../components/Popup";
interface UserData {
  name: string;
  email: string;
  phoneNo: string;
  additionalEmail: string;
}
const User = () => {
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currUser);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phoneNo: currentUser?.phoneNo || "",
    additionalEmail: "",
  });

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    console.log("form data is ", formData);
    setEditable(false);
    setLoading(true);
    const user = auth.currentUser;
    if (user) {
      updateEmail(user, formData.email)
        .then(() => {
          setLoading(false);
          console.log("Email updated successfully");
          // Update other profile information if needed
          updateProfile(user, {
            displayName: formData.name,
          })
            .then(() => {
              console.log("Profile updated successfully");
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error updating email:", error);
        });
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const handleChangePassword = () => {};
  useEffect(() => console.log(auth.currentUser), []);

  return (
    <>
      <Navbar
        logo={logo}
        bgColor="bg-black"
        textColor="text-white"
        borderColor=""
      />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[400px] sm:h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">User Credentials</p>
          <p className="leading-loose text-[14px] font-light text-center w-[80%]">
            We will create our services the best in the town We will create our
            services the best in the town.
          </p>
        </div>
        <div className="h-[560px] sm:h-[370px] w-full -z-20" />

        <div
          className={`${styles.padding} top-[360px] sm:top-[520px] absolute bg-white left-[5%] sm:left-[15%] w-[90%] sm:w-[70%] mx-auto h-[590px] sm:h-[400px] rounded-md shadow-slate-400 shadow-sm flex flex-col justify-around items-center`}
        >
          <div className="w-full h-[10%] flex items-center justify-end">
            <button
              className="text-white bg-[#0766FF] px-12 rounded-full py-1"
              onClick={editable ? handleSaveClick : handleEditClick}
              disabled={loading}
            >
              {editable ? (loading ? "Saving..." : "Save") : "Edit"}
            </button>
          </div>
          <div className="w-[80%] h-[90%] sm:h-[75%] flex flex-col sm:flex-row justify-around gap-5">
            <div className="w-[90%] sm:w-[40%] h-[90%] sm:h-full justify-around flex flex-col gap-3">
              <p className="font-serif">Name</p>
              <input
                type="text"
                value={formData?.name}
                className={`px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] ${
                  currentUser?.provider !== "firebase" ? "text-slate-400" : ""
                }`}
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                readOnly={!editable || currentUser?.provider !== "password"}
              />

              <p className="font-serif">Email</p>
              <input
                type="text"
                value={formData?.email}
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                readOnly={!editable || currentUser?.provider !== "password"}
              />

              <p className="font-serif">Contact Number</p>
              <input
                type="text"
                value={formData?.phoneNo}
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                readOnly={!editable}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNo: e.target.value })
                }
                placeholder="Enter your contact number"
              />
            </div>
            <div className="w-[90%] sm:w-[40%] h-[30%] sm:h-full flex flex-col gap-3 ">
              <p className="font-serif">Additional Email ID</p>
              <input
                type="text"
                className="px-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px] "
                readOnly={!editable}
                onChange={(e) =>
                  setFormData({ ...formData, additionalEmail: e.target.value })
                }
                placeholder="Enter your additional email"
              />
            </div>
          </div>
          <div className="w-[80%] h-[10%] gap-4 flex flex-col-reverse sm:flex-row items-center justify-center">
            <Popup
              deco="px-14 py-1 text-white bg-[#1F2123] rounded-full text-[18px] font-serif"
              text="Logout"
              onpressed={handleLogOut}
            >
              Logout
            </Popup>
            <button
              className="px-14 py-1 text-white bg-red-500 rounded-full text-[14px] sm:text-[18px] font-serif"
              onClick={
                currentUser?.provider === "password"
                  ? handleChangePassword
                  : () =>
                      alert(
                        `Can't perform this action for ${currentUser?.provider} user`
                      )
              }
            >
              Change password
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
