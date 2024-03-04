import React from "react";
import { ctabg } from "../../assets/images";

const CTAThree = () => {
  return (
    <>
      <section
        className="py-24 px-4 text-white bg-cover bg-no-repeat bg-left md:bg-top relative"
        style={{ backgroundImage: `url(${ctabg})` }}
      >
        <div className="max-w-7xl mx-auto container">
          <div className="flex items-center justify-center">
            {/* Content */}
            <div className="flex-1 w-full max-w-[1040px] text-center items-center justify-center space-y-5 leading-10">
              <h1 className="md:text-6xl text-2xl font-medium leading-16">
                Convert Your Idea It into <br />
                <span className="text-[#28a745] font-extrabold px-3">
                  Best Publishing Services
                </span>
              </h1>
              <p className="text-base mt-4">
                Your work is over after creating a masterpiece. Let us take the
                lead from here. Our Atlantic publishing services include the
                three crucial areas of the publishing process: Production,
                Marketing, and Distribution. As the best publishers, our
                experience lies in publishing many books by professional
                writers. And our publishing experts have upgraded many authors
                to published book authors universally. It’s time for you to get
                famous!
              </p>
              <div className="mt-6 md:space-y-0 space-y-3">
                <a
                  href="#"
                  className="inline-block bg-[#28a745] text-white py-2 border-transparent px-5 rounded-full mr-4"
                >
                  Chat With Our Expert Now!
                </a>
                <a
                  href="tel: +1-(315)-417-3330"
                  className="inline-block border-2 border-white text-white py-2 px-4 rounded-full"
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

export default CTAThree;
