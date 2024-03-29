import { rating, reviewBg } from "../assets";
import { reviewItems } from "../constants";
import { styles } from "../styles";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Reviews = () => {
  return (
    <div className={`${styles.padding} w-full h-[700px] flex flex-col`}>
      <div className="w-full h-[30%] ">
        <img src={reviewBg} alt="bg" className="w-full h-full object-contain" />
      </div>
      <div className="w-full h-[70%] flex flex-col rounded-t-lg shadow-black shadow-lg">
        <div className="w-full h-[10%] rounded-t-lg bg-[#1F2123]" />
        <div
          className={`${styles.paddingX} pt-2 w-full h-[20%] flex items-center justify-between`}
        >
          <div className="w-[19%] h-full flex flex-col gap-3">
            <p className="font-semibold text-[18px] font-serif">
              Customers testimonials
            </p>
            <div className="w-full h-[50%] flex items-center justify-between">
              <img
                src={rating}
                alt="rating"
                className="w-[70%] h-full object-contain"
              />
              <p className="font-serif">5.0 rating</p>
            </div>
          </div>
          <div className="w-[80%] h-full flex items-center justify-end">
            <button className="px-4 py-2 text-white bg-[#0766FF] rounded-lg">
              Leave a Review
            </button>
          </div>
        </div>
        <div className="w-full h-[70%] flex items-center justify-around">
          <IoMdArrowDropleft className="text-6xl" />
          {reviewItems?.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-black rounded-lg flex flex-col justify-between bg-black items-center w-[28%] h-[60%]"
              ></div>
            );
          })}
          <IoMdArrowDropright className="text-6xl" />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
