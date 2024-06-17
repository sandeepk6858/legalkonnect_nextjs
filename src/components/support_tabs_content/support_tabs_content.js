'use client'
import { useState } from 'react';
import { Link, Button } from "@nextui-org/react";
import Modal from '@/components/popup/popup';
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

const supporttabscontent = () => {
    const [activeTab, setActiveTab] = useState('step1');

    const renderContent = () => {
        switch (activeTab) {
            case 'step1':
                return <div className='px-[0px] xl:px-[100px]'>

                <div className="text-gray-600 body-font">
                  <div className="container px-[10px]  py-[30px] md:py-[50px] mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-2 mb-[10px] md:p-4  lg:w-1/3">
                        <div className="h-full bg-gray-100 shadow-lg bg-opacity-75 px-8 pt-16 py-16rounded-lg overflow-hidden relative">
                          <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">What is Lorem Ipsum?</h2>
                          <p className="leading-relaxed text-base text-grey mb-[40px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                      </div>
                      <div className="p-2 mb-[10px] md:p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 shadow-lg bg-opacity-75 px-8 pt-16 py-16rounded-lg overflow-hidden relative">
                          <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Where does it come from?</h2>
                          <p className="leading-relaxed text-base text-grey mb-[40px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu</p>
                        </div>
                      </div>
                      <div className="p-2 mb-[10px] md:p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 shadow-lg bg-opacity-75 px-8 pt-16 py-16rounded-lg overflow-hidden relative">
                          <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Why do we use it?</h2>
                          <p className="leading-relaxed text-base text-grey mb-[40px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>;
            case 'step2':
                return <div className='px-[0px] xl:px-[100px]'>

              <div className="text-gray-600 body-font">
                  <div className="container px-[10px] py-[30px] md:py-[50px] mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-2 mb-[10px] md:p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 shadow-lg bg-opacity-75 px-8 pt-16 py-16 rounded-lg overflow-hidden relative w-[310px]">
                          <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Question2</h2>
                          <h2 className="text-[16px] leading-[19px] text-grey font-[600] mb-[10px] mt-[30px]">Answer2</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>;
            case 'step3':
                return <div className='px-[0px] xl:px-[100px]'>

              <div className="text-gray-600 body-font">
                  <div className="container px-[10px] py-[30px] md:py-[50px] mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-2 mb-[10px] md:p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 shadow-lg bg-opacity-75 px-8 pt-16 py-16rounded-lg overflow-hidden relative">
                          <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">What is Lorem Ipsum?</h2>
                          <p className="leading-relaxed text-base text-grey mb-[40px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                </div>;
            default:
                return null;
        }
    };

    return (
      <section className="text-gray-600 body-font">
      <div className=" px-[10px] py-[60px] md:py-[80px] mx-auto flex flex-wrap flex-col">
        <div className='flex flex-wrap justify-center gap-[0px] sm:gap-[0px] md:gap-[0px] lg:gap-[40px] w-[100%] p-[15px] bg-gray-100'>
          <div className=' flex overflow-auto tabs_div'>
          <button className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start text-[16px] font-medium inline-flex items-center leading-none text-bluesecondary`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3 text-orangeprimary" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> Help Center </button>
          <div className="flex mx-auto">
            <button onClick={()=> setActiveTab('step1')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${ activeTab === 'step1' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900' } tracking-wider`} > Do you need help? </button>
            <button onClick={()=> setActiveTab('step2')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${ activeTab === 'step2' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900' } tracking-wider`} > Contact </button>
            <button onClick={()=> setActiveTab('step3')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${ activeTab === 'step3' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900' } tracking-wider`} > How can we help you today </button> 
          </div>
          </div>
         <div className='flex gap-[30px] button_tabs_right'>
          {/* <button className={`bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-medium inline-flex items-center leading-none `}> Report Site </button> */}
          <Modal />
            {/* <button className={`bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-medium inline-flex items-center leading-none `}> Contact Support </button> */}

            {/* <Button className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]" color="primary" variant="Report Site" onClick={''}>
            Contact Support
            </Button> */}

            <Button
              href="/contact-support"
              as={Link}
              color="primary"
              className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]"
            >
              Contact Support
            </Button>
         </div>
        </div>
        <div className="p-2 mb-[10px] md:p-4">{renderContent()}</div>
      </div>
    </section>
    );
};

export default supporttabscontent;
