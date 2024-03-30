import { facebook, insta, linkedin, logo, twitter } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  const handleSubscribe = () => {};
  return (
    <div
      className={`${styles.paddingX} flex flex-col bg-[#1F2123] w-full h-[300px] items-center`}
    >
      <div className={` w-full h-[82%] flex justify-around items-center`}>
        <div className="w-[20%] h-[50%] flex flex-col items-center justify-around">
          <div className=" w-[60%] h-[40%]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full h-[55%] flex items-center justify-between">
            <img
              src={linkedin}
              alt="linkedin"
              className="w-[3] h-[40%] cursor-pointer object-contain rounded-full"
            />
            <img
              src={facebook}
              alt="facebook"
              className="w-[3] h-[40%] cursor-pointer object-contain rounded-full"
            />
            <img
              src={insta}
              alt="insta"
              className="w-[2] h-[40%] cursor-pointer object-contain rounded-full"
            />
            <img
              src={twitter}
              alt="twitter"
              className="w-[3] h-[40%] cursor-pointer object-contain rounded-full"
            />
          </div>
        </div>

        <div className="w-[40%] flex justify-around">
          <a href="#" className="text-white text-[18px] underline font-serif">
            Contact us
          </a>
          <a href="#" className="text-white text-[18px] underline font-serif">
            Jobs
          </a>
          <a href="#" className="text-white text-[18px] underline font-serif">
            Customer support
          </a>
        </div>

        <div className="flex flex-col w-[30%] h-[70%] justify-center items-center pt-4">
          <div className="flex flex-row w-[25%] items-center justify-center mt-2">
            <div className="w-[8%] h-[2px] border-b-4 border-[#0766FF] mr-2 rounded-3xl flex-grow" />
            <p className="font-extrabold text-xl text-white sm:text-2xl">
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
          <div className="my-2 mb-6 justify-center items-center flex flex-row">
            <input
              type="text"
              placeholder="Enter your mail address"
              className="p-2 px-6 rounded-xl"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#0766FF] font-bold text-white hover:shadow-2xl mt-2 hover:bg-blue-500 ml-3 p-2 px-4 rounded-2xl"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-[20%] border-t border-slate-400 p-2">
        {" "}
        <p className="font-serif text-[22px] text-slate-400">
          Copyright@SajiloDev
        </p>
      </div>
    </div>
  );
};
export default Footer;
