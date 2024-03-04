import React from "react";
import {
  arrowdown,
  deployment,
  design,
  development,
  discussion,
} from "../../assets/images";

const OurServices = () => {
  return (
    <section className="py-24 px-2 bg-[#141d29]">
      <div className="container mx-auto">
        <h1 className="font-bold md:text-5xl text-3xl text-center text-white pb-5">
          Checkout Our Creative Ghostwriting Process
        </h1>
        <p className="text-white text-center w-full max-w-[1024px] mx-auto">
          Book Writing Experts proudly provides a comprehensive range of book
          publishing services. From the initial manuscript evaluation to final
          proofreading, and including steps such as detailed editing, layout
          design, and cover art creation, we've got you covered. We also offer
          guidance through the often complex world of distribution, marketing,
          and copyright registration. Our commitment is to deliver a
          professional, seamless service that allows your unique voice to reach
          readers worldwide. Entrust your literary journey to our expert team.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-7 my-10 w-full mx-auto">
          <div class="flip hover-transition">
            <div class="flip-content">
              <div class="flip-front flex flex-col items-center shadow-lg border border-white rounded-lg justify-center">
                <img
                  src={discussion}
                  className="w-full max-w-[60px] mb-3 img-invert"
                />
                <h1 className="text-white font-bold text-2xl">Development</h1>
              </div>
              <div class="flip-back flex flex-col items-center justify-center shadow-lg border-2 border-whtie rounded-lg">
                <h1 className=" text-white font-bold text-2xl pt-3">
                  Development
                </h1>
                <p className="text-sm text-white-700 p-3">
                  Your thoughts are turned into a fresh book by our skilled
                  writers. We bring your idea to life by doing in-depth
                  research- if necessary, creating an engaging story framework,
                  and creating likable characters and plots.
                </p>
              </div>
            </div>
          </div>
          <div class="flip">
            <div class="flip-content">
              <div class="flip-front flex flex-col items-center shadow-lg border border-white rounded-lg justify-center">
                <img
                  src={development}
                  className="w-full max-w-[60px] mb-3 img-invert"
                />
                <h1 className="text-white font-bold text-2xl">Design</h1>
              </div>
              <div class="flip-back flex flex-col items-center justify-center shadow-lg border-2 border-whtie rounded-lg">
                <h1 className=" text-white font-bold text-2xl pt-3">Design</h1>
                <p className="text-sm text-white-700 p-3">
                  Together, we come up with a design that effectively captures
                  the core of your narrative. This involves looking at
                  possibilities, offering input, and making sure the finished
                  design reflects your concept and appeals to readers.
                </p>
              </div>
            </div>
          </div>
          <div class="flip">
            <div class="flip-content">
              <div class="flip-front flex flex-col items-center shadow-lg border border-white rounded-lg justify-center">
                <img
                  src={design}
                  className="w-full max-w-[60px] mb-3 img-invert"
                />
                <h1 className="text-white font-bold text-2xl">Deployment</h1>
              </div>
              <div class="flip-back flex flex-col items-center justify-center shadow-lg border-2 border-whtie rounded-lg">
                <h1 className=" text-white font-bold text-2xl pt-3">
                  Deployment
                </h1>
                <p className="text-sm text-white-700 p-3">
                  After your book is polished and ready for publication, we walk
                  you through the steps. It can involve editing, formatting, and
                  helping you find a publisher or agent so that your tale
                  reaches the right people.
                </p>
              </div>
            </div>
          </div>
          <div class="flip">
            <div class="flip-content">
              <div class="flip-front flex flex-col items-center shadow-lg border border-white rounded-lg justify-center">
                <img
                  src={deployment}
                  className="w-full max-w-[60px] mb-3 img-invert"
                />
                <h1 className="text-white font-bold text-2xl">Discussion</h1>
              </div>
              <div class="flip-back flex flex-col items-center justify-center shadow-lg border-2 border-whtie rounded-lg">
                <h1 className=" text-white font-bold text-2xl pt-3">
                  Discussion
                </h1>
                <p className="text-sm text-white-700 p-3">
                  We start by working together, getting to know your narrative,
                  understanding its core, and making sure it speaks to the
                  people you want to reach. We're going to decide on the
                  project's parameters together and make sure your voice comes
                  clear in the story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
