import React, { useState } from 'react';
import { Tooltip, Link } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Textarea, Input } from "@nextui-org/react";


const MakeBidPopUp = () => {
    const [openModal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!openModal);
    };

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Choose Country"]));


    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const [selectedKeys2, setSelectedKeys2] = React.useState(new Set(["State"]));


    const selectedValue2 = React.useMemo(
        () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
        [selectedKeys2]
    );

    const variants = ["bordered",];

    return (
        <div>
            <Tooltip
                className="bg-orangeprimary p-[10px] text-white w-[150px]"
                content="Make a bid for this attorney to handle your case"
            >
                <Button
                    // href=""
                    // as={Link}
                    color="primary"
                    className="text-white w-[150px] btn420 h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[0px] rounded-[30px] font-[400] text-[18px]"
                    variant="Report Site" onClick={handleModal}>
                    Make a Bid
                </Button>
            </Tooltip>
            {openModal && (
                <div className='fixed z-[9999] top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 overflow-auto'>
                    <div className=" flex justify-center items-center overflow-y-auto py-[100px]" >
                        <div className="w-[700px] bg-white shadow-lg py-[20px] px-[20px] rounded-md relative">
                            <div className='  !bg-white '>
                                <button
                                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 pr-[10px] pt-[10px] text-[30px]"
                                    onClick={handleModal}
                                >
                                    &times;
                                </button>
                                <form className='p-[20px]'>
                                    <h2 className='text-[20px] font-semibold mb-[30px] border-b-2 pb-[20px]'>Case information</h2>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="issue"
                                            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                        >
                                            Title & Description
                                        </label>
                                        <Textarea
                                            isRequired
                                            label="Description"
                                            labelPlacement="outside"
                                            // placeholder="Enter your description"
                                            className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                            required
                                        />
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className="mb-5 w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                Country
                                            </label>
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="bordered"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
                                                        required

                                                    >
                                                        {selectedValue}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Single selection example"
                                                    variant="flat"
                                                    disallowEmptySelection
                                                    selectionMode="single"
                                                    selectedKeys={selectedKeys}
                                                    onSelectionChange={setSelectedKeys}
                                                    className='w-full'
                                                >
                                                    <DropdownItem key="text">Choose Country</DropdownItem>
                                                    <DropdownItem key="text">India</DropdownItem>
                                                    <DropdownItem key="text">Enland</DropdownItem>
                                                    <DropdownItem key="text">Single</DropdownItem>
                                                    <DropdownItem key="text">Enland</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="mb-5 w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                State
                                            </label>
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="bordered"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
                                                        required

                                                    >
                                                        {selectedValue2}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Single selection example"
                                                    variant="flat"
                                                    disallowEmptySelection
                                                    selectionMode="single"
                                                    selectedKeys={selectedKeys2}
                                                    onSelectionChange={setSelectedKeys2}
                                                    className='w-full'
                                                >
                                                    <DropdownItem key="text">State</DropdownItem>
                                                    <DropdownItem key="text">India</DropdownItem>
                                                    <DropdownItem key="text">Enland</DropdownItem>
                                                    <DropdownItem key="text">Single</DropdownItem>
                                                    <DropdownItem key="text">Enland</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className="mt-5 w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                Case Number
                                            </label>
                                            <div className="w-full flex flex-col gap-4 pro_input">
                                                {variants.map((variant) => (
                                                    <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                        <Input type="email" variant={variant} label="" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-5 w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                Name of the court
                                            </label>
                                            <div className="w-full flex flex-col gap-4 pro_input">
                                                {variants.map((variant) => (
                                                    <div key={variant} className="flex w-full py-0 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                        <Input type="email" variant={variant} label="" className="py-0" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 w-full ">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                        >
                                            Court address
                                        </label>
                                        <div className="w-full flex flex-col gap-4 pro_input">
                                            {variants.map((variant) => (
                                                <div key={variant} className="flex w-full py-0 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                    <Input type="email" variant={variant} label="" className="py-0" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <button
                type="submit"
                className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-bold inline-flex items-center leading-none "
              >
                Submit
              </button> */}
                                    {/* <Button className="bg-orangeprimary rounded-[30px] !text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-bold inline-flex items-center leading-none " variant="Submit">
                                Submit
                            </Button> */}

                                    <div className='bg-white'>
                                        <h2 className='text-[20px] font-semibold mb-[30px] border-b-2 pb-[20px]'>Payment Method :</h2>
                                        <div className='flex gap-2'>
                                            <input name="plan" type="radio" />
                                            <p> <b>By milestone</b><br />
                                                Divide you project into smaller segments, called milestones. You pay as milestones have been completed and approved by you.</p>
                                        </div>


                                        <div className='flex gap-3 items-center *: mt-[50px] mb-[50px]'>
                                            <h2 className='text-[20px] font-semibold '>Terms :</h2>
                                            <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity bg-[#eaf1fd] px-[15px] rounded-[20px] h-[40px] apppad" tabindex="0" role="link" href="#">Personal Injury Lawyer</a>
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="issue"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                Description
                                            </label>
                                            <Textarea
                                                isRequired
                                                label="Description"
                                                labelPlacement="outside"
                                                // placeholder="Enter your description"
                                                className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                                required
                                            />
                                        </div>
                                        <div className='flex gap-5'>
                                            <div className="mt-5 w-full">
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                                >
                                                    Amount*
                                                </label>
                                                <div className="w-full flex flex-col gap-4 pro_input">
                                                    {variants.map((variant) => (
                                                        <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                            <Input type="email" variant={variant} label="" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mt-5 w-full">
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                                >
                                                   Date*
                                                </label>
                                                <div className="w-full flex flex-col gap-4 pro_input">
                                                    {variants.map((variant) => (
                                                        <div key={variant} className="flex w-full py-0 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                            <Input type="email" variant={variant} label="" className="py-0" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 mt-[20px]'>
                                            <input name="plan" type="radio" />
                                            <p> <b>By milestone</b><br />
                                                Divide you project into smaller segments, called milestones. You pay as milestones have been completed and approved by you.</p>
                                        </div>
                                        <div className="mb-5 mt-[20px]">
                                            <label
                                                htmlFor="issue"
                                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                                            >
                                                Description
                                            </label>
                                            <Textarea
                                                isRequired
                                                label="Description"
                                                labelPlacement="outside"
                                                // placeholder="Enter your description"
                                                className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                                required
                                            />
                                        </div>

                                        {/* <button
                type="submit"
                className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-bold inline-flex items-center leading-none "
              >
                Submit
              </button> */}
                                        <div className='flex gap-2'>
                                            <Button className="bg-orangeprimary rounded-[30px] !text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-bold inline-flex items-center leading-none " variant="Submit">
                                                Close
                                            </Button>
                                            <Button className="bg-orangeprimary rounded-[30px] !text-[#fff] px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start text-[14px]font-bold inline-flex items-center leading-none " variant="Submit">
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MakeBidPopUp;
