'use client'
import { useState } from 'react';
import { Link, Button, Input, Textarea } from "@nextui-org/react";
import Modal from '@/components/popup/popup';
import { submitForm } from '@/actions/contact-support/submitform';

const ContactSupport = () => {
  const [activeTab, setActiveTab] = useState('step1');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailPrompt, setEmailPrompt] = useState(null);

  const handleSubmit = async (event) => {
    setEmailPrompt(null);
    event.preventDefault();
    try {
      const result = await submitForm(email, message);
      console.log(result)
      if (result.success) {
        setEmailPrompt('Email sent successfully');
        // Reset form fields
        setEmail('');
        setMessage('');
      } else {
        setEmailPrompt('Failed to send email');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setEmailPrompt('Failed to send email');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'step1':
        return <div className='px-[0px] xl:px-[100px]'></div>;
      case 'step2':
        return <div className='px-[0px] xl:px-[100px]'></div>;
      case 'step3':
        return <div className='px-[0px] xl:px-[100px]'></div>;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className=" px-[10px] py-[40px] md:py-[40px] mx-auto flex flex-wrap flex-col">
          <div className='flex flex-wrap justify-center gap-[0px] sm:gap-[0px] md:gap-[0px] lg:gap-[40px] w-[100%] p-[15px] bg-gray-100'>
            <div className=' flex overflow-auto tabs_div'>
              <button className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start text-[16px] font-medium inline-flex items-center leading-none text-bluesecondary`}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3 text-orangeprimary" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> Help Center </button>
              <div className="flex mx-auto">
                <button onClick={() => setActiveTab('step1')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${activeTab === 'step1' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900'} tracking-wider`} > Do you need help? </button>
                <button onClick={() => setActiveTab('step2')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${activeTab === 'step2' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900'} tracking-wider`} > Contact </button>
                <button onClick={() => setActiveTab('step3')} className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${activeTab === 'step3' ? 'bg-gray-100 border-bluesecondary text-bluesecondary' : 'border-gray-200 hover:text-gray-900'} tracking-wider`} > How can we help you today </button>
              </div>
            </div>
            <div className='flex gap-[30px] button_tabs_right'>
              <Modal />
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
      <section className="px-[15px]">
        <div className="container max-w-[700px] mx-auto mb-[50px] shadow-lg py-[40px] px-[15px] md:px-[40px] mt-[0px]">
          <h2 className="text-[24px] leading-[35px] font-[600] mb-[50px] text-bluesecondary text-center px-[20px]">
            Contact Support
          </h2>

          <form className="flex w-full flex-wrap flex-col md:flex-nowrap gap-4" onSubmit={handleSubmit}>
            <div>
              <label>Your email</label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="bordered"
                placeholder="donald.phillips@example.com"
                className="w-full mt-[10px]"
              />
            </div>

            <div>
              <label>Your message</label>
              <Textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="bordered"
                placeholder="Write about your issue here..."
                disableAnimation
                disableAutosize
                classNames={{
                  base: "w-full",
                  input: "resize-y min-h-[150px]",
                }}
                className="mt-[10px]"
              />
            </div>
            {emailPrompt && (
              <div className={`mt-4 p-4 ${emailPrompt.includes('successfully') ? 'bg-green-200' : 'bg-red-200'} text-${emailPrompt.includes('successfully') ? 'green-700' : 'red-700'} rounded`}>
                {emailPrompt}
              </div>
            )}
            <Button
              type="submit"
              color="primary"
              className="text-white w-[150px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[20px] rounded-[30px] font-[400] text-[18px]"
            >
              Send
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSupport;
