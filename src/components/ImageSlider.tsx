import { useState, useEffect } from "react";
import { images } from "../constants";
import { heroBg } from "../assets";

interface Images {
  img: string;
  link: string;
}

const ImageSlider = () => {
  const clipPathStyle = {
    clipPath:
      "polygon(0% 15%, 20% 23%, 36% 29%, 52% 32%, 72% 35%, 100% 36%, 100% 84%, 74% 86%, 52% 87%, 37% 89%, 20% 93%, 0 100%)",
  };

  const [currentImages, setCurrentImages] = useState<Images[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentImages = () => {
    const startIndex = currentIndex % images.length;
    const endIndex = (startIndex + 3) % images.length;
    const updatedImages =
      endIndex > startIndex
        ? images?.slice(startIndex, endIndex)
        : images.slice(startIndex).concat(images.slice(0, endIndex));
    setCurrentImages(updatedImages);
  };

  useEffect(() => {
    updateCurrentImages();

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      updateCurrentImages();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images, 3000]);

  return (
    <div className="w-auto h-[550px] relative ">
      <img src={heroBg} alt="heroBg" className="w-[90%] h-[90%] object-cover" />
      <div
        style={clipPathStyle}
        className=" flex w-[76%] h-[70%] absolute z-30 justify-around top-10 left-24 items-center"
      >
        {currentImages.map((item, index) => (
          <div
            key={index}
            className={`w-[33.33%] h-[90%]`}
            onClick={() => (window.location.href = item?.link)}
          >
            <img
              src={item?.img}
              alt={`image_${index}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
