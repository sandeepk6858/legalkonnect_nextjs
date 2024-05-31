import React from "react";
import { Link, Button } from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/react";

const contactsupport = () => {
  return (
    <>

    <section className="bg-[#f9f9f9]">
      <div className="container px-[100px] py-[10px] mx-auto flex justify-end items-center mt-[50px]">
      <Button className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]" color="primary" variant="Contact Support" onClick={''}>
            Contact Support
            </Button>
      </div>
    </section>
    <section className="px-[15px]">
      <div className="container max-w-[700px] mx-auto mb-[50px] shadow-lg py-[40px] px-[15px] md:px-[40px] mt-[50px]">
      <h2 className="text-[24px] leading-[35px] font-[600] mb-[50px] text-bluesecondary text-center px-[20px]">Contact Support</h2>
      <form className="flex w-full flex-wrap flex-col md:flex-nowrap gap-4">
      <div>
      <label>Your email</label> 
      <Input
      isReadOnly
      type="email"
      variant="bordered"
      defaultValue="donald.phillips@example.com"
      className="w-full mt-[10px]"
    />
      </div>

      <div>
      <label className="">Your message</label>
      <Textarea
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

<Button
              href="#"
              as={Link}
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

export default contactsupport;
