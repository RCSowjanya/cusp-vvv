import React from "react";
import logo from "../../../src/Images/cusp-solar-logo.svg";
import { FaLink, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

const MagicLink1 = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-[#FFFCF6]">
      <div className="flex items-center justify-center h-screen  rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center bg-white h-auto w-[33rem] border border-gray-300 shadow-lg p-6 rounded-md ">
          <div className="">
            <img src={logo} className="w-28" alt="cusp-logo" />
          </div>
          <div className="flex gap-2 mt-6 pb-1">
            <FaLink size={20} className="text-[#FF5D5D] mt-1" />
            <p className="text-[#FF5D5D] text-[1.1rem] font-[600]">
              Link Expired
            </p>
          </div>
          <div className="text-[14px] text-[#121416] font-[400] text-center space-y-3 border-b border-b-gray-300">
            <p>
              It seems that the proposal link you clicked on has expired as it
              has been more than 7 days since it was issued.
            </p>
            <p>
              But don’t worry! We’re here to help you find the best solar
              installation solution. Please reach out to our customer support
              team at 8448499133 for assistance. We’ll be happy to provide you
              with updated proposals and guide you through the next steps.{" "}
            </p>
            <p className="pb-8">
              Thank you for considering our services. We look forward to helping
              you with your solar installation needs!
            </p>
          </div>
          <div className="text-center pt-4 text-[#172B4D] font-[500]">
            <p className="text-[12px]">
              Phone: +91 84484 99133{" "}
              <span className="ml-3">email: support@cuspsolar.com</span>
            </p>
            <p className="text-[12px] mt-1"> www.cuspsolar.com</p>
            <div className="flex gap-3 justify-center mt-4">
              <div className="p-2  border-2 border-[#9A9EA6]  rounded-full">
                <a
                  href="https://www.facebook.com/cuspsolar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={16} className="text-[#9A9EA6]" />
                </a>
              </div>
              <div className="p-2  border-2 border-[#9A9EA6]  rounded-full">
                <a
                  href="https://www.linkedin.com/company/cuspsolar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={16} className="text-[#9A9EA6]" />
                </a>
              </div>
              <div className="p-2  border-2 border-[#9A9EA6]  rounded-full">
                <a
                  href="https://www.youtube.com/@CuspSolar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={16} className="text-[#9A9EA6]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLink1;
