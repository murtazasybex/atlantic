import React, { useState, useEffect } from "react";
import { client, homebanner } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="px-4 flex flex-col justify-center items-center text-white bg-cover h-screen bg-no-repeat bg-left md:bg-center relative"
      style={{ backgroundImage: `url(${homebanner})` }}
    >
      <div className="max-w-7xl mx-auto container">
        <div className="flex items-center">
          {/* Content */}
          <div className="flex-1 mx-auto w-full text-center space-y-10">
            <h1 className="md:text-7xl text-2xl leading-16">
              Refine Your Words With Atlantic <br />
              <span className="text-[#28a745] font-bold">
                Best Ghostwriting Services
              </span>
              .
            </h1>
            <p className="text-base mt-4">
              Is there a story you want to tell but can't quite put your mind to
              it? Let our affordable ghostwriting services assist you to reach
              your full potential. Working together with you, our team of
              skilled and expert authors captures your unique idea and turns it
              into an exciting story. We can assist with every step of the way,
              whether you have an explicit concept or simply a vague idea, so
              that you can create a book that captures your unique voice and
              appeals to readers. Make your story a reality by getting in touch
              with us right now.
            </p>
            <div className="mt-6">
              <NavLink
                to="javascript:$zopim.livechat.window.show();"
                onClick="$zopim.livechat.window.show()"
                className={`inline-block border-4 border-[#28a745]  text-white py-3 px-5 mb-3 rounded-full mr-4 ${
                  isMobile ? "block mb-4" : "inline-block"
                }`}
              >
                Hire The Best Book Publishers Today!
              </NavLink>
              <a
                href="tel: +1-(312)-765-7097"
                className={`inline-block bg-[#28a745] hover:bg-gray-700 text-white py-3 px-5 mr-4 mb-3 rounded-full ${
                  isMobile ? "block mb-4" : "inline-block"
                }`}
              >
                Call Us at +1-(312)-765-7097
              </a>
              <a
                href="#"
                className={`inline-block bg-[#28a745] hover:bg-gray-700 text-white py-3 px-5 rounded-full ${
                  isMobile ? "block" : "inline-block"
                }`}
              >
                OUR PROCESS, IN A MINUTE
              </a>
            </div>
            {/* Client Image */}
            {!isMobile && (
              <div className="md:flex hidden mx-auto justify-center items-center my-10 invert ml-2">
                <img
                  src={client}
                  alt="Client"
                  className="w-full max-w-[800px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
