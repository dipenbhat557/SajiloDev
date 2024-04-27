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
      <img
        src={heroBg}
        alt="heroBg"
        className="w-[90%] h-[90%] mt-4 object-cover"
      />
      <div
        style={clipPathStyle}
        className={`w-[23%] h-[80%] top-0 left-28 absolute z-30`}
        onClick={() => (window.location.href = currentImages?.[0]?.link)}
      >
        <img
          src={currentImages?.[0]?.img}
          alt={`image`}
          className="w-full h-full object-cover "
        />
      </div>
      <div
        style={clipPathStyle}
        className={`w-[25%] h-[70%] top-10 left-1/3 absolute z-30`}
        onClick={() => (window.location.href = currentImages?.[1]?.link)}
      >
        <img
          src={currentImages?.[1]?.img}
          alt={`image`}
          className="w-full h-full object-cover "
        />
      </div>
      <div
        style={clipPathStyle}
        className={`w-[20%] h-[50%] top-14 left-2/3 absolute z-30`}
        onClick={() => (window.location.href = currentImages?.[2]?.link)}
      >
        <img
          src={currentImages?.[2]?.img}
          alt={`image`}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default ImageSlider;
