import React from "react";
import { FaRegUser } from "react-icons/fa";
const GetQuoteEditable = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-[4%] bg-gray-100 max-[1100px]:py-[2%] max-[1000px]:px-[3%]">
      <div className="flex flex-col w-full max-w-[50rem]">
        {/* Name Input */}
        <div className="mb-3 relative pb-2">
          <label
            htmlFor="name"
            className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
          >
            Your Name
          </label>
          <div className="flex items-center w-full border quote border-[#CDC4B1] bg-[#FFFDF9] rounded-md ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="px-2 py-5 text-[14px] max-[600px]:text-[12px] font-[400] w-full rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
        </div>

        {/* Mobile Number and Email Inputs */}
        <div className="flex gap-5 max-[1000px]:gap-2 mb-3 max-[1000px]:flex-col w-full max-[1000px]:space-y-4">
          <div className="w-full relative ">
            <label
              htmlFor="phone"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Mobile Number
            </label>
            <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter Mobile Number"
                className="w-full px-2 py-5 text-[14px] max-[600px]:text-[12px] font-[400] rounded-md shadow-lg placeholder-[#8A6112] outline-none focus:outline-none"
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>
          <div className="w-full relative mb-3">
            <label
              htmlFor="email"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Email
            </label>
            <div className="flex items-center  border border-[#CDC4B1] w-full rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full px-2 py-5 text-[14px] max-[600px]:text-[12px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>
        </div>

        {/* Address Inputs */}
        <div className="flex gap-3  mb-3 w-full max-[1000px]:flex-col items-center max-[1000px]:space-y-4">
          <div className="w-full relative">
            <label
              htmlFor="houseNumber"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px] max-[1000px]:mt-2"
            >
              House Number
            </label>
            <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="text"
                name="houseNumber"
                className="w-full px-2 py-5 font-[400] rounded-md text-[14px] shadow-lg placeholder-[#8A6112] outline-none"
                placeholder="Enter House No..."
                required
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>

          <div className="w-full relative mb-3">
            <label
              htmlFor="street"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Street
            </label>
            <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="text"
                name="street"
                className="w-full px-2 py-5 font-[400] text-[14px] rounded-md shadow-lg placeholder-[#8A6112] outline-none"
                placeholder="Street"
                required
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>
        </div>

        {/* State and District Inputs */}
        <div className="flex gap-5 max-[1000px]:gap-0  mb-3 w-full max-[1000px]:flex-col max-[1000px]:space-y-4">
          <div className="w-full relative">
            <label
              htmlFor="state"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px] max-[1000px]:mt-2"
            >
              State
            </label>
            <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <select
                name="state"
                className="w-full px-2 py-4 font-[400] text-[14px] outline-none rounded-md shadow-lg bg-[#FFFDF9] placeholder-[#8A6112] text-[#8A6112]"
                required
              >
                <option value="" disabled>
                  Select State
                </option>
              </select>
            </div>
            <p className="text-red-500 text-sm pl-4 absolute"></p>
          </div>

          <div className="w-full relative mb-3">
            <label
              htmlFor="district"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              District
            </label>
            <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <select
                name="district"
                className="w-full px-2 py-4 font-[400] text-[14px] outline-none rounded-md shadow-lg bg-[#FFFDF9] placeholder-[#8A6112] text-[#8A6112]"
                required
              >
                <option value="" disabled>
                  Select District
                </option>
              </select>
            </div>
            <p className="text-red-500 text-sm pl-4 absolute"></p>
          </div>
        </div>

        {/* City and Pin Code Inputs */}
        <div className="flex gap-5 max-[1000px]:gap-2 mb-3 w-full max-[1000px]:flex-col  max-[1000px]:space-y-4">
          <div className="w-full relative">
            <label
              htmlFor="city/town"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px] max-[1000px]:mt-2"
            >
              City/Town
            </label>
            <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="text"
                name="city"
                className="w-full px-2 py-4 font-[400] rounded-md text-[14px] shadow-lg placeholder-[#8A6112] outline-none"
                placeholder="City/Town"
                required
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>

          <div className="w-full relative mb-3">
            <label
              htmlFor="pinCode"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Pincode
            </label>
            <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="pinCode"
                className="w-full px-2 py-4 font-[400] text-[14px] outline-none rounded-md shadow-lg placeholder-[#8A6112]"
                placeholder="PinCode"
                required
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 absolute"></p>
          </div>
        </div>
        <div className="flex gap-3 mb-3 max-[1000px]:flex-col max-[1000px]:space-y-2">
          <div className="w-full relative mb-3">
            <label
              htmlFor="length"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px] max-[1000px]:mt-2"
            >
              Length
            </label>
            <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="length"
                placeholder="Enter Length"
                className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none border-none"
              />
            </div>

            <p className="text-red-500 text-sm mt-1 absolute"></p>
          </div>

          {/* Breadth Input */}
          <div className="w-full relative">
            <label
              htmlFor="breadth"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Breadth
            </label>
            <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="breadth"
                placeholder="Enter Breadth"
                className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
              />
            </div>

            <p className="text-red-500 text-sm mt-1 absolute"></p>
          </div>

          {/* Area Input */}
          <div className="w-full relative">
            <label
              htmlFor="area"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px]"
            >
              Area
            </label>
            <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="sft"
                disabled
                placeholder="Enter Area"
                className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
              />
            </div>
            <p className="text-red-500 text-sm mt-1 absolute"></p>
          </div>
        </div>
        <div className="flex gap-3 mb-3 max-[1000px]:flex-col max-[1000px]:space-y-4">
          <div className="w-full max-[1000px]:w-full mx-auto">
            <label
              htmlFor="capacity"
              className="block text-[#004A9C] font-semibold mb-1 text-[14px] max-[1000px]:mt-2"
            >
              Capacity
            </label>
            <div className="flex items-center w-full border border-[#CDC4B1] bg-[#FFFDF9] quote rounded-md ">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="capacity"
                placeholder="Enter Values in kW"
                className="px-4 py-5 text-[16px]  cursor-pointer font-[400] pl-3 rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
              />
            </div>
            <p className="text-red-500 text-sm mt-1 pl-4 "></p>
          </div>
          <div className="w-[70%]"></div>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteEditable;
