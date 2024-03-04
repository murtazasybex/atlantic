import React from "react";
import { ctabg } from "../../assets/images";

const HireCompanyCTA = () => {
  return (
    <>
      <section
        className="py-24 px-4 text-white bg-cover bg-no-repeat bg-left md:bg-top relative"
        style={{ backgroundImage: `url(${ctabg})` }}
      >
        <div className="max-w-7xl mx-auto container">
          <div className="flex items-center justify-center">
            {/* Content */}
            <div className="flex-1 w-full max-w-[1200px] text-center items-center justify-center space-y-5">
              <h1 className="md:text-5xl text-2xl font-medium leading-16">
                Let's Work On Your
                <span className="text-[#28a745] font-extrabold px-3">
                  Next Story,
                </span>
                Hire Experts That Can Turn Ideas Into Books
              </h1>
              <p className="text-base mt-4">
                Connect with our writers to make your stories exceptional with
                our expertise. Your stories can become the next bestseller in
                the market.
              </p>

              <div className="mt-6 md:space-y-0 space-y-3">
                <a
                  href="#"
                  className="inline-block bg-[#28a745] text-white border-transparent py-2 px-5 rounded-full mr-4"
                >
                  Looking For A Publishing Partner? Hire Us Today!
                </a>
                <a
                  href="tel: +1-(315)-417-3330"
                  className="inline-block border-2 border-white text-white py-2 px-5 rounded-full"
                >
                  Call Us At +1-(315)-417-3330
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireCompanyCTA;
