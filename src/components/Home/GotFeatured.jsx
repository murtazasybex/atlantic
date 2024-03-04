import React from "react";
import { gotFeatured } from "../../constants";

const GotFeatured = () => {
  return (
    <>
      <section className="w-full bg-[#28a745] py-14">
        <div className="container mx-auto text-center">
          <h1 className="md:text-[52px] text-2xl text-black mx-auto w-full max-w-[1024px] font-bold leading-tight">
            Many Got Featured In Major Publications Just By Working With Us.
          </h1>
          <div className="flex flex-wrap md:justify-between justify-center w-full max-w-[1024px] gap-10 mx-auto py-5">
            {gotFeatured.map((featured, index) => (
              <img
                key={index}
                src={featured}
                className="w-full max-w-[200px] md:w-auto px-5 py-5 img-invert"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GotFeatured;
