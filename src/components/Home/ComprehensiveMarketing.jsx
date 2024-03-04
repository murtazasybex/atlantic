import React from "react";
import { comprehensive } from "../../assets/images";

const ComprehensiveMarketing = () => {
  return (
    <>
      <section className="container mx-auto px-2">
        {/* <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Amazon Publishing Services?
        </h1> */}
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-10 mx-auto">
          <img
            src={comprehensive}
            className="hover:border-[#28a745] w-full max-w-[450px] mb-8 md:mb-0 hover:border-2 transition-colors shadow-xl"
            alt=""
          />
          <div className="w-full max-w-[700px] space-y-8">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Comprehensive Marketing Support
            </h1>
            <p>
              Our Amazon Publishing Services go beyond just publishing your
              book. We offer comprehensive marketing support to help you build a
              strong author platform and promote your work effectively. Our
              marketing strategies include targeted advertising, social media
              campaigns, email marketing, and more, tailored to your specific
              audience and genre. We strive to maximize your book's exposure and
              generate buzz in the competitive publishing landscape.
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
