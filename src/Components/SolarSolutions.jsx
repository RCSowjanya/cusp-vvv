import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import solution1 from "../Images/solution-1.png";
import solution2 from "../Images/solution-2.png";

const SolarSolutions = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/cH3OzF4IzqY?si=7nvSMw5XnGLKCUxw"
  );
  const [isHindi, setIsHindi] = useState(false); // Track the toggle state for language

  // Handle video toggle between Hindi and English
  const handleVideoToggle = () => {
    setIsHindi(!isHindi); // Toggle the state between Hindi and English
    if (!isHindi) {
      setVideoUrl(
        "https://www.youtube.com/embed/7KyvCS0bvRU?si=UM9gGdQy4fI4x1cM"
      ); // Replace with actual Hindi video URL
    } else {
      setVideoUrl(
        "https://www.youtube.com/embed/cH3OzF4IzqY?si=7nvSMw5XnGLKCUxw"
      );
    }
  };

  return (
    <div className="bg-[#28BB7C] py-[5%] px-[3%]">
      <div className="flex max-[1000px]:flex-col gap-3 h-full">
        <div className="w-1/2 max-[1000px]:w-full flex flex-col justify-center text-white">
          <h3 className="text-[24px] font-[700] inter">About us</h3>
          <h2 className="text-[34px] font-[600] ad mb-[1%]">
            "Simplifying Solar Solutions"
          </h2>
          <p className="text-[16px] leading-[22.4px] font-[400] mr-[14%] max-[1000px]:mr-0">
            CUSP aims to accelerate the adoption of renewable energy,
            particularly solar power, in India. We recognize the urgent need to
            shift to sustainable energy to combat climate change. However, the
            fragmented market makes it challenging for users to find reliable
            providers and for providers to reach their audience.
          </p>
          <a href="/about">
            <button className="py-2 px-4 bg-[#4348BD] mt-6 text-white rounded-lg font-[700] text-[16px] transition duration-300 flex items-center">
              Read Now <FaArrowRight className="ml-2 text-white" />
            </button>
          </a>
        </div>
        {/*----first column close---*/}
        {/*---second column ---*/}
        <div className="w-1/2 max-[1000px]:w-full flex gap-3 ">
          <div className="w-full h-auto">
            {/* Toggle Button */}
            <div className="flex justify-center mb-4 items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isHindi}
                  onChange={handleVideoToggle}
                />
                <div
                  className={`w-14 h-7 ${
                    isHindi ? "bg-gray-400" : "bg-[#4348BD]"
                  } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all`}
                ></div>
                <span
                  className="ml-3 font-medium"
                  style={{
                    color: isHindi ? "#6B7280" : "#FFFFFF", // Change font color based on language
                    fontSize: "1.1rem", // 1rem font size
                  }}
                >
                  {isHindi ? "Hindi" : "English"}
                </span>
              </label>
            </div>

            {/* Embedded Video */}
            <iframe
              width="100%" // Using percentage to make it responsive
              height="100%" // Using percentage to make it responsive
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[400px] max-[1000px]:h-[300px] max-[1000px]:mt-4 rounded-3xl"
            ></iframe>
          </div>
        </div>
        {/*---second column close---*/}
      </div>
    </div>
  );
};

export default SolarSolutions;
