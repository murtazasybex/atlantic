import React from "react";
import {
  autobiographyone,
  autobiographytwo,
  streamline,
} from "../../assets/images";
import { NavLink } from "react-router-dom";

const StreamlinedPublishing = () => {
  return (
    <>
      <section className="container mx-auto py-10 px-2">
        {/* <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Atlantic Publishing Services?
        </h1> */}
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-10 mx-auto">
          <div className="w-full max-w-[700px] space-y-8 mb-8 md:mb-0">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Autobiography
            </h1>
            <p>
              Take a self-exploration trip and motivate others by using our
              autobiography publication services. We help you create an engaging
              story that reveals your own experiences, struggles, and victories
              while leaving a lasting impression.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <NavLink
                to="javascript:$zopim.livechat.window.show();"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Chat Now!
              </NavLink>
              <a
                href="tel:+1-(315)-417-3330"
                className="inline-block  bg-[#28a745] text-white font-medium py-3 hover:bg-gray-800 transition-colors px-5 rounded-full"
              >
                +1-(315)-417-3330
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-3">
            <img
              src={autobiographyone}
              className="hover:border-[#28a745] w-full max-w-[400px] hover:border-2 transition-colors shadow-xl hover-transition"
              alt=""
            />
            <img
              src={autobiographytwo}
              className="hover:border-[#28a745] w-full max-w-[400px] hover:border-2 transition-colors shadow-xl hover-transition  "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StreamlinedPublishing;
