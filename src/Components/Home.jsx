import React from "react";
import herobg from "../Images/hero-img-1.webp";
import Advantages from "./Advantages";
import PartnerwithUs from "./PartnerwithUs";
import SolarSolutions from "./SolarSolutions";
import Objectives from "./Objectives";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // arrows: false,
  };
  return (
    <div>
      <Helmet>
        <title>CUSP Solar: Innovative Platform for Solar Industry</title>
        <meta
          name="description"
          content="CUSP Solar provides innovative solar solutions and connects solar installers with end-users for a seamless experience. Simplify your solar journey."
        />
      </Helmet>
      {/*---join the green revolution section---*/}
      <div className="bg-[#fff6c0] py-[5%] ">
        <div className="grid grid-cols-[1fr_2fr] max-[1000px]:grid-cols-1 mx-[5%] h-full">
          <div className="bg-[#FFD36D] px-6 rounded-l-2xl flex flex-col pt-[2rem]">
            <h1 className="font-[600] leading-[3rem] text-[35px] text-[#4348BD] mb-4 max-[600px]:text-[25px] max-[600px]:leading-[30px] max-[600px]:mb-2">
              Join The Green Revolution
            </h1>
            <p className="text-[#133819] pr-12 text-[24px] font-[500] leading-[36px] max-[600px]:text-[18px] max-[600px]:leading-[28px]">
              Empowering Communities with Sustainable Solar Solutions
            </p>
          </div>
          <div className="relative rounded-br-3xl overflow-hidden">
            <img
              src={herobg}
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(13,13,13,0.5)]">
              <h1 className="text-[16px] font-bold text-center text-white rounded-br-3xl   leading-[4rem] pb-3 max-[600px]:leading-[2rem]">
                Transition to Green Future with us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*---join the green revolution-section close--*/}
      {/*---solar solutions section----*/}
      <SolarSolutions />
      {/*---Advantages of solar section---*/}
      <Advantages />
      {/*---Partner With Us section----*/}
      <PartnerwithUs />
      {/*---Objectives section----
      <Objectives />*/}
      {/*---Testmonials----
      <Testimonials />*/}
    </div>
  );
};

export default Home;
