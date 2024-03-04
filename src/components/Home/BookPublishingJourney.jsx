import React from "react";
import { line } from "../../assets/images";

const BookPublishingJourney = () => {
  return (
    <>
      <section className="container mx-auto text-center px-2 py-24">
        <div className="w-full max-w-[1024px] mx-auto">
          <h1 className="md:text-[52px] text-2xl text-[#28a745] font-bold px-10 pb-4 leading-tight">
            How Does Our Incredibly Crafted Book Publishing Journey Unfold?
          </h1>
          <p className="pb-8 text-gray-500">
            Join us on a streamlined journey from manuscript to masterpiece. Our
            process includes refining narratives, crafting compelling visuals,
            meticulous book preparation, and handling distribution, marketing,
            and copyright tasks. Discover the elegance of our efficient book
            publishing process, designed to make your literary vision a global
            reality.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-evenly items-center">
          {/* col1 */}
          <div>
            <div className="border border-[#cbcbcb] py-12 px-3 w-full max-w-[500px] hover-transition">
              <h1 className="font-semibold text-xl pb-2">
                Manuscript Assessment
              </h1>
              <p className="text-sm text-gray-700">
                Your journey begins with us diving into your raw manuscript. Our
                dedicated team diligently assesses your work, identifying its
                strengths and areas for improvement.
              </p>
            </div>
            <h1 className="font-semibold text-[#28a745] text-5xl text-right py-8">
              02
            </h1>
            <div className="border border-[#cbcbcb]  py-12 px-3 w-full max-w-[500px] hover-transition">
              <h1 className="font-semibold text-xl pb-2">Design and Layout</h1>
              <p className="text-sm text-gray-700">
                Once the editing phase is complete, our talented designers step
                in. They artistically bring your book to life, creating an
                engaging layout and an impactful cover that echoes your unique
                voice.
              </p>
            </div>
            <h1 className="font-semibold text-[#28a745] text-5xl text-right py-8">
              04
            </h1>
            <div className="border border-[#cbcbcb] py-12 px-3 w-full max-w-[500px] hover-transition">
              <h1 className="font-semibold text-xl pb-2">
                Distribution, Marketing, and Copyright
              </h1>
              <p className="text-sm text-gray-700">
                Here comes the moment you wait for the most! Your masterpiece is
                finally ready to reach the masses. We navigate the complexities
                of distribution, craft strategic marketing plans, and register
                the copyright, ensuring your book makes its mark in the literary
                world.
              </p>
            </div>
          </div>
          {/* col2 */}
          <img src={line} className="md:flex hidden line-img h-full" alt="" />
          {/* col3 */}
          <div>
            <h1 className="font-semibold text-[#28a745] text-5xl text-left py-8">
              01
            </h1>
            <div className="border border-[#cbcbcb] py-12 px-3 w-full max-w-[500px] hover-transition">
              <h1 className="font-semibold text-xl pb-2">
                Editing and Refinement
              </h1>
              <p className="text-sm text-gray-700">
                Your words are then entrusted to our skilled book editors, who
                meticulously refine your narrative, ensuring optimal clarity,
                coherence, and compelling storytelling.
              </p>
            </div>
            <h1 className="font-semibold text-[#28a745] text-5xl text-left py-8">
              03
            </h1>
            <div className="border border-[#cbcbcb] py-12 px-3 w-full max-w-[500px] hover-transition">
              <h1 className="font-semibold text-xl pb-2">Book Preparation</h1>
              <p className="text-sm text-gray-700">
                We then prepare your book for publishing. Every detail is
                scrutinized to align with industry standards, maintaining the
                highest level of quality.
              </p>
            </div>
            <h1 className="font-semibold text-[#28a745] text-5xl text-left py-14">
              05
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookPublishingJourney;
