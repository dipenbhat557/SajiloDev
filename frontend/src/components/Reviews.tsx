import { useEffect, useState } from "react";
import { rating, reviewBg } from "../assets";
import { reviewItems } from "../constants";
import { styles } from "../styles";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Reviews = () => {
  const [currentReviews, setCurrentReviews] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentReviews = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 3;
    const nextIndex = endIndex % reviewItems?.length;
    if (endIndex !== reviewItems?.length - 1) {
      setCurrentReviews(
        reviewItems
          ?.slice(startIndex, endIndex)
          ?.concat(reviewItems.slice(0, nextIndex))
      );
    } else {
      setCurrentReviews(reviewItems?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex: number) => {
      const newIndex = (prevIndex + 1) % reviewItems?.length;
      return newIndex;
    });
  };

  useEffect(() => {
    updateCurrentReviews();

    const interval = setInterval(handleAutoSwitch, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
          <IoMdArrowDropleft
            onClick={() => {
              setCurrentIndex((prevIndex: number) => {
                const newIndex =
                  (prevIndex - 1 + reviewItems.length) % reviewItems.length;

                return newIndex;
              });
            }}
            className="text-6xl cursor-pointer"
          />
          {currentReviews?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="p-2 border border-black rounded-lg flex flex-col justify-between items-center w-[28%] h-[60%]"
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
                <p className="text-[14px] h-[55%] line-clamp-5 tracking-wide leading-relaxed">
                  {item?.review}
                </p>
              </div>
            );
          })}
          <IoMdArrowDropright
            onClick={() => {
              setCurrentIndex((prevIndex: number) => {
                const newIndex = (prevIndex + 1) % reviewItems?.length;
                return newIndex;
              });
            }}
            className="text-6xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
