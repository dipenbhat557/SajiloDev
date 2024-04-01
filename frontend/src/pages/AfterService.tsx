import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Works from "../components/Works";
import { afterClickItems } from "../constants";
import { styles } from "../styles";
import { useRecoilValue } from "recoil";
import { isLoggedIn } from "../store";
import { useNavigate } from "react-router-dom";

const AfterService = ({
  currentServiceIncoming,
}: {
  currentServiceIncoming: number;
}) => {
  const [currentService, setCurrentService] = useState(currentServiceIncoming);
  const [formData, setFormData] = useState({
    email: "",
    contact: "",
    additionalInfo: "",
    selectedService: 0,
  });
  const isLogIn = useRecoilValue<boolean>(isLoggedIn);
  const navigate = useNavigate();

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentService(parseInt(event.target.value, 10));
    setFormData((prevData) => ({
      ...prevData,
      selectedService: parseInt(event.target.value, 10),
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProceed = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLogIn) {
      navigate("/signin");
    } else {
      const formDataToSend = {
        ...formData,
      };
      console.log("Form submitted:", formDataToSend);
      // Now you can send formDataToSend to the backend
    }
  };

  return (
    <>
      <Navbar bgColor="bg-[#1F2123]" textColor="text-white" borderColor="" />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[44px] font-medium">
            {afterClickItems[currentService]?.title}
          </p>
          <p className="leading-relaxed font-serif text-[19px] w-[50%] font-light text-center">
            {afterClickItems[currentService]?.desc}
          </p>
        </div>
        <div className="h-[370px] w-full -z-20" />

        <div
          className={`${styles.padding} top-[520px] absolute bg-white left-auto  w-[90%]  h-[400px] rounded-md shadow-slate-400 shadow-sm `}
        >
          <form
            onSubmit={handleProceed}
            className="w-full h-full flex flex-col justify-around items-center"
          >
            <div className="w-full h-[90%] flex  justify-around">
              <div className="w-[35%] h-full justify-around flex flex-col gap-3">
                <p className="font-serif">Services</p>
                <select
                  className="p-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                  onChange={handleServiceChange}
                  value={currentService}
                >
                  <option value={0}>Select service</option>
                  <option value={1}>Static Website</option>
                  <option value={2}>Dynamic Website</option>
                  <option value={3}>UI/UX</option>
                  <option value={4}>Hosting</option>
                  <option value={5}>Domain Registration</option>
                  <option value={6}>Upgrade Your Website</option>
                </select>
                <p className="font-serif">Email *</p>
                <input
                  type="email"
                  placeholder="Write your email"
                  className="p-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <p className="font-serif">Contact *</p>
                <input
                  type="text"
                  className="p-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                  placeholder="Write your contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-[35%] h-full flex flex-col gap-3 justify-end">
                <p className="font-serif">Additional Information</p>
                <textarea
                  rows={10}
                  className="p-2 placeholder:p-4 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                  placeholder="Any additional information"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                />
                <p className="font-serif">* Mandatory fields</p>
                <button
                  type="submit"
                  className="h-[15%] w-[70%] mx-auto  text-white text-[18px] bg-[#0766FF] rounded-full  font-serif"
                >
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
        <Services />
        <Works />
        <Footer />
      </div>
    </>
  );
};

export default AfterService;
