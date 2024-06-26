import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { styles } from "../styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currUser, isLoggedIn, loginErr } from "../store";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);
  const setLoginError = useSetRecoilState(loginErr);
  const collectionRef = collection(db, "subscriptions");
  const [currentUser, setCurrentUser] = useRecoilState(currUser);

  const handleSubscribe = async () => {
    if (!isLogIn) {
      setLoginError(true);
      navigate("/signin");
    } else {
      try {
        await addDoc(collectionRef, {
          email: currentUser?.email,
          name: currentUser?.name,
          time: new Date().toLocaleString(),
        });
        setCurrentUser({ ...currentUser, subscribed: true });

        console.log("subscribed");
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to add data. Please try again.");
      }
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.5)}
      className={`${styles.paddingX} flex flex-col bg-[#1F2123] w-full ${
        currentUser?.subscribed ? "h-[260px]" : "h-[550px]"
      } sm:h-[300px] items-center`}
    >
      <div
        className={` w-full h-full sm:h-[82%] flex  flex-col-reverse sm:flex-row justify-around items-center`}
      >
        <div className="w-[60%] sm:w-[20%] h-[30%] sm:h-[50%] flex flex-col items-center justify-around">
          <div className=" w-[60%] h-[40%]">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="cursor-pointer w-full h-full object-contain"
            />
          </div>

          <div className="w-full h-[55%] flex items-center justify-between">
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/sajilo-dev/",
                  "_blank",
                  "rel=noopener noreferrer"
                )
              }
              className="cursor-pointer text-3xl text-blue-400"
            />
            <FaInstagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sajilodev/",
                  "_blank",
                  "rel=noopener noreferrer"
                )
              }
              className="cursor-pointer text-3xl text-pink-600"
            />
            <FaFacebook
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61558938183182",
                  "_blank",
                  "rel=noopener noreferrer"
                )
              }
              className="cursor-pointer text-3xl text-blue-600"
            />
          </div>
        </div>

        <div className="w-[95%] sm:w-[40%] h-[10%] sm:h-auto flex justify-around">
          <a
            href="/contactus"
            className="text-white text-[14px] sm:text-[18px] underline font-serif"
          >
            Contact us
          </a>
          <a
            href="/contactus"
            className="text-white  text-[14px] sm:text-[18px] underline font-serif"
          >
            Jobs
          </a>
          <a
            href="/contactus"
            className="text-white  text-[14px] sm:text-[18px] underline font-serif"
          >
            Customer support
          </a>
        </div>

        {!currentUser?.subscribed && (
          <div className="flex flex-col w-[75%] sm:w-[30%] h-[60%] sm:h-[70%] justify-center items-center pt-4">
            <div className="flex flex-row w-[90%] sm:w-[25%] items-center justify-center mt-2">
              <div className="w-[8%] h-[2px] border-b-4 border-[#0766FF] mr-2 rounded-3xl flex-grow" />
              <p className="font-extrabold  text-xl text-white sm:text-2xl">
                SUBSCRIPTION
              </p>
              <div className="w-[8%] h-[2px] border-b-4 ml-2 border-[#0766FF] rounded-3xl flex-grow" />
            </div>
            <p className="font-extrabold my-2 text-[17px] text-white">
              Join our Newsletter
            </p>
            <p className=" text-center font-bold text-[12px] text-white md:leading-loose m-2">
              Subscribe to our Newsletter to get the latest news, updates
              delivered directly to your inbox.
            </p>

            <div className="w-[90%] sm:w-auto my-2 mb-6 justify-center items-center flex flex-row">
              <button
                onClick={handleSubscribe}
                className="bg-[#0766FF] text-[12px] sm:text-[16px] font-medium sm:font-bold text-white hover:shadow-2xl mt-2 hover:bg-blue-500 ml-1 sm:ml-3 p-1 sm:p-2 px-4 rounded-2xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-[80%] sm:w-[20%] h-[10%] sm:h-auto border-t border-slate-400 flex items-center justify-center p-2">
        {" "}
        <p className="font-serif text-[18px] sm:text-[22px] text-slate-400">
          Copyright@SajiloDev
        </p>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(Footer);
