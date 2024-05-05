import { useEffect, useState } from "react";
import { def, reviewBg } from "../assets";
import { reviewItems } from "../constants";
import { styles } from "../styles";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import LeaveReview from "./LeaveReview";
import { FaStar } from "react-icons/fa6";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Reviews = () => {
  const [isReviewOpen, setReviewOpen] = useState(false);
  const [totalReviewItems, setTotalReviewItems] = useState(reviewItems);
  const [currentReviews, setCurrentReviews] = useState<any>(
    totalReviewItems.slice(0, 3)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  let arr = ["", "", "", "", ""];
  const [totalReview, setTotalReview] = useState(5 * reviewItems.length);

  useEffect(() => {
    const readingReviews = async () => {
      try {
        const q = query(collection(db, "reviews"));
        const querySnapshot = await getDocs(q);
        const newReviews: any[] = [];
        let newTotalReview = totalReview;

        querySnapshot.forEach((doc) => {
          const reviewData = doc.data();
          const review = {
            name: reviewData.name,
            img: reviewData.img,
            review: reviewData.review,
            rating: reviewData.rating,
            time: reviewData.time,
          };
          newReviews.push(review);
        });
        // console.log("review items are ", reviewItems);
        // console.log("new reviews are ", newReviews);

        const newOne = totalReviewItems;
        newReviews.forEach((n) => {
          const s = newOne?.filter((a) => n?.name === a?.name);
          if (s.length > 0) {
          } else {
            newTotalReview = newTotalReview + n?.rating;
            // console.log("The rating is ", n?.rating);
            // console.log("new total review is ", newTotalReview);
            setTotalReview(newTotalReview);

            // console.log("total review is ", totalReview);
            newOne.push(n);
          }
        });

        setTotalReviewItems(newOne);
        // console.log("total review items are ", totalReviewItems);
        // console.log(
        //   "length of total review items is ",
        //   totalReviewItems.length
        // );
      } catch (error) {
        console.log("Error is ", error);
      }
    };

    readingReviews();
  }, []);

  const updateCurrentReviews = () => {
    const startIndex = currentIndex;
    const endIndex = window?.innerWidth > 640 ? startIndex + 3 : startIndex + 1;
    const nextIndex = endIndex % totalReviewItems?.length;
    if (endIndex !== totalReviewItems?.length - 1 && window?.innerWidth > 640) {
      setCurrentReviews(
        totalReviewItems
          ?.slice(startIndex, endIndex)
          ?.concat(reviewItems.slice(0, nextIndex))
      );
    } else {
      setCurrentReviews(totalReviewItems?.slice(startIndex, endIndex));
    }
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((prevIndex: number) => {
      const newIndex =
        (prevIndex - 1 + totalReviewItems.length) % totalReviewItems.length;

      return newIndex;
    });
  };
  useEffect(() => {
    updateCurrentReviews();
  }, [currentIndex, window.innerWidth]);

  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex: number) => {
      const newIndex = (prevIndex + 1) % totalReviewItems?.length;

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
      <motion.div
        variants={fadeIn("down", "", 0.5, 0.6)}
        className="w-full h-[70%] flex flex-col rounded-t-lg shadow-black shadow-lg"
      >
        <div className="w-full h-[10%] rounded-t-lg bg-[#1F2123]" />
        <div
          className={`${styles.paddingX} pt-2 w-full h-[30%] sm:h-[20%] flex flex-col sm:flex-row sm:items-center justify-between`}
        >
          <div className="w-[70%] sm:w-[29%] left-0 h-[58%] sm:h-full flex flex-col gap-3">
            <p className="overflow-y-hidden font-semibold text-[16px] sm:text-[18px] font-serif">
              Customers testimonials
            </p>
            <div className="w-[80%] h-[30%] sm:h-[50%] flex items-center justify-center gap-3">
              <div className="w-[70%] flex gap-1">
                {arr.map((_, i) => {
                  return i + 1 <= totalReview ? (
                    <FaStar
                      key={i}
                      className="text-yellow-400 cursor-pointer"
                    />
                  ) : (
                    ""
                  );
                })}
              </div>
              <p className=" font-serif w-[30%] text-[12px] sm:text-[16px]">
                {(totalReview / totalReviewItems.length)
                  .toPrecision(2)
                  .toString()}{" "}
                rating
              </p>
            </div>
          </div>

          <div className="w-full sm:w-[80%] h-[38%] sm:h-full flex items-center justify-end">
            <button
              className=" text-[13px] sm:text-[16px] sm:px-4 px-2 py-2 sm:py-2 text-white bg-[#0766FF] rounded-lg"
              onClick={() => setReviewOpen(true)}
            >
              Leave a Review
            </button>
            {isReviewOpen && (
              <LeaveReview
                setFormSubmitted={setFormSubmitted}
                onClose={() => setReviewOpen(false)}
                setIsOpen={setReviewOpen}
              />
            )}
          </div>
        </div>
        {formSubmitted && (
          <div className="w-full text-center text-blue-600 h-auto font-semibold">
            Thank You for the Review
          </div>
        )}
        <div className="w-full h-[70%] flex items-center justify-around">
          <IoMdArrowDropleft
            onClick={handleLeftButtonClick}
            className={` animate-bounce text-6xl cursor-pointer ${
              isReviewOpen ? "hidden" : ""
            }`}
          />
          {currentReviews?.slice(0, 3)?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="p-2 border border-black rounded-lg flex flex-col justify-between items-center w-[70%] sm:w-[28%] h-[80%] sm:h-[60%]"
              >
                <div className="h-[30%] w-full flex gap-2">
                  <img
                    src={item?.img || def}
                    alt="user"
                    className="h-[90%] w-[15%] object-contain rounded-full"
                  />
                  <div className="h-[90%] w-[80%] flex flex-col line-clamp-1">
                    <p>{item?.name}</p>
                    <p className="text-[12px] font-serif font-extralight">
                      {item?.time}
                    </p>
                  </div>
                </div>
                <div className="h-[10%] w-[40%] flex ">
                  {arr.map((_, i) => {
                    return i + 1 <= item?.rating ? (
                      <FaStar
                        key={i}
                        className="text-yellow-400 cursor-pointer"
                      />
                    ) : (
                      ""
                    );
                  })}
                </div>
                <p className="text-[14px] h-[55%] line-clamp-3 sm:line-clamp-5 tracking-wide leading-relaxed">
                  {item?.review}
                </p>
              </div>
            );
          })}
          <IoMdArrowDropright
            onClick={handleRightButtonClick}
            className={` animate-bounce text-6xl cursor-pointer ${
              isReviewOpen ? "hidden" : ""
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Reviews);
