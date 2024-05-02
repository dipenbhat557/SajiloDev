import React, { useState } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";

interface LeaveReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Review {
  rating: number;
  review: string;
  name: string;
  time: string;
}

const LeaveReview: React.FC<LeaveReviewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  let arr = ["", "", "", "", ""];
  const [currentRate, setCurrentRate] = useState(0);
  const [newReview, setNewReview] = useState<Review>({
    rating: 0,
    review: "",
    name: "",
    time: "",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
        <form className="flex gap-3 flex-col">
          <p>Rate sajiloDev</p>
          <div className="flex gap-3">
            {arr.map((_, i) =>
              i < currentRate ? (
                <FaStar
                  key={i}
                  className="text-yellow-400"
                  onClick={() => setCurrentRate(i + 1)}
                />
              ) : (
                <FaRegStar key={i} onClick={() => setCurrentRate(i + 1)} />
              )
            )}
          </div>

          <textarea
            className="form-textarea p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={4}
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
              type="submit"
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
