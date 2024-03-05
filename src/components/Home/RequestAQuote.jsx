import React from "react";
import { email, phone } from "../../assets/images";

const RequestAQuote = () => {
  return (
    <>
      <section className="mx-auto container px-2 my-10">
        <h1 className="font-bold md:text-3xl text-xl italic text-center text-[#28a745]">
          Can't Reach Us?
        </h1>
        <form
          className=""
          action="https://leads.infinityprojectmanager.com/brand/atlanticbookpublisher/lead"
          method="GET"
        >
          <input
            type="hidden"
            name="brand_name"
            value="atlanticbookpublisher.com"
          />
          <input
            type="hidden"
            id="lead_area"
            name="lead_area"
            value="https://atlanticbookpublisher.com/"
          />
          <div className="flex flex-col md:flex-row justify-center w-full max-w-[1100px] mx-auto space-y-5 md:space-y-0 md:space-x-5 py-8">
            <input
              className="border-2 border-[#28a745] py-4 px-3 w-full font-normal outline-none"
              type="text"
              required
              name="name"
              placeholder="Name"
            />
            <input
              className="border-2 border-[#28a745] py-4 px-3 w-full font-normal outline-none"
              type="email"
              required
              name="email"
              placeholder="Email"
            />
            <input
              className="border-2 border-[#28a745] py-4 px-3 w-full font-normal outline-none"
              type="tel"
              required
              name="phone"
              maxLength={10}
              placeholder="Phone"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="inline-block bg-[#28a745] hover:bg-[#28a745]/90 font-semibold transition-colors text-white py-3 px-8 mr-4"
            >
              Best time to jump on a quick call:
            </button>
          </div>
        </form>
        {/* <div className="flex flex-col md:flex-row justify-around py-20">
          <h1 className="text-4xl font-bold text-center md:text-left md:mr-10">
            Email Us
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 pt-3">
            <img src={email} className="pt-8" alt="" />
            <div>
              <h1 className="font-bold text-2xl">
                For project inquiries only:
              </h1>
              <a
                href="mailto:info@atlanticbookpublisher.com"
                className="hover:text-[#28a745] transition-colors"
              >
                info@atlanticbookpublisher.com
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 pt-3">
            <img src={phone} className="pt-8" alt="" />
            <div>
              <h1 className="font-bold text-2xl">For other inquiries only:</h1>
              <a
                href="tel: +1-(315)-417-3330"
                className="hover:text-[#28a745] transition-colors"
              >
                +1-(315)-417-3330
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default RequestAQuote;
