import React from "react";
import { booksOne } from "../../constants";

const OurExperts = () => {
  return (
    <>
      <section className="container mx-auto text-center px-2 py-24">
        <h1 className="md:text-[52px] text-3xl text-[#28a745] font-bold px-10 pb-4 leading-tight">
          Dwell into Our Recent Book Publishing Projects!
        </h1>
        <p className="px-8 md:px-52 pb-8 text-gray-500 text-[20px] font-medium">
          Allow our professional book publishers to assist you in your literary
          endeavors.
        </p>
        <div className="flex flex-wrap md:justify-between justify-center w-full max-w-[1200px] gap-14 mx-auto">
          {booksOne.map((book, index) => (
            <img
              key={index}
              src={book}
              className="w-full max-w-[220px] md:w-auto"
              alt=""
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurExperts;
