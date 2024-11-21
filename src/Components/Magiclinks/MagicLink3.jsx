import React, { useEffect, useState } from "react";
import logo from "../../../src/Images/cusp-solar-logo.svg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

const MagicLink3 = ({ data, reference }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isloading, setIsloading] = useState(false);
  // const [reference, setReference] = useState(null)
  const [remarks, setRemarks] = useState("");
  // const [data, setData] = useState([])
  const location = useLocation();

  const handleConfirmClick = () => {
    if (remarks.length === 0) {
      toast.error("Remarks is required...");
      return;
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  // useEffect(() => {
  //   // Create a URLSearchParams object from the location search string
  //   const queryParams = new URLSearchParams(location.search);
  //   const referenceParam = queryParams.get("referrer"); // Get the 'reference' parameter
  //   setReference(referenceParam ? parseInt(referenceParam) : 0); // Set the reference in the state
  // }, [location.search]);
  const handleFinalSubmit = async () => {
    setIsloading(true);
    try {
      const payload = {
        reference: reference,
        customer_remarks: remarks,
      };
      console.log(payload);
      const response = await fetch(
        process.env.REACT_APP_API_URL + "customer/customerRemrks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
        toast.success(result.msg);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
    }

    setTimeout(() => {
      setModalOpen(false);
      setIsloading(false);
      window.location.href = "https://cuspsolar.com";
    }, 2000);
  };
  // useEffect(() => {
  //   const getData = async (referrer) => {
  //     try {
  //       console.log(process.env.REACT_APP_API_URL + "customer/getMagicLinkDetails");

  //       const response = await fetch(
  //         process.env.REACT_APP_API_URL + "customer/getMagicLinkDetails",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json", // Set the correct Content-Type header
  //           },
  //           body: JSON.stringify({
  //             reference: referrer, // Sending reference as JSON
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       console.log(result);
  //       console.log(result.data)
  //       setData(result.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setData([]);
  //     }
  //   };

  //   if (reference !== 0) {
  //     getData(reference); // Pass the referrer to getData
  //   }
  // }, [reference]);

  return (
    <div className="bg-[#FFFCF6]">
      <div className="flex items-center py-5 justify-center min-h-screen overflow-y-scroll  rounded-lg shadow-lg">
        <div className="w-[43rem] border bg-white border-gray-300 shadow-lg py-6 px-8 rounded-lg ">
          <div className="text-center">
            <img src={logo} className="w-28 mx-auto" alt="cusp-logo" />
          </div>
          <div className="mt-6 pb-2 text-center">
            <p className="text-[#415CD2] text-[14px] font-[600]">
              Select Your Preferred Solar Installation Proposal
            </p>
          </div>
          <div className="font-[400]">
            <p className="text-[14px] mb-2">
              Installer ID:{" "}
              <span className="font-[500]">
                #{data?.installer_id || "Loading..."}
              </span>
            </p>
            <p className="text-[14px] font-[500]">Project Details : </p>
            <p className="flex text-[14px] pl-2">
              -Total Project Cost(Excl.Tax):{" "}
              <span className="flex">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                Rs. {data?.tot_project_cost_exc_tax || "Loading..."}/-
              </span>
            </p>
            <p className="flex text-[14px] pl-2 my-1">
              -Total Tax :
              <span className="flex pl-[7.5rem]">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                Rs.{" "}
                {data?.total_project_cost - data?.tot_project_cost_exc_tax ||
                  "Loading"}
                /-
              </span>
            </p>
            <p className="flex text-[14px] pl-2">
              -Total Project Cost(Incl.Tax):{" "}
              <span className="flex">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                Rs. {data?.total_project_cost || "Loading"}/-
              </span>
            </p>
            <p className="text-[#0C66E4] text-[1rem] font-[500] my-1">
              Delivery Period in {parseInt(data?.delivery_period) || "Loading"}{" "}
              days
            </p>
          </div>
          <div className="">
            <p className="text-center text-[14px] mb-2">
              Review and conform Your selection
            </p>
            <p className="text-[14px] mb-2">
              Please review the details above carefully. If you have any
              questions, need further clarification, please use the input field
              below.
            </p>
          </div>
          <div className="">
            <p className="text-[14px] mb-1">Your Queries</p>
            <textarea
              className="border border-[#9699E8] w-full p-2 rounded-md"
              placeholder="Enter Text"
              rows="3"
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <p className="text-[14px] my-2">
              When you are ready to proceed, click the button below to confirm
              your choice. Please note that once confirmed, your decision is
              final and cannot be reversed.
            </p>
            <div className="text-center border-b border-b-gray-300 pb-5">
              <button
                className="bg-[#0BB68D] text-white px-6 py-2 rounded-lg"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl w-[33rem] max-[600px]:mx-2 shadow-lg relative">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center bg-[#D4DCFF] text-white p-4 rounded-t-lg">
                      <h2 className="text-lg font-semibold text-[#004A9C]">
                        Confirm
                      </h2>
                      <button onClick={handleCloseModal} className="text-black">
                        <MdClose size={20} />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 text-center text-[1rem] text-[#121416] font-[400] border-b border-gray-300">
                      <p>
                        Are you sure you want to confirm your selection of
                        Installer ID #{data.installer_id} with a total project
                        cost of ₹{data.total_project_cost}?
                      </p>
                    </div>

                    {/* Modal Footer with Buttons */}
                    <div className="flex justify-end p-4 space-x-3 mr-3">
                      <button
                        onClick={handleCloseModal}
                        className="bg-[#FF2F004D] text-[#8D331F] px-8 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        disabled={isloading}
                        className="bg-[#0BB68D] text-white px-8 py-2 rounded-lg "
                        onClick={handleFinalSubmit}
                      >
                        {isloading ? "Submit" : "Please Wait"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="text-center pt-4 text-[#172B4D] font-[500]">
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
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MagicLink3;
