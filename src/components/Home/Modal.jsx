import React from "react";
import { modalimg } from "../../assets/images";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img
          src={modalimg}
          className="w-full h-full rounded-lg max-w-[380px] object-cover max-h-[800px]"
          alt="/"
        />
        <div className="modalRight">
          <p
            className="closeBtn bg-[#28a745] px-2 py-0.5 border cursor-pointer text-white rounded-full flex items-center"
            onClick={onClose}
          >
            X
          </p>

          <div className="content">
            <h1 className="text-4xl font-bold">
              Save Upto 30% <br />
              <span className="text-[#28a745]">Limited Time Offer</span>
            </h1>
          </div>
          <form
            className="flex flex-col w-full max-w-[380px] mx-auto space-y-3"
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
            <input
              type="text"
              required
              className=" px-3 py-4 border border-gray-300 rounded-md"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              required
              className=" px-3 py-4 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="phone"
              required
              className=" px-3 py-4 border border-gray-300 rounded-md"
              placeholder="Phone Number"
              maxLength={10}
            />
            <textarea
              type="text"
              name="message"
              cols={8}
              rows={3}
              required
              className=" px-3 py-4 border border-gray-300"
              placeholder="Your Message"
            />
            <button
              type="submit"
              className={`inline-block bg-[#28a745] transition-opacity hover:bg-gray-700 text-white py-3 px-5 rounded-full`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
