import { useEffect, useState } from "react";
import { rating, reviewBg } from "../assets";
import { reviewItems } from "../constants";
import { styles } from "../styles";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Reviews = () => {
  const [currentReviews, setCurrentReviews] = useState<any>(
    reviewItems.slice(0, 3)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentReviews = () => {
    const startIndex = currentIndex;
    const endIndex = window?.innerWidth > 640 ? startIndex + 3 : startIndex + 1;
    const nextIndex = endIndex % reviewItems?.length;
    if (endIndex !== reviewItems?.length - 1 && window?.innerWidth > 640) {
      setCurrentReviews(
        reviewItems
          ?.slice(startIndex, endIndex)
          ?.concat(reviewItems.slice(0, nextIndex))
      );
    } else {
      setCurrentReviews(reviewItems?.slice(startIndex, endIndex));
    }
    // console.log(reviewItems?.slice(1, 4));
    // console.log(
    //   "start index is ",
    //   startIndex,
    //   " end index is ",
    //   endIndex,
    //   " current reviews are ",
    //   currentReviews,
    //   "next index is ",
    //   nextIndex
    // );
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((prevIndex: number) => {
      const newIndex =
        (prevIndex - 1 + reviewItems.length) % reviewItems.length;

      return newIndex;
    });
  };
  useEffect(() => {
    updateCurrentReviews();
  }, [currentIndex, window.innerWidth]);

  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex: number) => {
      const newIndex = (prevIndex + 1) % reviewItems?.length;

      return newIndex;
    });
  };

  return (
    <div
      className={`${styles.padding} w-full h-[500px] sm:h-[700px] flex flex-col`}
    >
      <div className="w-full h-[20%] sm:h-[30%] ">
        <img src={reviewBg} alt="bg" className="w-full h-full object-contain" />
      </div>
      <div className="w-full h-[70%] flex flex-col rounded-t-lg shadow-black shadow-lg">
        <div className="w-full h-[10%] rounded-t-lg bg-[#1F2123]" />
        <div
          className={`${styles.paddingX} pt-2 w-full h-[30%] sm:h-[20%] flex flex-col sm:flex-row sm:items-center justify-between`}
        >
          <div className="w-[70%] sm:w-[19%] left-0 h-[58%] sm:h-full flex flex-col gap-3">
            <p className="overflow-y-hidden font-semibold text-[16px] sm:text-[18px] font-serif">
              Customers testimonials
            </p>
            <div className="w-full h-[30%] sm:h-[50%] flex items-center justify-center gap-3">
              <img
                src={rating}
                alt="rating"
                className="w-[40%] sm:w-[70%] h-full object-contain"
              />
              <p className="overflow-y-hidden font-serif text-[12px] sm:text-[16px]">
                5.0 rating
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[80%] h-[38%] sm:h-full flex items-center justify-end">
            <button className="text-[13px] sm:text-[16px] px-4 py-2 text-white bg-[#0766FF] rounded-lg">
              Leave a Review
            </button>
          </div>
        </div>
        <div className="w-full h-[70%] flex items-center justify-around">
          <IoMdArrowDropleft
            onClick={handleLeftButtonClick}
            className=" animate-bounce text-6xl cursor-pointer"
          />
          {currentReviews?.slice(0, 3)?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="p-2 border border-black rounded-lg flex flex-col justify-between items-center w-[60%] sm:w-[28%] h-[80%] sm:h-[60%]"
              >
                <div className="h-[30%] w-full flex gap-2">
                  <img
                    src={item?.img}
                    alt="user"
                    className="h-[90%] w-[15%] object-contain rounded-full"
                  />
                  <div className="h-[90%] w-[80%] flex flex-col ">
                    <p>{item?.name}</p>
                    <p className="text-[12px] font-serif font-extralight">
                      {item?.time}
                    </p>
                  </div>
                </div>
                <img
                  src={rating}
                  alt="rating"
                  className="h-[10%] w-[40%] object-contain"
                />
                <p className="text-[14px] h-[55%] line-clamp-3 sm:line-clamp-5 tracking-wide leading-relaxed">
                  {item?.review}
                </p>
              </div>
            );
          })}
          <IoMdArrowDropright
            onClick={handleRightButtonClick}
            className=" animate-bounce text-6xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
