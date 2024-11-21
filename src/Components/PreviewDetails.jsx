import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
const PreviewDetails = ({ formData, handleSubmit, loading, setStep }) => {
  const [isChecked, setIschecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const handleTermsModal = () => setShowTermsModal(!showTermsModal);
  const handlePrivacyModal = () => setShowPrivacyModal(!showPrivacyModal);
  return (
    <div className="p-6 border border-gray-300 rounded-md m-4">
      <h2 className="text-center font-bold text-lg mb-4">
        Preview Your Details
      </h2>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Personal Information</h3>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>House Number:</strong> {formData.houseNumber}
        </p>
        <p>
          <strong>Street:</strong> {formData.street}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.statetext}
        </p>
        <p>
          <strong>District:</strong> {formData.districttext}
        </p>
        <p>
          <strong>Pin Code:</strong> {formData.pinCode}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Connection Details</h3>

        {formData.customerType === "Residential" && (
          <>
            <p>
              <strong>Connection Type:</strong> {formData.connectionType}
            </p>
          </>
        )}

        {formData.customerType === "Residential" && (
          <p>
            <strong>Need Subsidy:</strong> {formData.needSubsidy ? "Yes" : "No"}
          </p>
        )}
        {formData.connectionType === "Ongrid" && (
          <>
           
            <p>
              <strong>Consumption Over Last Month:</strong>{" "}
              {formData.consumption} Units
            </p>
          </>
        )}
        <p>
          <strong>Your Requested Capacity to Install:</strong>{" "}
          {formData.capacity} kW
        </p>
      </div>
      <div className="preview-section mb-4">
      {formData.customerType === "Commercial" && (
        <>
            <p>
              <strong>Type of Organization:</strong> {formData.typeofOrganization}
            </p>
             <p>
             <strong>Type of Roof:</strong> {formData.typeofRoof}
           </p>
            <p>
            <strong>Current Sanction load:</strong> {formData.currentSanctionLoad} kW
          </p>
           <p>
           <strong>Consumption:</strong> {formData.consumption} kW
         </p>
         <p>
           <strong>Need Batter Backup:</strong> {formData.batteryBackup?"Yes":"No"}
         </p>
         </>
          )}
      </div>
      <div className="preview-section mb-4">
        {formData.customerType === "Residential" &&
          formData.connectionType === "Offgrid" &&
          formData.load.length > 0 && (
            <>
              <h3 className="font-semibold text-blue-600">Peak Load Details</h3>
              <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-4 py-2">
                      <strong>Applicance Name</strong>
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      <strong>Watt Capacity</strong>
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      <strong>Hours of Operation Per Day</strong>
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      <strong>No. of Applicances</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formData.load.map((l, i) => (
                    <tr key={i}>
                      <td className="border border-gray-400 px-4 py-2">
                        {l.equipmentName}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {l.capacity} kW
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {l.operation} Hours
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {l.equipments}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           
         

        {/* {formData.connectionType === "Ongrid" && (
          <>
            <p>
              <strong>Current Sanction Load:</strong>{" "}
              {formData.currentSanctionLoad} kW
            </p>
            <p>
              <strong>Consumption Over Last Month:</strong>{" "}
              {formData.consumption} Units
            </p>
          </>
        )} */}
        <p>
          <strong>Electricity Available?:</strong>
          {formData.electricityConnectivity?"Available":"Not Available"}
        </p> </> )}
      </div>
      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Roof Details</h3>
        <p>
          <strong>Type of Roof:</strong> {formData.typeofRoof}
        </p>
        <p>
          <strong>Length:</strong> {formData.lengthl} ft
        </p>
        <p>
          <strong>Breadth:</strong> {formData.breadth} ft
        </p>
        <p>
          <strong>Total Area:</strong> {formData.sft} sq ft
        </p>
        {formData.connectionType === "Ongrid" &&
          formData.customerType === "Residential" && (
            <p>
              <strong>Floor Number:</strong> {formData.floorNumber}
            </p>
          )}
        {formData.roofLayout && (
          <p>
            <strong>Roof Layout File:</strong> {formData.roofLayout.name}
          </p>
        )}
        {/* <p>
          <strong>Your Requested Capacity to Install:</strong>{" "}
          {formData.capacity} kW
        </p> */}
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Uploads</h3>
        <div className="flex gap-3 flex-col mt-3">
          {formData.video && (
            <div className="break-all">
              <p className="flex flex-col">
                <strong>Video Upload:</strong> {formData.video.name}
              </p>
            </div>
          )}
          {formData.image && formData.image.length > 0 && (
            <div className="break-all">
              <strong>Roof Site Images</strong>
              <ul>
                {formData.image.map((file, index) => (
                  <li key={index}>{file.name}</li> // Display the file name for each uploaded file
                ))}
              </ul>
            </div>
          )}

          {formData.electricityBill && formData.electricityBill.length > 0 && (
            <div className="break-all">
              <strong>Electricity Bill(s)</strong>
              <ul>
                {formData.electricityBill.map((file, index) => (
                  <li key={index}>{file.name}</li> // Display the file name for each uploaded file
                ))}
              </ul>
            </div>
          )}

          {formData.gstCertificate && (
            <div className="break-all">
              <p className="flex flex-col">
                <strong>GST Certificate:</strong> {formData.gstCertificate.name}
              </p>
            </div>
          )}
          {formData.identityProof && (
            <div className="break-all">
              <p className="flex flex-col">
                <strong>Identity Proof:</strong> {formData.identityProof.name}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <div
          className={`flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer ${
            isChecked ? "bg-blue-500" : "bg-white"
          }`}
          onClick={() => setIschecked(!isChecked)}
        >
          {isChecked && <FaCheck className="text-white" />}
        </div>
        <label className="text-gray-500 text-sm">
          By checking this, you accept the{" "}
          <span
            className="text-[#004A9C] cursor-pointer font-[600] underline"
            onClick={handleTermsModal}
          >
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span
            className="text-[#004A9C] cursor-pointer font-[600] underline"
            onClick={handlePrivacyModal}
          >
            Data Privacy
          </span>
          .
        </label>
      </div>
      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-[800px] w-full mx-4 space-y-5">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">
                Terms & Conditions
              </h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowTermsModal(false)}
              >
                X
              </button>
            </div>
            <div className="space-y-4">
              <div className="h-96 overflow-y-scroll">
                <p>
                  Welcome to CUSP, an e-commerce platform for connecting with
                  solar panel installers for availing the solar panel
                  installation services and products. By using our services, you
                  (User) agree to following Terms and Conditions to use
                  marketplace “CUSP”, a brand of Synergy Sustainability
                  Solutions Pvt. Ltd. having registered office at B-102, Kalyani
                  Apartment, Sector 6, Vasundhra, Ghaziabad -201012, Uttar
                  Pradesh (CUSP).
                </p>
                <h2 className="font-bold my-2">1. Service Description:</h2>
                <p>
                  <strong>• Platform Connectivity: </strong> CUSP serves as a
                  dynamic platform, connecting end-users with solar panel
                  installers (SPIs) and original equipment manufacturers (OEMs)
                  within the solar industry. CUSP streamlines the process of
                  finding and selecting the best service providers& product
                  suppliers to meet Users’ solar energy needs.
                </p>
                <p>
                  <strong>• Quote Facilitation: </strong> CUSP facilitates the
                  gathering and presentation of quotes from various SPIs and
                  OEMs, allowing users to compare options and make informed
                  decisions. The acceptance or rejection of any quote is
                  entirely at the User's discretion.
                </p>
                <p>
                  <strong>• User Empowerment: </strong> CUSP empowers users to
                  take control of their solar projects by providing access to a
                  network of verified professionals. Users can review quotes and
                  accordingly select preferred service providers directly
                  through the platform. User will have to manage the projects on
                  their own.
                </p>
                <p>
                  <strong>• Service Provision: </strong> The availability and
                  provision of services through CUSP are at CUSP's sole
                  discretion. CUSP reserves the right to determine which
                  projects and providers are featured on the platform.
                </p>
                <p>
                  <strong>• No Guarantee or Warranty: </strong> While CUSP
                  connects users with qualified SPIs and OEMs, we do not act as
                  a guarantor, nor do we warrant the performance or quality of
                  services provided by these third parties. Users are encouraged
                  to conduct their own due diligence before entering into
                  agreements with SPIs or OEMs. CUSP determines SPIs’ and OEMs
                  qualification solely based on the information provided by the
                  SPIs and OEMs
                </p>
                <p>
                  <strong>• Transparency and Trust: </strong> CUSP is committed
                  to maintaining transparency in all interactions. CUSP
                  endeavors to provide all possible information to help Users
                  make informed decisions.
                </p>
                <h2 className="font-bold my-2">2. User Responsibilities:</h2>
                <p>
                  <strong>• Accurate Information Submission: </strong> When
                  submitting their solar panel installation requirements, Users
                  must provide accurate, complete, and detailed information.
                  This includes specifications, site conditions, and any other
                  relevant details to ensure that the quotes received are as
                  precise as possible.
                </p>
                <p>
                  <strong>• Timely Decision-Making: </strong> Upon receiving a
                  quote from an installer or OEM, the user is required to
                  communicate their decision—whether to accept, reject, or
                  negotiate—within 24 hours. Prompt decision-making helps
                  maintain the efficiency and effectiveness of the platform.
                </p>
                <p>
                  <strong>• Effective Communication: </strong> Users are
                  responsible for maintaining timely and clear communication
                  with the selected installer throughout the project. This
                  includes coordinating site visits, providing necessary access,
                  and responding to any queries from the installer to avoid
                  delays.
                </p>
                <p>
                  <strong>• Acknowledge Quote Variability: </strong> The User
                  acknowledges that the initial quotes provided through the CUSP
                  platform are based on the preliminary information User has
                  submitted. These quotes are tentative and may be subject to
                  change upon further evaluation by the SPI/OEM. User is
                  responsible for negotiating the final price directly with the
                  SPI, taking into account any adjustments or additional
                  requirements.
                </p>
                <p>
                  <strong>• Due Diligence: </strong> Users should conduct their
                  own due diligence before finalizing any agreement with SPI or
                  OEM. This includes verifying credentials, reviewing past work,
                  and ensuring that all terms of the contract are clearly
                  understood and agreed upon.
                </p>
                <p>
                  <strong>• Compliance with Laws and Regulations: </strong> User
                  must ensure that their project complies with all local laws,
                  regulations, and permitting requirements. It is the User’s
                  responsibility to secure any necessary permits or approvals
                  prior to the commencement of installation.
                </p>
                <p>
                  <strong>• Financial Responsibility: </strong> User is
                  responsible for the timely payment of all agreed-upon fees,
                  costs associated with the installation and applicable
                  statutory levies. This includes any advance payments, final
                  payments upon completion, and any additional charges that may
                  arise during the project execution.
                </p>

                <h2 className="font-bold my-2">3. Payment Terms:</h2>
                <p>
                  <strong>• Direct Payment Arrangement: </strong> Payment terms
                  between the end-user and the installer will be governed by the
                  agreement reached between them. CUSP does not facilitate or
                  manage payment transactions directly between the end-user and
                  the installer.
                </p>
                <p>
                  <strong>• Convenience Fee: </strong> CUSP reserves the right
                  to charge a convenience fee to the User. Any such charges will
                  be clearly communicated to the User in advance, prior to the
                  sharing of quotes from SPIs and OEMs.
                </p>
                <p>
                  • All payments related to the services and/or products offered
                  by SPIs, and OEMs will be handled directly between them and
                  the User. CUSP will not be responsible for the collection or
                  distribution of these payments.
                </p>

                <h2 className="font-bold my-2">4. Limitation of Liability:</h2>
                <p>
                  <strong>• Platform Functionality: </strong> CUSP provides a
                  platform to connect end-users with SPIs and/or OEMs. While we
                  strive to ensure the accuracy and reliability of the
                  information and services provided, CUSP is not liable for any
                  errors, omissions, or inaccuracies in the quotes, services, or
                  information provided by third-party SPIs and OEMs.
                </p>
                <p>
                  <strong>• No Guarantee or Warranty: </strong> CUSP does not
                  guarantee the quality, timeliness, or performance of the
                  services provided by SPIs or OEMs. User acknowledges that any
                  agreements entered with these third parties are solely between
                  the User and SPIs and/or OEMs, and CUSP is not liable for any
                  disputes, claims, or damages arising from these agreements.
                </p>
                <p>
                  <strong>• Variability of Quotes: </strong> User understands
                  that the initial quotes provided through the CUSP platform are
                  based on preliminary information and are subject to change
                  upon further assessment by the SPI and/or OEM. CUSP is not
                  responsible for any discrepancies between the initial quotes
                  and the final agreed-upon price.
                </p>
                <p>
                  <strong>• Convenience Fee: </strong> In cases where CUSP
                  charges a convenience fee, this fee is solely for the use of
                  the platform and does not imply any liability on the part of
                  CUSP for the services provided by third parties. The liability
                  of CUSP for any claims related to the convenience fee shall be
                  limited to the amount of the fee paid by the User.
                </p>
                <p>
                  <strong>• Service Availability: </strong> CUSP reserves the
                  right to limit or discontinue its services at its sole
                  discretion, without notice. CUSP is not liable for any loss,
                  delay, or inconvenience caused by the unavailability or
                  disruption of services.
                </p>
                <p>
                  <strong>• Indirect or Consequential Damages: </strong> Under
                  no circumstances shall CUSP be liable for any indirect,
                  incidental, special, or consequential damages, including but
                  not limited to loss of profits, loss of business interruption,
                  or loss of data, arising out of or in connection with the use
                  of the platform or the services provided by SPIs and OEMs.
                </p>
                <p>
                  <strong>• Total Liability: </strong> In all cases, the total
                  liability of CUSP, whether in contract, tort, or otherwise,
                  shall not exceed the total amount of any fees paid by the user
                  to CUSP for the specific service giving rise to the claim.
                </p>
                <h2 className="font-bold my-2">5. Termination:</h2>
                <p>
                  <strong>• Automatic Termination: </strong> The agreement
                  between the User and CUSP automatically terminates upon the
                  expiry of the quote validity period or upon the User’s final
                  decision regarding the quotes obtained through CUSP, whether
                  it be acceptance, rejection, or negotiation.
                </p>
                <p>
                  <strong>• Termination by CUSP: </strong> CUSP reserves the
                  right to terminate the service at any time if the User
                  violates any of the terms and conditions outlined by CUSP or
                  engages in fraudulent, deceptive, or illegal activities. Such
                  termination may occur without prior notice, and CUSP shall not
                  be liable for any consequences arising from the termination.
                </p>
                <h2 className="font-bold my-2">6. Changes to Terms :</h2>
                <p>
                  <strong>• Right to Modify: </strong> CUSP reserves the right
                  to modify or update these terms and conditions at any time.
                  Significant changes will be communicated to users in a timely
                  manner, either through the platform or via direct notification
                </p>
                <p>
                  <strong>• Continued Use: </strong> By continuing to use the
                  CUSP platform and services after any changes to the terms,
                  User agrees to be bound by the updated terms. If User does not
                  agree to the modified terms, it should discontinue use of the
                  platform immediately.
                </p>
                <h2 className="font-bold my-2">7. Governing Law:</h2>
                <p>
                  These terms and any disputes arising from or related to the
                  use of CUSP's platform and services shall be governed by and
                  construed in accordance with the laws of India. This Agreement
                  is subject to the exclusive jurisdiction of the courts of
                  Ghaziabad.
                </p>
                <h2 className="font-bold my-2">8. Contact Information:</h2>
                <p>
                  For any questions, concerns, or assistance, please reach out
                  to our customer support teamand we will be happy to assist
                  you.
                </p>
                <h2 className="font-bold my-2">9. Confidentiality</h2>
                <h3 className="font-semibold my-2">
                  9.1 Definition of Confidential Information
                </h3>
                <p>
                  The term "Confidential Information" shall include all
                  information, whether written, oral, or otherwise, disclosed by
                  either party (the "Disclosing Party") to the other party (the
                  "Receiving Party") that is designated as confidential,
                  proprietary, or that should reasonably be understood to be
                  confidential given the nature of the information and the
                  circumstances of its disclosure. Confidential Information
                  includes, but is not limited to, business plans, customer
                  information, technical data, trade secrets, financial
                  information, and any other information related to the
                  operations, products, services, or business of the Disclosing
                  Party.
                </p>

                <h3 className="font-semibold my-2">
                  9.2 Obligations of the Receiving Party
                </h3>
                <p>
                  The Receiving Party agrees to:
                  <ul className="list-disc ml-6 my-2">
                    <li>
                      Maintain the confidentiality of the Confidential
                      Information and not disclose it to any third party without
                      the prior written consent of the Disclosing Party.
                    </li>
                    <li>
                      Use the Confidential Information solely for the purpose of
                      fulfilling its obligations under this Agreement and not
                      for any other purpose.
                    </li>
                    <li>
                      Take all reasonable measures to protect the
                      confidentiality of the Confidential Information, including
                      implementing appropriate security measures and restricting
                      access to only those employees, agents, or contractors who
                      need to know the information for the purposes of this
                      Agreement.
                    </li>
                  </ul>
                </p>

                <h3 className="font-semibold my-2">
                  9.3 Exclusions from Confidential Information
                </h3>
                <p>
                  Confidential Information does not include information that:
                  <ul className="list-disc ml-6 my-2">
                    <li>
                      (i) Is or becomes publicly available through no fault of
                      the Receiving Party.
                    </li>
                    <li>
                      (ii) Is already in the possession of the Receiving Party
                      without obligation of confidentiality prior to disclosure
                      by the Disclosing Party.
                    </li>
                    <li>
                      (iii) Is independently developed by the Receiving Party
                      without use of or reference to the Disclosing Party’s
                      Confidential Information.
                    </li>
                    <li>
                      (iv) Is disclosed to the Receiving Party by a third party
                      who has the right to make such disclosure without any
                      obligation of confidentiality.
                    </li>
                  </ul>
                </p>

                <h3 className="font-semibold my-2">9.4 Legal Disclosure</h3>
                <p>
                  If the Receiving Party is required by law, regulation, or
                  court order to disclose any Confidential Information, it shall
                  promptly notify the Disclosing Party in writing, if legally
                  permissible, and provide reasonable assistance in seeking a
                  protective order or other appropriate remedy. In the event
                  that such protective order or remedy is not obtained, the
                  Receiving Party may disclose only that portion of the
                  Confidential Information that it is legally required to
                  disclose.
                </p>

                <h3 className="font-semibold my-2">
                  9.5 Return or Destruction of Confidential Information
                </h3>
                <p>
                  Upon the termination or expiration of this Agreement, or upon
                  the written request of the Disclosing Party, the Receiving
                  Party shall promptly return or destroy all copies of the
                  Confidential Information in its possession or control and
                  certify in writing that it has done so.
                </p>

                <h3 className="font-semibold my-2">
                  9.6 Duration of Confidentiality Obligations
                </h3>
                <p>
                  The obligations under this Confidentiality clause shall remain
                  in effect for a period of one (1) year from the date of
                  termination or expiration of this Agreement.
                </p>

                <h3 className="font-semibold my-2">9.7 Survival</h3>
                <p>
                  The provisions of this Confidentiality clause shall survive
                  the termination or expiration of this Agreement.
                </p>

                <button
                  className="bg-[#3B715A] text-white px-4 py-2 rounded-lg my-5"
                  onClick={() => setShowTermsModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-[800px] w-full mx-4 space-y-5">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowPrivacyModal(false)}
              >
                X
              </button>
            </div>
            <div className="space-y-4">
              <div className="h-96 overflow-y-scroll">
                <h2 className="font-bold">1. Introduction</h2>
                <p>
                  1.1 Welcome to CUSP, an e-commerce platform dedicated to
                  renewable energy solutions, a brand of Synergy Sustainability
                  Solutions Pvt. Ltd., having its registered office at B-102,
                  Kalyani Apartment, Sector 6, Vasundhra, Ghaziabad -201012,
                  Uttar Pradesh (CUSP). We value your privacy and are committed
                  to protecting your personal data. This Data Privacy Policy
                  outlines how we collect, use, share, and safeguard your
                  information in accordance with the laws of India.
                </p>

                <h2 className="font-bold">2. Information We Collect</h2>
                <p>
                  2.1 <strong>Personal Information:</strong> When you register
                  on our platform, place an order, or communicate with us, we
                  may collect personal information such as your name, email
                  address, contact number, physical address, and payment
                  details.
                </p>
                <p>
                  2.2 <strong>Non-Personal Information:</strong> We may collect
                  non-personal information such as your browser type, IP
                  address, and details about your usage of our platform to
                  improve our services.
                </p>
                <p>
                  2.3{" "}
                  <strong>
                    Sensitive Personal Data or Information (SPDI):
                  </strong>{" "}
                  We do not collect or process SPDI unless necessary for the
                  services provided on our platform. In such cases, we will
                  obtain your explicit consent.
                </p>

                <h2 className="font-bold">3. How We Use Your Information</h2>
                <p>
                  3.1 <strong>Service Delivery:</strong> If you are a solar
                  product end-user, we use your personal information to process
                  orders, provide customer support, and manage your account. If
                  you are an installer or manufacturer, we use your personal
                  information to connect you with the end user.
                </p>
                <p>
                  3.2 <strong>Communication:</strong> We may use your contact
                  details to send you important updates, promotional offers, and
                  information about our services. You can opt out of receiving
                  marketing communications at any time.
                </p>
                <p>
                  3.3 <strong>Improvement and Personalization:</strong> We use
                  data analytics to understand user behavior, improve our
                  services, and customize your experience on our platform.
                </p>
                <p>
                  3.4 <strong>Legal Compliance:</strong> We may use your
                  information to comply with legal obligations, enforce our
                  terms and conditions, and protect our rights and the rights of
                  others.
                </p>

                <h2 className="font-bold">
                  4. Information Sharing and Disclosure
                </h2>
                <p>
                  4.1 <strong>Third-Party Support Providers:</strong> We may
                  share your information with trusted third-party support
                  providers who assist us in operating our platform, its backend
                  administration, processing payments, delivering services, and
                  conducting our business. These providers are bound by
                  confidentiality agreements and are not permitted to use your
                  data for any other purpose.
                </p>
                <p>
                  4.2 <strong>Legal Requirements:</strong> We may disclose your
                  information if required by law or in response to legal
                  processes, including court orders, subpoenas, or government
                  investigations.
                </p>

                <h2 className="font-bold">5. Data Security</h2>
                <p>
                  5.1 We implement reasonable security practices and procedures
                  to protect your personal information from unauthorized access,
                  misuse, alteration, or disclosure.
                </p>
                <p>
                  5.2 While we strive to protect your data, no security system
                  is infallible. We cannot guarantee the absolute security of
                  your information, and you share your data with us at your own
                  risk.
                </p>

                <h2 className="font-bold">
                  6. Cookies and Tracking Technologies
                </h2>
                <p>
                  6.1 We use cookies and similar tracking technologies to
                  collect information about your interactions with our platform,
                  such as pages visited and links clicked. This helps us enhance
                  your user experience and deliver personalized content.
                </p>
                <p>
                  6.2 You can manage your cookie preferences through your
                  browser settings. However, disabling cookies may affect the
                  functionality of our platform.
                </p>

                <h2 className="font-bold">7. Your Rights</h2>
                <p>
                  7.1 <strong>Access and Correction:</strong> You have the right
                  to access the personal information we hold about you and
                  request corrections if necessary.
                </p>
                <p>
                  7.2 <strong>Withdrawal of Consent:</strong> You may withdraw
                  your consent to the processing of your personal data at any
                  time. However, this may affect your ability to use certain
                  features of our platform.
                </p>
                <p>
                  7.4 <strong>Grievance Redressal:</strong> If you have any
                  concerns or grievances regarding the handling of your data,
                  please contact Mrs. Minku Singh, our Grievance Officer, at +91
                  9899492280 or e-mail at{" "}
                  <a href="mailto:support@cuspsolar.com">
                    support@cuspsolar.com
                  </a>
                  . We will address your concerns in a timely manner.
                </p>

                <h2 className="font-bold">8. Data Retention</h2>
                <p>
                  8.1 We retain your personal information only as long as
                  necessary to fulfill the purposes for which it was collected
                  or as required by law.
                </p>
                <p>
                  8.2 When your personal information is no longer needed, we
                  will securely delete or anonymize it.
                </p>

                <h2 className="font-bold">9. Updates to this Policy</h2>
                <p>
                  9.1 We may update this Data Privacy Policy from time to time
                  to reflect changes in our practices or legal requirements. The
                  updated policy will be posted on our website with the
                  effective date. We encourage you to review this policy
                  periodically.
                </p>

                <h2 className="font-bold">10. Governing Law</h2>
                <p>
                  10.1 This Data Privacy Policy is governed by and construed in
                  accordance with the laws of India. Any disputes arising out of
                  or related to this policy shall be subject to the exclusive
                  jurisdiction of the courts in Ghaziabad.
                </p>

                <h2 className="font-bold">11. Contact Us</h2>
                <p>
                  11.1 If you have any questions or concerns about this Data
                  Privacy Policy or our data practices, please contact us at{" "}
                  <a href="mailto:support@cuspsolar.com">
                    support@cuspsolar.com
                  </a>
                  .
                </p>
                <button
                  className="bg-[#3B715A] text-white px-4 py-2 rounded-lg my-5"
                  onClick={() => setShowPrivacyModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4 gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          disabled={loading}
          onClick={() => {
            if (formData.customerType === "Residential" && formData.connectionType==="Offgrid") {
              setStep(36);
            }else if (formData.customerType === "Residential" && formData.connectionType==="Ongrid") {
              setStep(21);
            } else {
              setStep(7);
            }
          }}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          disabled={loading}
          onClick={() => {
            if (isChecked) {
              handleSubmit();
            } else {
              toast.error("Accept Terms & Conditions before submitting...");
            }
          }}
        >
          {loading ? "Please Wait..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default PreviewDetails;
