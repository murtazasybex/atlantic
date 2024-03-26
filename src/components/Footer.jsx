import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  X,
  cards,
  email,
  fb,
  insta,
  linkedin,
  location,
  logo,
  phone,
  protectedimg,
} from "../assets/images";
import { awardsOne, awardsTwo } from "../constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <footer className="w-full mx-auto bg-[#171C22] h-50 px-2">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto py-20 px-5">
          {/* col1 */}
          <div className="space-y-3 mb-10 w-full max-w-[350px] lg:mb-0">
            <img src={logo} className="w-full max-w-[200px] pb-5" alt="" />
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img src={email} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  info@atlanticbookpublisher.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  Toll Free: +1-(312)-765-7097
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  For Sales Inquiry: +1-(312)-765-7097
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  For Project Inquiry: +1-(312)-765-7097
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  200 Vesey Street, 24th Floor, New York, New York, 10281,
                  United States of America
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} className="invert w-4" alt="" />
                <p className="text-white text-sm">
                  5250 Old Orchard Rd, Suite 300 Skokie, 60077
                </p>
              </div>
            </div>
            <div className="flex space-x-2 pt-4">
              <NavLink
                to="https://www.facebook.com/AtlanticBookPublisher/"
                target="_blank"
                className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer"
              >
                <img src={fb} className="invert" alt="" />
              </NavLink>
              <NavLink
                to="https://www.threads.net/@atlanticbookpublisher"
                target="_blank"
                className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer"
              >
                <img src={X} className="w-4" alt="" />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/atlanticbookpublisher/"
                target="_blank"
                className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer"
              >
                <img src={insta} className="invert" alt="" />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/company/atlantic-book-publisher/"
                target="_blank"
                className="bg-[#28a745] rounded-full w-8 h-8 hover:bg-[#28a745]/80 transition-colors cursor-pointer flex items-center justify-center"
              >
                <img src={linkedin} className="invert" alt="" />
              </NavLink>
            </div>

            <img src={protectedimg} className="pt-5" alt="" />
          </div>
          {/* col2 */}
          <div className="space-y-3 w-full max-w-[300px]">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Useful Links
            </h1>
            <div className="flex flex-col space-y-3 pt-2">
              <NavLink
                to="https://atlanticbookpublisher.com/"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Home
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/about-us"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                About
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/contact"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/* col3 */}
          <div className="space-y-3  w-full max-w-[300px]">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Services
            </h1>
            <div className="flex flex-col space-y-3 pt-2">
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/publishing"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Publishing
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/children-book-illustration"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Book Illustration
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/ghostwriting"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Ghostwriting
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/book-writing"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Book Writing
              </NavLink>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/book-marketing"
                className="text-white hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Book Marketing
              </NavLink>
            </div>
          </div>
          {/* col4 */}
          <div className="space-y-3 w-full max-w-[180px] lg:w-auto">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Awards
            </h1>
            <Slider {...settings}>
              <div></div>
              {awardsOne.map((award, index) => (
                <img src={award} className="w-full max-w-[120px] py-2" alt="" />
              ))}
            </Slider>
            <Slider {...settings}>
              <div></div>
              {awardsTwo.map((award, index) => (
                <img src={award} className="w-full max-w-[120px] py-2" alt="" />
              ))}
            </Slider>
          </div>
        </div>
        {/* bottom */}
        <div className="border mx-auto container mb-4"></div>
        <div className="flex flex-col lg:flex-row pb-4 justify-between items-center mx-auto container">
          <img
            src={cards}
            className="w-full max-w-[250px] mb-4 lg:mb-0 lg:w-auto"
            alt=""
          />
          <div className="text-white text-center lg:text-left">
            <p>© 2024 - All Rights Reserved - Atlantic</p>
          </div>
          <div className="text-white text-center lg:text-left">
            <div className="space-x-2">
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/terms-and-conditions"
                className="hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Terms of Use
              </NavLink>
              <span>|</span>
              <NavLink
                target="_blank"
                to="https://atlanticbookpublisher.com/privacy-policy"
                className="hover:text-[#28a745] transition-colors cursor-pointer"
              >
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
