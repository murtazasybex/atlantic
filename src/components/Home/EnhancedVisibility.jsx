import React from "react";
import { enhance } from "../../assets/images";

const EnhancedVisibility = () => {
  return (
    <>
      <section className="container mx-auto px-2">
        {/* <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Why Choose Our Amazon Publishing Services?
        </h1> */}
        <div className="flex md:justify-evenly justify-center md:flex-row flex-col items-center my-10 mx-auto">
          <img
            src={enhance}
            className="hover:border-[#28a745] mb-5 md:mb-0 w-full max-w-[450px] hover:border-2 transition-colors shadow-xl"
            alt=""
          />
          <div className="w-full max-w-[700px] space-y-8">
            <h1 className="font-bold text-black md:text-5xl text-3xl">
              Enhanced Visibility and Reach
            </h1>
            <p>
              Choosing our Amazon Publishing Services opens up new avenues for
              your book to reach a wider audience. With Amazon's vast customer
              base and powerful marketing tools, we can help boost the
              visibility of your book, increase its discoverability, and
              maximize its potential for success. Our strategies are designed to
              enhance your book's presence and attract more readers.
            </p>
            <div className="mt-6 md:space-y-0 space-y-3">
              <a
                href="#"
                className="inline-block border-2 border-[#28a745] py-3 px-5 rounded-full mr-4"
              >
                Let’s Discuss Your Book Publishing Project
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

export default EnhancedVisibility;
