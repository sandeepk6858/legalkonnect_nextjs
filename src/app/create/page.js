'use client'
import Link from "next/link";
import React from "react";
import {Select, SelectItem } from "@nextui-org/select";

import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";


const Create=()=>{
  const countryData = [{value:"country", label:"United State"}]
  const stateData = [{value:"state", label:"Choose state"}]

    return(
        <section className="w-full max-w-[1250px] m-[auto] px-4 pt-4 gap-5 lg:flex  ">
            <div className="w-full  mx-[auto]  max-w-[600px] lg:max-w-[300px] ">
                <div className=" w-full max-w-[600px] lg:max-w-[300px] border border-lightgrey shadow-xl rounded-md ">
                    <div className="border-b border-lightgrey">
                        <h3 className="text-base font-medium text-bluesecondary p-5 ">Post a Job</h3>
                    </div>
                    <div className="p-5">
                        <ul className="pointer text-sm text-center ">
                            <li className="p-4 rounded-3xl bg-blue-100  text-blueprimary mb-2.5 ">   
                                <Link href={""}>Title & Description</Link>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5 ">
                                <Link href={""}>Details & Payment</Link>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5 ">
                                <Link href={""}>Preferred Qualifications</Link>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5">
                                <Link href={""}>Qustions & Cover Letter</Link>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[600px] m-[auto] mt-4 lg:mt-0 lg:max-w-[900px] border border-lightgrey shadow-xl rounded-md box-border">
                <div className="px-7 pt-7 pb-10  border-b border-lightgrey">
                    <div className="text-base font-semibold	">
                    <h3 className="  mb-3 text-bluesecondary">Title & Description</h3>
                    <h3 className="  mb-3 text-grey">Heading <span className ="text-bluesecondary">*</span></h3>
                    <textarea className="p-4 font-medium outline-none border border-greysecondary w-full mb-2.5" rows={4}></textarea>
                    <h3 className="mb-3">Job Description <span className ="text-bluesecondary">*</span></h3>
                    <textarea className="p-4 font-medium outline-none border border-greysecondary w-full" rows={6}></textarea>
                    </div>
                </div>
                <div className=" w-full px-7 pt-7 pb-7 border-b border-lightgrey    ">
                    <div className="text-base font-semibold w-full	">
                    <h3 className="mb-2.5">Add Specialization <span className ="text-bluesecondary">*</span></h3>
                        <div className="w-full ">
                            <Select
                                label=""
                                placeholder="Choose Specialization "
                                selectionMode="multiple"
                                className="w-full  py-1  outline-none bg-white border border-greysecondary">
                                
                                <SelectItem
                                   className=" w-full" 
                                   key={'first'}>
                                    Corporate
                                </SelectItem>
                                <SelectItem 
                                   className=" w-full"
                                   key={'second'}>
                                    Criminal
                                </SelectItem>
                                <SelectItem 
                                   className=" w-full"
                                   key={'third'}>
                                    personal Injury
                                </SelectItem>
                                
                            </Select>
                        </div>
                    </div>
                </div>
                <div className=" w-full px-7 pt-7 mb-5">
                    <div className="w-full">
                        <h3 className="text-base font-semibold mb-3">Country</h3>
                        <Autocomplete
                            label=""
                            placeholder="Choose Country"
                            defaultItems={countryData}
                            labelPlacement="outside"
                            className="w-full py-1 outline-none border border-greysecondary"
                            style={{borderRadius: '0 !important'}}
                            disableSelectorIconRotation
                            // selectorIcon={<SelectorIcon />}
                            >
                            {(item) => <AutocompleteItem key={item.value} className="">{item.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>
                <div className=" w-full px-7 mb-5">
                    <div className="w-full">
                        <h3 className="text-base font-semibold mb-3">State</h3>
                        <Autocomplete
                            label=""
                            placeholder="Choose State"
                            defaultItems={stateData}
                            labelPlacement="outside"
                            className="w-full py-1 outline-none border border-greysecondary"
                            style={{borderRadius: '0 !important'}}
                            disableSelectorIconRotation
                            // selectorIcon={<SelectorIcon />}
                            >
                            {(item) => <AutocompleteItem key={item.value} className="">{item.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>
                <div className=" w-full px-7 mb-5">
                    <div className="w-full">
                        <h3 className="text-base font-semibold mb-3">Country</h3>
                        <Autocomplete
                            label=""
                            placeholder="Choose Country"
                            defaultItems={countryData}
                            labelPlacement="outside"
                            className="w-full py-1 outline-none border border-greysecondary"
                            style={{borderRadius: '0 !important'}}
                            disableSelectorIconRotation
                            // selectorIcon={<SelectorIcon />}
                            >
                            {(item) => <AutocompleteItem key={item.value} className="">{item.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>
                <div className="w-full px-7 mb-5 border-none">
                    <h3 className=" text-base font-semibold mb-3">Case Number</h3>
                    <input className=" w-full outline-none border border-greysecondary p-3"/>
                </div>
                <div className="w-full px-7 mb-5 border-none">
                    <h3 className=" text-base font-semibold mb-3">Court Name</h3>
                    <input className=" w-full outline-none border border-greysecondary p-3"/>
                </div>
                <div className="w-full px-7 pb-3  border-b border-lightgrey">
                    <h3 className=" text-base font-semibold mb-3">Court Address</h3>
                    <input className=" w-full outline-none border border-greysecondary mb-5 p-3"/>
                </div> 
                <div className="w-full px-8 py-5 flex justify-end">
                    <Button 
                        className="text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor hover:bg-blueprimary flex items-center gap-1" 
                    >Next Step
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54134 6.20833H9.45342L5.99676 9.665C5.72051 9.94125 5.72051 10.3946 5.99676 10.6708C6.27301 10.9471 6.71926 10.9471 6.99551 10.6708L11.6634 6.00291C11.7291 5.93738 11.7812 5.85954 11.8167 5.77385C11.8523 5.68817 11.8706 5.59631 11.8706 5.50354C11.8706 5.41077 11.8523 5.31891 11.8167 5.23322C11.7812 5.14753 11.7291 5.06969 11.6634 5.00416L7.00259 0.329162C6.93701 0.263583 6.85916 0.211563 6.77348 0.176072C6.68779 0.140581 6.59596 0.122314 6.50322 0.122314C6.41047 0.122314 6.31864 0.140581 6.23296 0.176072C6.14727 0.211563 6.06942 0.263583 6.00384 0.329162C5.93826 0.394741 5.88624 0.472594 5.85075 0.558277C5.81526 0.64396 5.79699 0.735795 5.79699 0.828538C5.79699 0.92128 5.81526 1.01311 5.85075 1.0988C5.88624 1.18448 5.93826 1.26233 6.00384 1.32791L9.45342 4.79166H1.54134C1.15176 4.79166 0.833008 5.11041 0.833008 5.5C0.833008 5.88958 1.15176 6.20833 1.54134 6.20833Z" fill="white"></path>
                        </svg>
                    </Button>      
                </div>
            </div>
        </section>
    )
}
export default Create;