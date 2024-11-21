import React from "react";
import logo from "../Images/cusp-solar-logo.svg";
const MoreDetail = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-600">
          <div className="text-center text-white ">
            {/* Logo */}
            <div className="mb-6">
              <img src={logo} alt="cusp-Logo" className="mx-auto h-20 w-auto" />
            </div>
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
            {/* Message */}
            <p className="text-lg mb-6">
              Your form has been submitted successfully.
            </p>
            {/* Go Back Button */}
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800"
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
