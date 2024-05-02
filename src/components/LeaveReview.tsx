import React, { Dispatch, SetStateAction, useState } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { currUser, isLoggedIn } from "../store";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface LeaveReviewProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface Review {
  review: string;
}

const LeaveReview: React.FC<LeaveReviewProps> = ({
  isOpen,
  onClose,
  setIsOpen,
}) => {
  if (!isOpen) return null;
  let arr = ["", "", "", "", ""];
  const [currentRate, setCurrentRate] = useState(0);
  const [formData, setFormData] = useState<Review>({
    review: "",
  });
  const isLogIn = useRecoilValue(isLoggedIn);
  const navigate = useNavigate();
  const collectionRef = collection(db, "reviews");
  const currentUser = useRecoilValue(currUser);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!isLogIn) {
      navigate("/signin");
    } else {
      try {
        await addDoc(collectionRef, {
          rating: currentRate,
          review: formData.review,
          name: currentUser?.name,
          time: new Date().toLocaleString(),
          img: "",
        });

        setIsOpen(false);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);

        setFormData({
          review: "",
        });
        setCurrentRate(0);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to add data. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[80%] sm:w-full">
        <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
        <form className="flex gap-3 flex-col">
          <p>Rate sajiloDev</p>
          <div className="flex gap-3">
            {arr.map((_, i) =>
              i < currentRate ? (
                <FaStar
                  key={i}
                  className="text-yellow-400 cursor-pointer"
                  onClick={() => setCurrentRate(i + 1)}
                />
              ) : (
                <FaRegStar
                  key={i}
                  className=" cursor-pointer"
                  onClick={() => setCurrentRate(i + 1)}
                />
              )
            )}
          </div>

          <textarea
            className="form-textarea p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={4}
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
            placeholder="Write your review here..."
          ></textarea>
          <div className="flex gap-3 justify-end mt-4">
            <button
              type="button"
              className="hover:bg-gray-200 bg-white text-gray-900 font-bold py-2 px-4 rounded-l"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#0766FF] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-r"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveReview;
