import { useState } from "react";

interface prop {
  text: string;
  children: string;
  deco: string;
  onpressed: () => void;
}
function Popup(prop: prop) {
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = () => {
    // Logic for cancel action
    console.log("Cancelled");
    prop.onpressed();
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={() => setShowPopup(true)} className={prop.deco}>
        {prop.children}
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-10 shadow-md  ">
            <p className="pb-8 ">Are you sure you want to {prop.text}?</p>
            <div className="flex justify-around w-[80%]">
              <button
                onClick={handleCancel}
                // className="bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                className="rounded-md py-1 px-3  text-[#FB7E15] bg-[#FFF5EB] mx-auto "
              >
                Yes
              </button>
              <button
                onClick={() => setShowPopup(false)}
                // className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                className="rounded-md py-1 px-3 text-[#97f0a5] bg-[#FFF5EB]"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
