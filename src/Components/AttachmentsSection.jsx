import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const AttachmentsSection = ({ formData, changeHandle, errors }) => {
  const [imagePreviews, setImagePreviews] = useState(formData.image || []);
  const [billPreviews, setBillPreviews] = useState(
    formData.electricityBill || []
  );
  const [roofLayoutPreview, setRoofLayoutPreview] = useState(
    formData.roofLayout?.type === "application/pdf"
      ? "pdf"
      : formData.roofLayout
        ? URL.createObjectURL(formData.roofLayout)
        : null
  );
  const [gstPreview, setGstPreview] = useState(
    formData.gstCertificate?.type === "application/pdf"
      ? "pdf"
      : formData.gstCertificate
        ? URL.createObjectURL(formData.gstCertificate)
        : null
  );
  const [videoPreview, setVideoPreview] = useState(
    formData.video ? URL.createObjectURL(formData.video) : null
  );
  const [identityProofPreview, setIdentityProofPreview] = useState(
    formData.identityProof?.type === "application/pdf"
      ? "pdf"
      : formData.identityProof
        ? URL.createObjectURL(formData.identityProof)
        : null
  );

  const handleFileChange = (e, fileType, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      changeHandle(e, fileType); // Update formData

      if (file.type.includes("image")) {
        setPreview(URL.createObjectURL(file));
      } else if (file.type.includes("pdf")) {
        setPreview("pdf"); // Set a flag for PDF type
      } else if (file.type.includes("video")) {
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreviews.length <= 5) {
      changeHandle(e, "image"); // Update formData
      setImagePreviews([...imagePreviews, ...files]);
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };

  const handleBillChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + billPreviews.length <= 3) {
      changeHandle(e, "electricityBill"); // Update formData
      setBillPreviews([...billPreviews, ...files]);
    } else {
      alert("You can upload a maximum of 3 files.");
    }
  };

  const handleRemoveFile = (index, type) => {
    if (type === "image") {
      const newFiles = imagePreviews.filter((_, i) => i !== index);
      setImagePreviews(newFiles);
      changeHandle({ target: { name: "image", files: newFiles } }, "image");

      if (newFiles.length === 0) {
        changeHandle({ target: { name: "image", value: [] } }, "image");
      }
    } else if (type === "electricityBill") {
      const newFiles = billPreviews.filter((_, i) => i !== index);
      setBillPreviews(newFiles);
      changeHandle(
        { target: { name: "electricityBill", files: newFiles } },
        "electricityBill"
      );

      if (newFiles.length === 0) {
        changeHandle(
          { target: { name: "electricityBill", value: [] } },
          "electricityBill"
        );
      }
    }
  };

  const renderErrorMessages = (errors, fieldName) => {
    if (Array.isArray(errors[fieldName])) {
      return errors[fieldName].map((error, index) => (
        error ? (
          <p key={index} className="text-red-500 text-sm mt-1 pl-4">
            {error}
          </p>
        ) : null
      ));
    } else if (typeof errors[fieldName] === "string") {
      return (
        <p className="text-red-500 text-sm mt-1 pl-4">
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>

      {/* Roof Layout Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1000px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Roof Layout
            </label>
            <p className="text-[12px] text-center pt-3 my-2">
              Please upload in PNG, JPEG, JPG, Max file size should be 2 MB.
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          <input
            type="file"
            id="roofLayout-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "roofLayout", setRoofLayoutPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {roofLayoutPreview && (
            <div className="mt-4 flex justify-center">
              {roofLayoutPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={roofLayoutPreview}
                  className="w-10 h-10 object-cover rounded-md shadow-md"
                  alt="Roof Layout Preview"
                />
              )}
            </div>
          )}
          {renderErrorMessages(errors, "roofLayout")}
        </div>
      </div>

      {/* Video Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Site Video Upload
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload only .mp4, .avi file formats, Max file size should
              be 200 MB.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="video-upload"
            accept="video/mp4, video/avi"
            onChange={(e) => handleFileChange(e, "video", setVideoPreview)}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {videoPreview && (
            <div className="mt-4 flex justify-center">
              <video
                src={videoPreview}
                className="w-10 h-10 object-cover rounded-md shadow-md"
                controls
              />
            </div>
          )}
          {renderErrorMessages(errors, "video")}
        </div>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Upload Site Images
            </label>
            <p className="text-[12px] my-2 text-center">
              You can upload up to 5 images. Max file size should be 2MB each.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image-upload"
            accept="image/jpeg, image/png"
            multiple
            onChange={handleImageChange}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {imagePreviews.length > 0 &&
              imagePreviews.map((file, index) => (
                <div key={index} className="relative m-2">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Image Preview ${index + 1}`}
                    className="w-10 h-10 object-cover rounded-md shadow-md"
                  />
                  <button
                    type="button"
                    className="absolute cursor-pointer top-[-6px] right-[-5px] p-1 rounded-full"
                    onClick={() => handleRemoveFile(index, "image")}
                  >
                    <IoMdClose
                      size={14}
                      className="bg-red-500 text-white rounded-full"
                    />
                  </button>
                </div>
              ))}
          </div>
          {renderErrorMessages(errors, "image")}
        </div>
      </div>

      {/* Electricity Bill Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Electricity Bill
            </label>
            <p className="text-[12px] my-2 text-center">
              You can upload up to 3 files. Acceptable formats: PNG, JPG, PDF.
              Max file size should be 5MB each.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="bill-upload"
            accept="image/jpeg, image/png, application/pdf"
            multiple
            onChange={handleBillChange}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {billPreviews.length > 0 &&
              billPreviews.map((file, index) => (
                <div key={index} className="relative m-2">
                  {file.name.includes("pdf") ? (
                    <FaFilePdf size={48} className="text-red-500" />
                  ) : (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Bill Preview ${index + 1}`}
                      className="w-10 h-10 object-cover rounded-md shadow-md"
                    />
                  )}
                  <button
                    type="button"
                    className="absolute cursor-pointer top-[-6px] right-[-5px] p-1 rounded-full"
                    onClick={() => handleRemoveFile(index, "electricityBill")}
                  >
                    <IoMdClose
                      size={14}
                      className="bg-red-500 text-white rounded-full"
                    />
                  </button>
                </div>
              ))}
          </div>
          {renderErrorMessages(errors, "electricityBill")}
        </div>
      </div>

      {/* GST Certificate Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              GST Certificate
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload in PNG, JPEG, JPG, PDF formats. Max file size should
              be 2 MB.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="gst-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "gstCertificate", setGstPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {gstPreview && (
            <div className="mt-4 flex justify-center">
              {gstPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={gstPreview}
                  alt="GST Certificate Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {renderErrorMessages(errors, "gstCertificate")}
        </div>
      </div>

      {/* Identity Proof Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Identity Proof
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload in PNG, JPEG, JPG, PDF formats. Max file size should
              be 2 MB.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="identity-proof-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "identityProof", setIdentityProofPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {identityProofPreview && (
            <div className="mt-4 flex justify-center">
              {identityProofPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={identityProofPreview}
                  alt="Identity Proof Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {renderErrorMessages(errors, "identityProof")}
        </div>
      </div>
    </div>
  );
};

export default AttachmentsSection;
