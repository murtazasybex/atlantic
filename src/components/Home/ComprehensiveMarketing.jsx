import React from "react";
import { comprehensive, memoireone, memoirtwo } from "../../assets/images";

const ComprehensiveMarketing = () => {
  return (
    <>
      <section className="container mx-auto px-2">
        {/* <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Atlantic Publishing Services?
        </h1> */}
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-10 pb-8 mx-auto">
          <div className="flex gap-3">
            <img
              src={memoireone}
              className="hover:border-[#28a745] hover-transition w-full max-w-[450px] mb-8 md:mb-0 hover:border-2 transition-colors shadow-xl"
              alt=""
            />
            <img
              src={memoirtwo}
              className="hover:border-[#28a745] hover-transition w-full max-w-[450px] mb-8 md:mb-0 hover:border-2 transition-colors shadow-xl"
              alt=""
            />
          </div>
          <div className="w-full max-w-[700px] space-y-8">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Memoir
            </h1>
            <p>
              Have you ever had a gripping tale trapped inside of you? We assist
              you in creating an authentic journey that reflects your special
              encounters, acquired knowledge, and wisdom. With your memoir, you
              can move people, share your legacy, and make a lasting impression
              on the world.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <a
                href="#"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Click On This Chat Button and Get Our Assistance
              </a>
              <a
                href="tel: +1-(315)-417-3330"
                className="inline-block  bg-[#28a745] text-white font-medium py-3 hover:bg-gray-800 transition-colors px-5 rounded-full"
              >
                +1-(315)-417-3330
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComprehensiveMarketing;
