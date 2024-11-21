import React, { useState } from "react";
import ThankyouPage from "./ThankyouPage";
import cuspbg from "../Images/cusp-contact.webp";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowDown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  const [issubmit, setIssubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    isNotRobot: false,
    enquiryFor: "", // Add a state for the checkbox
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }
    if (!formData.enquiryFor.trim()) {
      formErrors.enquiryFor = "Enquiry for is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      formErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      formErrors.phone =
        "Mobile number must start with 6, 7, 8, or 9 and be exactly 10 digits long";
    }

    // if (!formData.message.trim()) {
    //   formErrors.message = "Message is required";
    // }
    // Message field validation
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    } else if (formData.message.length > 2000) {
      formErrors.message = "Message cannot exceed 2000 characters";
    }
    // if (!formData.isNotRobot) {
    //   formErrors.isNotRobot =
    //     "Please check the box to confirm you are not a robot";
    // }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      try {
        setIssubmit(true);
        const payload = {
          enquiry_type: formData.enquiryFor.trim(),
          full_name: formData.fullName.trim(),
          subject: formData.subject.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          msg_details: formData.message.trim(),
        };
        console.log(payload);
        const response = await fetch(
          process.env.REACT_APP_API_URL + "admin/feedback",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Explicitly set the content type
            },
            body: JSON.stringify(payload), // Serialize payload to JSON
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response: ", result);

        // Show success toast message
        // toast.success("Enquiry for "+formData.enquiryFor+" is submitted successfully!");
        setTimeout(() => {
          navigate("/thankyoupage");
        }, 1000);

        // Handle success (e.g., redirect, show success message, etc.)
      } catch (error) {
        console.error("Error during form submission: ", error);

        // Show error toast message
        toast.error("Failed to submit the form. Please try again.");
        setIssubmit(false);
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          CUSP Solar Company Contact Information Reach Our CUSP Solar Team
        </title>
        <meta
          name="description"
          content="To Know About more information of CUSP Solar ? Contact us and get information now"
        />
      </Helmet>
      <div className="common-bg flex items-center ">
        <div className="bg-[rgba(13,13,13,0.5)] p-3 my-3 w-auto max-[1000px]:p-2">
          <h2 className="text-[2rem] max-[1000px]:text-[2rem] text-white font-bold rounded-md ">
            Get in touch with us
          </h2>
          <p className="text-[1.2rem] font-[400] leading-[30px] mt-1 text-white max-[1000px]:text-[14px] max-[1000px]:leading-[20px]">
            Empowering communities with
            <span className="text-[#ffac09] font-[700] pl-1">
              Sustainable <br /> Solar Solutions.
            </span>
          </p>
        </div>
      </div>

      {/*--form---*/}
      <div className="p-[5%] drop-shadow-2xl bg-white">
        <div className="flex items-center justify-center h-full max-[1100px]:flex-col">
          <div className="w-1/2 h-full max-[1100px]:w-full">
            <img
              src={cuspbg}
              className="w-full h-full object-cover"
              alt="cuspbg"
            />
          </div>
          <div className="w-1/2 h-full max-[1100px]:w-full">
            <div className="max-w-4xl mx-auto p-5">
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Full Name <span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="relative w-full">
                  <label
                    htmlFor="enquiryFor"
                    className="block text-sm font-medium text-[#A45D17]"
                  >
                    Enquiry for <span className="text-[#A45D17]">*</span>
                  </label>

                  {/* Dropdown Select Field */}
                  <select
                    id="enquiryFor"
                    name="enquiryFor"
                    value={formData.enquiryFor}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#A45D17] sm:text-sm text-[#8E6034] appearance-none pr-10" // added pr-10 for padding space for the icon
                  >
                    <option value="">Select an enquiry option</option>
                    <option value="RFQ">Request for Quotation</option>
                    <option value="GE">General Enquiry</option>
                  </select>

                  {/* Dropdown Icon */}
                  <div className="absolute inset-y-0 right-3 top-6 flex items-center pointer-events-none">
                    <IoIosArrowDown size={20} className="text-[#757575]" />
                  </div>
                  {errors.enquiryFor && (
                    <p className="text-red-500 text-sm">{errors.enquiryFor}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Subject<span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block w-full text-[16px] font-[500] text-[#A45D17] ad"
                    >
                      Email<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block w-full text-[16px] font-[500] text-[#A45D17]"
                    >
                      Phone<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#A45D17]"
                  >
                    Message<span className="text-[#A45D17]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="4"
                    maxLength="2000"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                {/* <div>
                  <label
                    htmlFor="isNotRobot"
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="isNotRobot"
                      name="isNotRobot"
                      checked={formData.isNotRobot}
                      onChange={handleChange}
                      className="form-checkbox w-6 h-6 custom-checkbox"
                    />
                    <span className="ml-2 text-[#A45D17] ">
                      I'm not a robot
                    </span>
                  </label>
                  {errors.isNotRobot && (
                    <p className="text-red-500 text-sm">{errors.isNotRobot}</p>
                  )}
                </div> */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={issubmit}
                    className="inline-flex justify-center mt-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#A45D17] shadow-sm hover:bg-[#6B4D28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A45D17]"
                  >
                    {issubmit ? "Please Wait..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
