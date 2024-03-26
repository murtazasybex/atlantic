import React from "react";
import { fiction, fictontwo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto py-20 px-2">
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Atlantic Publishing Services?
        </h1>
        <div className="flex md:justify-evenly justify-center md:flex-row flex-wrap flex-col items-center my-14 mx-auto">
          <div className="w-full max-w-[700px] space-y-8">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Fiction
            </h1>
            <p>
              Write thrilling stories that take readers to exciting adventures,
              imaginative universes, or tragic human situations. We help you
              with every step of the process, from story structure to character
              development, so your creative masterpiece comes to life.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <NavLink
                to="javascript:$zopim.livechat.window.show();"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Consult With Our Expert Team Now!
              </NavLink>
              <a
                href="tel:+1-(312)-765-7097"
                className="inline-block  bg-[#28a745] text-white font-medium py-3 hover:bg-gray-800 transition-colors px-5 rounded-full"
              >
                +1-(312)-765-7097
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-3 pt-14">
            <img
              src={fiction}
              className="hover:border-[#28a745] w-full max-w-[230px] hover:border-2 md:mt-0 mt-8 transition-colors shadow-xl hover-transition"
              alt=""
            />
            <img
              src={fictontwo}
              className="hover:border-[#28a745] w-full max-w-[230px] hover:border-2 md:mt-0 mt-8 transition-colors shadow-xl hover-transition"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
