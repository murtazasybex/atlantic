import React, { useState } from "react";
import Modal from "./Modal";

const CTAOne = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="mx-auto container py-10 px-2">
        <div className="flex flex-col md:flex-row items-center flex-wrap justify-center">
          <div className="w-full max-w-[650px] space-y-8 mb-8 md:mb-0 md:mr-8">
            <h1 className="text-black md:text-5xl text-2xl font-bold leading-10">
              Choose Our{" "}
              <span className="text-[#28a745]">Book Publishing Company</span>{" "}
              and Expand Your Reach in the Book Realm!
            </h1>
            <p className="text-base mt-4">
              Ready to turn the page on your publishing dreams? Let us write
              your success story together! Choose our book publishing company
              and let your words come to life. Start your literary journey now!
            </p>

            <div className="mt-6 space-x-3 flex flex-col sm:flex-row items-center">
              <button
                onClick={() => setOpenModal(true)}
                className="inline-block bg-[#28a745] text-white py-4 px-4 rounded-full mb-3 sm:mb-0"
              >
                Get a Free Proposal
              </button>
              <Modal open={openModal} onClose={() => setOpenModal(false)} />

              <a
                href="tel: +1-(312)-765-7097"
                className="inline-block border-gray-700 text-gray-700 border-2 transition-colors py-4 px-4 rounded-full"
              >
                Call at +1-(312)-765-7097
              </a>
            </div>
          </div>
          <div className="border border-[#28a745] shadow-xl md:mt-10 rounded-lg px-14 pt-6">
            <h1 className="text-2xl text-[#28a745] italic font-bold text-center">
              Can't Reach Us?
            </h1>
            <p className="text-base italic text-center">
              Drop your details, and we'll soon respond to your inquiry!
            </p>
            <form
              className="space-y-8 py-10"
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
              <div className="border-b py-5">
                <input
                  type="text"
                  required
                  name="name"
                  className="outline-none w-full font-normal"
                  placeholder="Full Name:"
                />
              </div>
              <div className="border-b py-5">
                <input
                  type="email"
                  required
                  name="email"
                  className="outline-none w-full font-normal"
                  placeholder="Email Address:"
                />
              </div>
              <div className="border-b py-5">
                <input
                  type="tel"
                  required
                  name="phone"
                  maxLength={10}
                  className="outline-none w-full font-normal"
                  placeholder="Phone Number:"
                />
              </div>
              <div className="border-b pt-3 pb-14">
                <input
                  type="text"
                  name="brief"
                  className="outline-none w-full font-normal"
                  required
                  placeholder="Your project brief:"
                />
              </div>
              <button
                type="submit"
                className="inline-block bg-[#28a745] font-semibold text-center text-white py-2 px-5 w-full rounded-full"
              >
                Best time to jump on a quick call:
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
