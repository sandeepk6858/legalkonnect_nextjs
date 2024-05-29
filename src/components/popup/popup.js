import React, { useState } from 'react';
import {Button} from "@nextui-org/react";

const Modal = () => {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <div>
       <Button className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]" color="primary" variant="Report Site" onClick={handleModal}>
        Report Site
      </Button>
      {/* <button
        type="button"
        className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]"
        onClick={handleModal}
      >
        Report Site
      </button> */}
      {openModal && (
        <div className="fixed z-[1] top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="w-[460px] bg-white shadow-lg py-[20px] px-[20px] rounded-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 pr-[10px] pt-[10px] text-[30px]"
              onClick={handleModal}
            >
              &times;
            </button>
            <form className='p-[20px]'>
            <h2 className='text-[20px] font-semibold mb-[30px] border-b-2 pb-[20px]'>Report Site</h2>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="issue"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Describe the Issue
                </label>
                <textarea
                  id="issue"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                ></textarea>
              </div>
              {/* <button
                type="submit"
                className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-medium inline-flex items-center leading-none "
              >
                Submit
              </button> */}
              <Button className="bg-orangeprimary rounded-[30px] !text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-medium inline-flex items-center leading-none " variant="Submit">
              Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
