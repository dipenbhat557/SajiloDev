import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "../components/Footer";
import GettingSite from "../components/GettingSite";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import emailjs from "emailjs-com";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Sajilo Dev",
          from_email: formData.email,
          to_email: "sajilodev557@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormSubmitted(true);
          setLoading(false);

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setFormSubmitted(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <Navbar bgColor="bg-[#1F2123]" textColor="text-white" borderColor="" />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[400px] sm:h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">Get in touch</p>
          <p className="leading-loose text-[14px] font-light text-center">
            We will create our services the best in the town We will
            <br /> create our services the best in the town
          </p>
        </div>
        <div className="h-[680px] sm:h-[390px] w-full flex items-center justify-center -z-20">
          {formSubmitted && (
            <div className=" text-green-500 p-2 rounded-md border border-gray-300">
              <p className="text-[#0766FF]">Thank you for choosing us!</p>
            </div>
          )}{" "}
        </div>

        {!formSubmitted && (
          <div
            className={`${styles.padding} top-[360px] sm:top-[520px] absolute bg-white left-[5%] sm:left-[15%] w-[90%] sm:w-[70%] mx-auto h-[700px] sm:h-[400px] rounded-md shadow-slate-400 shadow-sm flex flex-col justify-between sm:justify-around items-center`}
          >
            <div className="w-full gap-3 h-full sm:h-[90%] flex flex-col sm:flex-row justify-between sm:justify-around items-center">
              <div className="w-[90%] sm:w-[45%] text-white p-3 px-7 rounded-lg bg-[#1F2123] h-[35%] sm:h-full justify-around flex flex-col gap-2">
                <p className="text-center font-serif text-[18px]">
                  Contact information
                </p>
                <p className="text-center  text-[10px] font-light">
                  We will create our services the best in the town We will
                  create our services the best in the town
                </p>
                <div className="flex gap-3">
                  <IoCall className="text-[#0766FF]" />
                  <p className="text-[14px] font-light">8545866043</p>
                </div>
                <div className="flex gap-3">
                  <IoIosMail className="text-[#0766FF]" />
                  <p className="text-[14px] font-light">
                    sajilodev557@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-[90%] sm:w-[45%] h-[65%] sm:h-full flex flex-col justify-around text-slate-500">
                <form
                  onSubmit={handleSubmit}
                  className="w-full h-full flex flex-col gap-6 "
                >
                  <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-6 sm:gap-3">
                    <div className="flex w-[90%] sm:w-[45%] flex-col gap-3">
                      <p className="text-[13px]">Your name</p>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b text-[13px] px-1 border-slate-400"
                      />
                    </div>
                    <div className="flex  w-[90%] sm:w-[45%] flex-col gap-3">
                      <p className="text-[13px]">Your Email</p>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b  text-[13px] px-1 border-slate-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[13px]">Subject</p>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b  text-[13px] p-1 border-slate-400"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[13px]">Message</p>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here"
                      className="w-full p-3 border-b  text-[13px] placeholder:text-[10px] border-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0766FF] text-serif text-white px-4  mx-auto font-serif text-[12px] py-2 rounded-full hover:bg-blue-700"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        <GettingSite />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
