import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/cusp-solar-logo.svg";
const LandingPageContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bill: "",
    city: "",
    message: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear the error as user types
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.requirement)
      newErrors.requirement = "Requirement is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.bill.trim()) newErrors.bill = "Electricity bill is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          bill: "",
          city: "",
          message: "",
          requirement: "",
        });
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to the server.");
    }
  };

  return (
    <div>
      <div className="bg-black bg-opacity-75 shadow-lg rounded-lg p-6 lg:p-8 lg:mt-[-12rem] max-[1000px]:mt-[-7rem]">
        {isSubmitted ? (
          <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-600">
              <div className="text-center text-white ">
                {/* Logo */}
                <div className="mb-6">
                  <img
                    src={logo}
                    alt="cusp-Logo"
                    className="mx-auto h-20 w-auto"
                  />
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
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center text-white">
              Get In Touch
            </h2>
            {/* Requirement Dropdown */}
            <div className="relative">
              <label
                htmlFor="requirement"
                className="block text-[12px] font-medium text-white mb-2"
              >
                Select Your Requirement <span className="text-red-500">*</span>
              </label>
              <select
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.requirement ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white`}
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
              {errors.requirement && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.requirement}
                </p>
              )}
            </div>
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
              />
              <span className="absolute top-1/2  right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.name && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.name}
                </p>
              )}
            </div>
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
              />
              <span className="absolute top-1/2   right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.email && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.email}
                </p>
              )}
            </div>
            {/* Phone Field */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
              />
              <span className="absolute top-1/2   right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.phone && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.phone}
                </p>
              )}
            </div>
            {/* Electricity Bill Field */}
            <div className="relative">
              <input
                type="number"
                name="bill"
                placeholder="Your Electricity Bill"
                value={formData.bill}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.bill ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
              />
              <span className="absolute top-1/2   right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.bill && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.bill}
                </p>
              )}
            </div>
            {/* City Field */}
            <div className="relative">
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formData.city}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
              />
              <span className="absolute top-1/2   right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.city && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.city}
                </p>
              )}
            </div>
            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } text-gray-700 bg-white placeholder-gray-500`}
                rows="4"
              />
              <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500">
                *
              </span>
              {errors.message && (
                <p className="text-red-500 text-[12px] absolute">
                  {errors.message}
                </p>
              )}
            </div>
            {/* Submit Button */}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2  rounded-lg hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingPageContact;
