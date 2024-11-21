import React, { useRef, useEffect, useState } from "react";
import logo from "../Images/cusp-solar-logo.svg";
import benefits from "../Images/benefits.webp";
import benefit1 from "../Images/benefit1.webp";
import benefit2 from "../Images/benefit2.webp";
import benefit3 from "../Images/benefit3.webp";
import benefit4 from "../Images/benefit4.webp";
import benefit5 from "../Images/benefit5.webp";
import howitworks1 from "../Images/how-it-works1.webp";
import howitworks2 from "../Images/how-it-works2.webp";
import howitworks3 from "../Images/how-it-works3.webp";
import solar from "../Images/solar-img.jpg";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa";
import LandingPageContact from "./LandingPageContact";
const benefitsData = [
  {
    id: 1,
    imgSrc: benefit1,
    title: "Connect with Multiple Service Providers",
    description:
      "Gain access to a broad network of certified solar installers, all verified and ready to offer competitive solutions.",
  },
  {
    id: 2,
    imgSrc: benefit2,
    title: "Transparent Pricing",
    description:
      "No hidden costs, just clear, upfront quotes. CUSP SOLAR ensures you see exactly what you’re paying for.",
  },
  {
    id: 3,
    imgSrc: benefit3,
    title: "Comparison Shopping",
    description:
      "Compare options side-by-side and select the ideal package that fits your budget, preferences, and energy needs.",
  },
  {
    id: 4,
    imgSrc: benefit4,
    title: "After-Sales Service Support",
    description:
      "Enjoy peace of mind with reliable after-sales service, ensuring your solar system remains efficient for years to come.",
  },
  {
    id: 5,
    imgSrc: benefit5,
    title: "Security and Trust",
    description:
      "Your investment in solar is safeguarded with CUSP SOLAR’s commitment to reliability and transparency at every step.",
  },
];
const howItWorksData = [
  {
    id: 1,
    imgSrc: howitworks1,
    title: "Explore",
    description:
      "Browse through profiles and offerings from multiple installers in your area.",
  },
  {
    id: 2,
    imgSrc: howitworks2,
    title: "Compare & Choose",
    description:
      "View detailed pricing, services, and reviews to find the installer that suits you best.",
  },
  {
    id: 3,
    imgSrc: howitworks3,
    title: "Connect & Customize",
    description:
      "Get in touch directly with providers to discuss your unique requirements and get personalized quotes.",
  },
  {
    id: 4,
    imgSrc: howitworks1,
    title: "Enjoy & Save",
    description:
      "Embrace clean energy, reduce electricity bills, and benefit from CUSP SOLAR's post-installation support.",
  },
];
const LandingPage = () => {
  const formSectionRef = useRef(null);

  const scrollToForm = () => {
    const formTop = formSectionRef.current.offsetTop; // Get the top position of the form section
    const headerOffset = 50; // Adjust for any fixed headers or additional spacing
    window.scrollTo({
      top: formTop - headerOffset, // Scroll to the form's position minus the offset
      behavior: "smooth", // Smooth scrolling
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/*---banner section---*/}
      <section className="landing-banner-section">
        {/* Overlay for better text contrast */}
        <div className="banner-overlay"></div>

        {/* Content inside the banner */}
        <div className="relative flex items-center justify-start h-full px-8 lg:px-16">
          <div className="text-white max-w-lg">
            <img src={logo} alt="Logo" className="w-52 mb-[3rem]" />
            <h1 className="text-[2.5rem] lg:text-[4rem] font-bold !leading-[4.8rem] max-[1000px]:!leading-[3rem]">
              Your Solar Journey
              <br />
              Made Simple
            </h1>
          </div>
        </div>
      </section>
      {/*---about us and form section-----*/}
      <section className="bg-[#28bb7c] relative z-10">
        <div className="px-[4rem] max-[600px]:px-[1rem] py-12 lg:py-20 flex flex-col max-[1000px]:flex-col-reverse  gap-6 lg:flex-row items-center">
          {/* Left Side: About Us Heading and Description */}
          <div className="lg:w-3/5 text-white max-[1000px]:w-full">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">About CUSP</h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              Switching to solar has never been easier or more transparent. At
              CUSP SOLAR, we empower you with the tools to make informed
              decisions by connecting you to a wide range of trusted solar
              installers. From finding the best prices to securing reliable
              after-sales support, we make your transition to renewable energy
              smooth, safe, and entirely stress-free.
            </p>
          </div>

          {/* Right Side: Form */}
          <div
            ref={formSectionRef}
            id="form-section"
            className="lg:w-2/5 max-[1000px]:w-full"
          >
            <LandingPageContact />
          </div>
        </div>
      </section>
      {/*----benefits section-----*/}
      <section className="px-[2rem] py-16 benefit-bg relative max-[600px]:px-[1rem]">
        {/* Black overlay for the background */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

        {/* Content wrapper */}
        <div className="relative container mx-auto px-4">
          <h2 className="text-center text-white text-4xl font-bold">
            Benefits OF CUSP Market Place
          </h2>
          <div className="flex flex-col lg:flex-row mt-8 items-center">
            <div className="w-full lg:w-1/5 text-center mb-8 lg:mb-0">
              <img
                src={benefits}
                alt="Benefits Illustration"
                className="w-full max-w-[150px] mx-auto"
              />
            </div>
            <div className="w-full lg:w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefitsData.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="bg-white shadow-md  rounded-lg p-6 flex flex-col h-full text-center"
                  >
                    <div className="icon mb-4">
                      <img
                        src={benefit.imgSrc}
                        alt={benefit.title}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*---How it works-section---*/}
      <section className="bg-[#fff4d9] py-16 ">
        <div className="container mx-auto px-[4rem] max-[600px]:px-[2rem]">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#196625]">
            How It Works
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {howItWorksData.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#54e4a6] p-4 rounded-lg flex flex-col items-center text-center"
                >
                  <div className="text-center mb-4">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="how-it-works-content">
                    <h3 className="text-[1.1rem] font-semibold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[1rem] text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*----why cusp----*/}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="pt-5 pb-5 text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-6">
              Join CUSP today and power up your solar business!
            </h2>
            <p className="text-gray-700 !leading-[2rem]">
              CUSP, the leading solar marketplace, connects solar installers
              with pre-qualified customers, helping you save time and focus on
              installations. Our platform enhances your visibility through
              targeted marketing, boosts credibility, and simplifies project
              management with efficient tools. Gain access to training
              resources, industry insights, and a growing network of
              professionals to stay ahead in the solar industry. By partnering
              with CUSP, you not only grow your business.
            </p>
            <div className="text-center mt-6">
              <a
                href="https://cuspsolar.com/joinus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition">
                  Partner with Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*----why-choose----*/}
      <section className="bg-[#7ad8e0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side: Image */}
            <div>
              <img
                src={solar}
                alt="Solar"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center">
              <div className="text-[#10373a]">
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose CUSP Solar?
                </h2>
                <p className="text-lg mb-6">
                  With countless options on the market, CUSP SOLAR stands out by
                  putting choice, transparency, and trust at the forefront of
                  your solar journey. Our easy-to-use platform takes the
                  guesswork out of solar shopping, ensuring a straightforward,
                  hassle-free experience from start to finish.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-[#10373a]">
                  Ready to Go Solar?
                </h2>
                <p className="text-lg mb-6">
                  Join thousands of satisfied customers who’ve trusted CUSP
                  SOLAR to power their homes and businesses. Get Your Free Quote
                  Today and start your journey toward a cleaner, greener future.
                </p>
              </div>
              <div className="w-[80%]">
                <button
                  onClick={scrollToForm}
                  className="bg-[#4348bd] text-white py-2 px-5 rounded-lg hover:bg-green-600 transition"
                >
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----scroll to top----*/}
      <div>
        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 animate-bounce-up-down"
            aria-label="Scroll to Top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
