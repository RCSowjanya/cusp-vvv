import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";

const TotalAreaRoof = ({ formData, handleChange, errors }) => {
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (formData.roofLayout) {
      // If roofLayout exists in formData, create a preview
      const filePreview = URL.createObjectURL(formData.roofLayout);
      setPreview(filePreview);
    }
  }, [formData.roofLayout]); // Only run when formData.roofLayout changes

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update formData with the file
      handleChange({ target: { name: "roofLayout", value: file } });

      // Generate a preview URL for the uploaded image
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="pb-3">
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Total Roof Area (in sq.ft.)
      </h2>
      <div className="flex gap-3 mb-3 max-[1000px]:flex-col max-[1000px]:space-y-4">
        {/* Length Input */}
        <div className="w-full relative">
          <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="lengthl"
              value={formData.lengthl}
              onChange={(e) => {
                // Prevent negative values
                if (e.target.value >= 0) {
                  handleChange(e); // Call the existing handleChange function only for non-negative values
                }
              }}
              placeholder="Enter Length"
              className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none border-none"
            />
          </div>
          {errors.lengthl && (
            <p className="text-red-500 text-sm mt-1 absolute">
              {errors.lengthl}
            </p>
          )}
        </div>

        {/* Breadth Input */}
        <div className="w-full relative">
          <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="breadth"
              value={formData.breadth}
              onChange={(e) => {
                // Prevent negative values
                if (e.target.value >= 0) {
                  handleChange(e); // Call the existing handleChange function only for non-negative values
                }
              }}
              placeholder="Enter Breadth"
              className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
            />
          </div>
          {errors.breadth && (
            <p className="text-red-500 text-sm mt-1 absolute">
              {errors.breadth}
            </p>
          )}
        </div>

        {/* Area Input */}
        <div className="w-full relative">
          <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="sft"
              value={formData.sft}
              disabled
              onChange={(e) => {
                // Prevent negative values
                if (e.target.value >= 0) {
                  handleChange(e); // Call the existing handleChange function only for non-negative values
                }
              }}
              placeholder="Enter Area"
              className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
            />
          </div>
          {errors.sft && (
            <p className="text-red-500 text-sm mt-1 absolute">{errors.sft}</p>
          )}
        </div>
      </div>

      {/* Roof Layout */}
      <div>
        <h2 className="text-[#004A9C] font-[600] pt-11 text-[16px] text-center pb-6">
          Roof Layout
        </h2>
        <div className="flex flex-col min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
          <div className="flex-1">
            <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
              <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
              <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
                Roof Layout
              </label>
              <p className="text-[12px] text-center my-2">
                Please upload only in .png, .jpeg, or .jpg format. Max file size
                should be 2MB.
                <span className="text-[#004A9C]">*</span>.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <input
              type="file"
              id="roofLayout-upload"
              accept="image/jpeg, image/png,application/pdf"
              onChange={handleFileChange}
              className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
            />
            {preview && (
              <img
                src={preview}
                alt="Roof Layout Preview"
                className="mt-4 w-10 h-auto rounded-md mx-auto"
              />
            )}

            {errors.roofLayout && (
              <p className="text-red-500 text-sm mt-1 text-center py-3">
                {errors.roofLayout}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalAreaRoof;
