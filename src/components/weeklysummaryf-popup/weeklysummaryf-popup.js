"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Selectbox from "../selectbox/selectbox";
import Link from "next/link";
import FilterSvg from "../Icons/filterSvg";

const Weeklysummaryfpopup = () => {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <div>
      <Button
        href=""
        className="text-white btn420 flex justify-center items-center bg-orangeprimary py-[15px] px-[15px] rounded-[30px] font-[400] text-[18px]"
        color="primary"
        variant="Report Site"
        onClick={handleModal}
      >
        {" "}
        {/* <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.666 5.5L1.33268 5.5"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 10.1667L1.33333 5.49999L6 0.83332"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg> */}
        <FilterSvg width={`20px`} height={`20px`} fill={`white`} />
        Filters
      </Button>
      {openModal && (
        <div className="fixed z-[1] top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="w-[600px] bg-white shadow-lg py-[20px] px-[20px] rounded-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 pr-[10px] pt-[10px] text-[30px]"
              onClick={handleModal}
            >
              &times;
            </button>
            <form className="p-[20px]">
              <h2 className="text-[20px] font-semibold mb-[30px] border-b-2 pb-[20px]">
                Display options
              </h2>

              <div className="flex">
                <div className="w-1/2">
                  <h3 className="text-[18px] font-medium pb-[20px]">Show</h3>
                  <ul>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Contract</span>
                    </li>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Client</span>
                    </li>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Memo</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h3 className="text-[18px] font-medium pb-[20px]">
                    Grouped by
                  </h3>
                  <ul>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Day</span>
                    </li>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Week</span>
                    </li>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">Month</span>
                    </li>
                    <li className="flex gap-3 items-center mb-2">
                      <input name="plan" type="radio" />
                      <span className="text-[15px] leading-[24px] font-[500]">All time</span>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="mt-[30px]">
              <h3 className="text-[18px] font-medium pb-[15px]">
              Customize columns
                  </h3>
              <Selectbox />
              </div>
              <div className="flex items-center ">
              <Button
                className="!text-orangeprimary mt-[60px] rounded-[30px] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px] font-semibold inline-flex items-center leading-none "
                variant="Submit"
              >
                Cancel
              </Button>
              <Button
                className="bg-orangeprimary mt-[60px] rounded-[30px] !text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px] font-semibold inline-flex items-center leading-none "
                variant="Submit"
              >
                Save
              </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weeklysummaryfpopup;
