import React from "react";
import { streamline } from "../../assets/images";

const StreamlinedPublishing = () => {
  return (
    <>
      <section className="container mx-auto py-20 px-2">
        {/* <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Amazon Publishing Services?
        </h1> */}
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-20 mx-auto">
          <div className="w-full max-w-[700px] space-y-8 mb-8 md:mb-0">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Streamlined Publishing Process
            </h1>
            <p>
              We at Book Writing Experts understand the importance of a smooth
              and efficient book publishing process. With our services, you can
              expect a streamlined workflow that simplifies the publishing
              journey. From manuscript formatting and editing to cover design
              and eBook conversion, we handle every aspect professionally,
              allowing you to focus on your writing while we take care of the
              technicalities.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <a
                href="#"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Chat Now!
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
            src={streamline}
            className="hover:border-[#28a745] w-full max-w-[400px] hover:border-2 transition-colors shadow-xl"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default StreamlinedPublishing;
