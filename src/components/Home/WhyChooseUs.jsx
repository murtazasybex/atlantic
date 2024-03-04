import React from "react";
import { whychooseus } from "../../assets/images";

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto py-20 px-2">
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Amazon Publishing Services?
        </h1>
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-20 mx-auto">
          <div className="w-full max-w-[700px] space-y-8">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Prime-Quality and Expertise
            </h1>
            <p>
              Our Amazon Publishing Services are backed by a team of experienced
              professionals who have in-depth knowledge and expertise in the
              publishing industry. We are committed to delivering high-quality
              content that meets industry standards and exceeds your
              expectations. With our services, you can trust that your books
              will be handled with care and precision.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <a
                href="#"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Consult With Our Expert Team Now!
              </a>
              <a
                href="tel: +1-(315)-417-3330"
                className="inline-block  bg-[#28a745] text-white font-medium py-3 hover:bg-gray-800 transition-colors px-5 rounded-full"
              >
                +1-(315)-417-3330
              </a>
            </div>
          </div>
          <img
            src={whychooseus}
            className="hover:border-[#28a745] w-full max-w-[400px] hover:border-2 md:mt-0 mt-8 transition-colors shadow-xl"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
