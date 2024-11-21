import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";

const PartnerEditable = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      mobile: "",
      email: "",
    };

    // Mobile number validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid:", formData);
    } else {
      console.log("Form is invalid");
    }
  };
  return (
    <div>
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] px-[4%] items-center max-w-full overflow-hidden">
        <div className="px-[3%] bg-white shadow-lg max-w-3xl w-full mx-auto py-[2%] max-[1000px]:px-[2%] max-[600px]:px-4">
          <h2 className="text-[24px] font-semibold text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-1"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 p-2 text-[16px] block w-full placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="mobile_number"
                className="block font-[600] text-[14px] text-[#004A9C] pt-1"
              >
                Mobile Number <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="mobile"
                type="number" // Use "tel" for better mobile number input handling
                placeholder="Mobile Number"
                className="ad mt-1 p-2 text-[16px] block w-full placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
                maxLength="10" // Restricts input to 10 digits
              />

              <p className="text-red-500 text-[12px] absolute"></p>
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block font-[600] text-[14px] text-[#004A9C] pt-1"
              >
                Email <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email ID"
                className="ad mt-1 p-2 text-[16px] block w-full placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />

              <p className="text-red-500 text-[12px] absolute"></p>
            </div>
            {/* Flex items for Entity Type and Total Entities */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="entity-type"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-1"
                >
                  Business Role <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-2  text-[16px] block w-full cursor-pointer placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="">Select Business Role</option>

                    <option value="1">Manufacturer</option>
                    <option value="3">Distributor</option>
                    <option value="2">Installers</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="total-entities"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-1"
                >
                  Type Of Entity
                  <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-2  text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="">Select Entity Type</option>
                    <option value="1">ProprietorShip</option>
                    <option value="2">Unregistered PartnerShip</option>
                    <option value="3">LLP</option>
                    <option value="4">Incorporated Entity</option>

                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Flex items for GST No, PAN No, TAN No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="solar-installations"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  Total Exp In Solar Installations
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solar-installations"
                  type="Number"
                  placeholder="Enter Total Years"
                  className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="gst-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-1"
                >
                  GST No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gst-no"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 p-2  block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Register Office Address */}
            <div>
              <label
                htmlFor="register-office-address"
                className="block text-[#004A9C]  text-[14px] ad font-[600] mb-1"
              >
                Registered Office Address
                <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="register-office-address"
                type="text"
                placeholder="Enter Building Name /Flat No"
                className="ad mt-1 p-2  block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            {/* Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1 relative pb-1">
                <input
                  id="street_name"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 p-2 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-[12px] absolute"></p>
              </div>
              <div className="flex-1 relative">
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 p-2 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-[12px] absolute"></p>
              </div>
            </div>

            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1 relative">
                <input
                  id="pin_code"
                  type="tel"
                  placeholder="Enter Pincode"
                  className="ad mt-1 p-2 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  maxLength="6"
                />

                <p className="text-red-500 text-[12px] absolute"></p>
              </div>
              <div className="flex-1 relative">
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 p-2 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />

                <p className="text-red-500 text-[12px] absolute"></p>
              </div>
            </div>
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-1"
              >
                Brands You Deal With <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Brand1, Brand2, Brand3"
                className="ad mt-1 p-2 text-[16px] block w-full placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="name_of_empanelled_electricity_board"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                States
                <span className="text-[#004A9C]">*</span>
              </label>
              <select
                id="empanelled-state"
                className="ad p-2 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                style={{ color: "#757575" }}
              >
                <option value="">Select State(s)</option>
                <option value="state1">Andhra pradesh</option>
                <option value="state4">Bihar</option>
                <option value="state4">Delhi</option>
                <option value="state4">Haryana</option>
                <option value="state4">Jharkhand</option>
                <option value="state4">Rajasthan</option>
                <option value="state4">Uttar Pradesh</option>
                <option value="state4">Telangana</option>

                {/* Add more options as needed */}
              </select>
              <div className="absolute inset-y-0 right-0 top-6 flex items-center px-2 pointer-events-none">
                <MdOutlineKeyboardArrowDown
                  size={24}
                  className="text-[#757575]"
                />
              </div>

              <p className="text-red-500 text-xs mt-1  absolute"></p>
            </div>
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-1"
              >
                Geographical Regions Of Operations
                <span className="text-[#004A9C]">*</span>
              </label>
              <div className="relative">
                <select
                  id="empanelled-state"
                  className="ad p-2 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">Select geographical regions</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <MdOutlineKeyboardArrowDown
                    size={24}
                    className="text-[#757575]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              {/* Empanelled with Capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-1"
                >
                  Total Employees
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total-employees"
                  type="Number"
                  placeholder="Enter Total Employees"
                  className="ad mt-1 p-2 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>

              {/*  Installation capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-1"
                >
                  Total Installation Crews Available
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="installations"
                  type="Number"
                  placeholder="Enter total Installation Crews"
                  className="ad mt-1 p-2 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/*---reference details----*/}
            <div className="w-full relative">
              <label
                htmlFor="reference_site_details"
                className="block font-[600] text-[14px] text-[#004A9C]"
              >
                Reference Site Details <span className="text-[#004A9C]">*</span>
              </label>
              <textarea
                id="reference_site_details"
                placeholder="Please mention about some of your key projects"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                maxLength={2000}
              />
              <p className="text-red-500 text-xs mt-1 mb-3 absolute"></p>
            </div>
            {/*--3rd one uploads---*/}
            {/*---GST Certificate----*/}
            <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1 w-full sm:w-auto sm:mr-4 mb-4 sm:mb-0">
                <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-6">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="gst-certificate"
                    className="block text-[14px] font-[400] text-gray-600 text-center"
                  >
                    GST Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1 w-full sm:w-auto">
                <input
                  type="file"
                  id="gst-certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  className="block w-full sm:w-auto text-sm text-[#757575] border border-[#CECECE] rounded-md shadow-sm p-2 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[12px] mt-2 text-center sm:text-left">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB.<span className="text-[#004A9C]">*</span>
            </p>

            <div className="flex justify-center items-center py-2">
              <button
                type="submit"
                className={`py-2 px-4 bg-[#0BB68D] text-white rounded-md
              
                `}
              >
                Submit
              </button>
            </div>
          </form>
          {/*---form---*/}
        </div>
      </div>
      {/*---form close---*/}
    </div>
  );
};

export default PartnerEditable;
