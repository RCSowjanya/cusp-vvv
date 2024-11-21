import React from "react";
import logo from "../../../src/Images/cusp-solar-logo.svg";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

const MagicLink2 = () => {
  return (
    <div className="bg-[#FFFCF6]">
      <div className="flex items-center justify-center h-screen  rounded-lg shadow-lg">
        <div className="flex flex-col justify-center bg-white items-center h-auto w-[33rem] border border-gray-300 shadow-lg p-6 rounded-md ">
          <div className="">
            <img src={logo} className="w-28" alt="cusp-logo" />
          </div>
          <div className="mt-6 pb-2 text-center">
            <p className="text-[#415CD2] text-[14px] font-[600]">
              It looks like you've already selected a proposal for this
              quotation. Thank you for your decision!
            </p>
          </div>
          <div className="text-[14px] text-[#121416] font-[400]  space-y-3 border-b border-b-gray-300">
            <p>
              We’ll be connecting you soon with the chosen installer to finalize
              the details, arrange a site visit, and commence the project.
            </p>
            <p>
              If you need any further assistance or wish to discuss your
              selection, feel free to reach out to our customer support team at
              8448499133. We're here to help and ensure your solar installation
              process goes smoothly.
            </p>
            <p className="pb-8">
              {" "}
              Thank you for trusting us with your solar needs. We look forward
              to working with you!
            </p>
          </div>
          <div className="text-center pt-4 font-[500] text-[#172B4D]">
            <p className="text-[12px]">
              Phone: +91 84484 99133{" "}
              <span className="ml-3">email: support@cuspsolar.com</span>
            </p>
            <p className="text-[12px] mt-1">www.cuspsolar.com</p>
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

export default MagicLink2;
