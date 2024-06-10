'use client'

import React, { useState } from "react";
import {Select, SelectItem } from "@nextui-org/select";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import ArrowLeftSvg from "@/components/Icons/arrowLeftSvg";
import ArrowRightSvg from "@/components/Icons/arrowRightSvg";
import {Checkbox} from "@nextui-org/react";
import WorldWideSvg from "@/components/Icons/worldwideSvg";
import SearchSvg from "@/components/Icons/searchSvg";


const Create=()=>{
  const countryData = [{value:"country", label:"United State"}]
  const stateData = [{value:"state", label:"Choose state"}]
  
  const [firstPage,setFirstPage]= useState(true)
  const [secondPage, setSecondPage]= useState(false)
  const [thirdPage, setThirdPage]= useState(false)  
  const [forthpage, setFourthPage]= useState(false)
  const [isChecked, SetIsChecked] = useState(false)


    return(
        <section className="w-full max-w-[1250px] m-[auto] px-4 pt-4 gap-5 lg:flex  ">
            <div className="w-full  mx-[auto]  max-w-[600px] lg:max-w-[300px] ">
                <div className=" w-full max-w-[600px] lg:max-w-[300px] border border-lightgrey shadow-xl rounded-md ">
                    <div className="border-b border-lightgrey">
                        <h3 className="text-base font-medium text-bluesecondary p-5 ">Post a Job</h3>
                    </div>
                    <div className="p-5">
                        <ul className="pointer text-sm text-center ">
                            <li className="p-4 rounded-3xl bg-lightblue  text-blueprimary mb-2.5 ">   
                                <button>Title & Description</button>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5 ">
                                <button>Details & Payment</button>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5 ">
                                <button>Preferred Qualifications</button>
                            </li>
                            <li className="p-4 rounded-3xl bg-lightgrey  text-blackcolor mb-2.5">
                                <button>Qustions & Cover Letter</button>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>


            {firstPage && 
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
                        <Button onClick={()=>{setSecondPage(true), setFirstPage(false)}} 
                            className="text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor hover:bg-blueprimary flex items-center gap-1" 
                        >Next Step
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.54134 6.20833H9.45342L5.99676 9.665C5.72051 9.94125 5.72051 10.3946 5.99676 10.6708C6.27301 10.9471 6.71926 10.9471 6.99551 10.6708L11.6634 6.00291C11.7291 5.93738 11.7812 5.85954 11.8167 5.77385C11.8523 5.68817 11.8706 5.59631 11.8706 5.50354C11.8706 5.41077 11.8523 5.31891 11.8167 5.23322C11.7812 5.14753 11.7291 5.06969 11.6634 5.00416L7.00259 0.329162C6.93701 0.263583 6.85916 0.211563 6.77348 0.176072C6.68779 0.140581 6.59596 0.122314 6.50322 0.122314C6.41047 0.122314 6.31864 0.140581 6.23296 0.176072C6.14727 0.211563 6.06942 0.263583 6.00384 0.329162C5.93826 0.394741 5.88624 0.472594 5.85075 0.558277C5.81526 0.64396 5.79699 0.735795 5.79699 0.828538C5.79699 0.92128 5.81526 1.01311 5.85075 1.0988C5.88624 1.18448 5.93826 1.26233 6.00384 1.32791L9.45342 4.79166H1.54134C1.15176 4.79166 0.833008 5.11041 0.833008 5.5C0.833008 5.88958 1.15176 6.20833 1.54134 6.20833Z" fill="white"></path>
                            </svg>
                        </Button>      
                    </div>
                </div>
            }  
            {secondPage &&
                <div className="w-full max-w-[600px] m-[auto] mt-4 lg:mt-0 lg:max-w-[900px] border border-lightgrey shadow-xl rounded-md box-border">
                    <div className="px-7 pt-7 pb-3  border-b border-lightgrey">
                       <div className=" text-base font-semibold">
                          <h3 className=" mb-3 text-bluesecondary">Details</h3>
                          <h3 className="mb-3 text-grey">Who can See your job?</h3>
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
                    <div className="px-7 pt-7 pb-3  border-b border-lightgrey">
                        <div className="text-base font-semibold    " >
                          <div className="flex justify-between w-full gap-5 mb-3">
                                <div className="w-full mb-3">
                                    <h3 className="mb-3">legal Area <span className="text-bluesecondary">*</span></h3>
                                    <Autocomplete
                                        label=""
                                        placeholder="Choose legal area"
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
                                <div className="w-full ">
                                    <h3 className="mb-3">Project Duration  <span className="text-bluesecondary">*</span></h3>
                                    <Autocomplete
                                        label=""
                                        placeholder="Choose legal area"
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
                           <div className="mb-3">
                              <h3 className="mb-3">Attach documents (5max)</h3>
                              <div className="w-full border border-greysecondary flex justify-center items-center ">
                                <Button className="my-9 rounded-full bg-lightblue">Attach your file or drag & Drop</Button>
                              </div>
                           </div>
                           
                        </div>
                    </div>
                    <div className="px-7 pt-7 pb-3  border-b border-lightgrey">
                        <div className="text-base font-semibold    " >
                           <div className="flex justify-between w-full gap-5 mb-3">
                                <div className="w-full mb-3">
                                    <h3 className="mb-3">Payment <span className="text-bluesecondary">*</span></h3>
                                    <Autocomplete
                                        label=""
                                        placeholder="Choose payment type"
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
                                <div className="w-full ">
                                    <h3 className="mb-3">Project Type  <span className="text-bluesecondary">*</span></h3>
                                    <Autocomplete
                                        label=""
                                        placeholder="What type of project do you have?"
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
                           <div className=" text-base font-semibold">
                                <h3 className="mb-3 text-grey">Offer<span className="text-bluesecondary">*</span></h3>
                                <input className=" w-full outline-none border border-greysecondary mb-5 p-3 text-base" placeholder="$ offer"/>
                            </div>

                            <div className="w-full px-8 py-5 flex justify-end  gap-5 ">
                               <div className=" svgArrowLeft flex items-center gap-1  ">
                                  <ArrowLeftSvg width={'14px'} height={'14px'} stroke={"stroke-grey"} hover={"hover:stroke-bluesecondary"}/>
                                  <button onClick={()=>{setSecondPage(false), setFirstPage(true)}} className="text-grey text-sm hover:text-bluesecondary">Back</button>
                               </div>
                               <div className="">
                                    <Button onClick={()=>{setThirdPage(true), setSecondPage(false)} } 
                                        className="svgArrowRight text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor  hover:bg-grey flex items-center gap-1" 
                                    >Next Step
                                        <ArrowRightSvg  width={"14px"} height={"14px"} fill={" fill-white"} hover={"svgArrowRight"}/> 
                                    </Button>
                               </div>      
                            </div>
                        </div>
                    </div>
                </div>
            }
            {thirdPage &&
              <div className="w-full max-w-[600px] m-[auto] mt-4 lg:mt-0 lg:max-w-[900px] border border-lightgrey shadow-xl rounded-md box-border">
                    <div className="px-7 pt-7 pb-3  border-b border-lightgrey ">
                        <div className=" text-base font-semibold">
                            <h3 className=" mb-3 text-bluesecondary ">Preferred Qualifications</h3>
                        </div>
                        <div className="flex justify-between w-full gap-5 mb-3 text-base font-semibold">
                            <div className="w-full mb-5">
                                <h3 className="mb-3">Talent type <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose preferred Talent type"
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
                            <div className="w-full mb-5 ">
                                <h3 className="mb-3">Experience  <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Preferred Experience"
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
                        <div className="flex justify-between w-full gap-5 mb-3 text-base font-semibold">
                            <div className="w-full mb-5">
                                <h3 className="mb-3">Cases Completed <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Cases Amount"
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
                            <div className="w-full mb-5 ">
                                <h3 className="mb-3">Firm Size  <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Preferred Firm Size"
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
                        <div className="flex justify-between w-full gap-5 mb-3 text-base font-semibold">
                            <div className="w-full mb-5">
                                <h3 className="mb-3">Rating <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Preferred Rate"
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
                            <div className="w-full mb-5 ">
                                <h3 className="mb-3">Amount earned  <span className="text-bluesecondary">*</span></h3>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Preferred Amount"
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
                        <div className="w-full text-base font-semibold">
                         <h3 className="mb-3">Location</h3>

                          <div className="flex gap-10 mb-3">
                                <div className="flex font-normal">
                                    <Checkbox defaultSelected radius="none" className="mr-1"></Checkbox>
                                    <img src="https://legalkonnect.com/img/us-map-icon.svg" alt="USA Map"></img>
                                    <p className="ml-2">U.S only</p>
                                </div>
                                <div className="flex items-center font-normal">
                                    <Checkbox defaultSelected radius="none" className="mr-1"></Checkbox>
                                    <WorldWideSvg width={"17px"} height={"17px"} fill={"fill-bluesecondary"}/>
                                    <p className="ml-2">Worldwide</p>
                                </div>
                           </div>    
                        </div>

                        <div className=" mb-7 text-base font-semibold">
                            <h3 className="mb-3">Region or country preference (optional)</h3>
                            <p className="mb-5 font-normal">These location preferences will be displayed to attorneys and legal service providers, but anyone can submit proposals.</p>
                            <div className="flex items-center justify-evenly border border-greysecondary py-1 px-2 gap-2">
                                <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"}/>
                                <Autocomplete
                                    label=""
                                    placeholder="Choose Preferred Amount"
                                    defaultItems={countryData}
                                    labelPlacement="outside"
                                    className="w-full py-1 outline-none "
                                    style={{borderRadius: '0 !important'}}
                                    disableSelectorIconRotation
                                    // selectorIcon={<SelectorIcon />}
                                >
                                    {(item) => <AutocompleteItem key={item.value} className="">{item.label}</AutocompleteItem>}
                                </Autocomplete>
                           </div>
                        </div>
                        <div className="w-full px-8 py-5 flex justify-end gap-5 ">
                            <div className=" svgArrowLeft flex items-center gap-1  ">
                                <ArrowLeftSvg width={'14px'} height={'14px'} stroke={"stroke-grey"} hover={"hover:stroke-bluesecondary"}/>
                                <button onClick={()=>{setSecondPage(true), setThirdPage(false)}} className="text-grey text-sm hover:text-bluesecondary">Back</button>
                            </div>
                            <div className="">
                                <Button onClick={()=>{setFourthPage(true), setThirdPage(false)} } 
                                    className="svgArrowRight text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor  hover:bg-grey flex items-center gap-1" 
                                >Next Step
                                    <ArrowRightSvg  width={"14px"} height={"14px"} fill={" fill-white"} hover={"svgArrowRight"}/> 
                                </Button>
                            </div>      
                        </div>
                   </div>
               </div>
            }
            {forthpage &&
                <div className="w-full max-w-[600px] m-[auto] mt-4 lg:mt-0 lg:max-w-[900px] border border-lightgrey shadow-xl rounded-md box-border mb-10">
                    <div className="px-7 pt-7 pb-3  border-b border-lightgrey ">
                        <div className=" text-base font-semibold ">
                            <h3 className=" mb-3 text-bluesecondary ">Question & Cover Letter</h3>
                        </div>
                        <div className=" w-full mb-5 text-base font-semibold">
                            <h3 className="mb-3">Screening Questions (optional)</h3>
                            <textarea placeholder="Add your screening question" className="border border-lightgrey w-full p-4 font-medium" rows={3}></textarea>
                        </div>
                        <div className="w-full  text-base font-semibold">
                            <h3 className="mb-5">Or select from our suggested questions:</h3>
                            <div className="w-full font-normal ">  
                                <Checkbox  className="mb-3 flex items-start" radius="none" onClick={()=>{SetIsChecked(!isChecked)}} ><p className={` ${isChecked ? "text-bluesecondary" : "text-grey"}`}>Do you have any questions about the job description?</p></Checkbox>
                                <Checkbox  className="mb-3 flex items-start" radius="none" onClick={()=>{SetIsChecked(!isChecked)}} ><p className={` ${isChecked ? "text-bluesecondary" : "text-grey"}`}>Do you have any suggestion to make this project/case run successfully?</p></Checkbox>
                                <Checkbox  className="mb-3 flex items-start" radius="none" onClick={()=>{SetIsChecked(!isChecked)}} ><p className={` ${isChecked ? "text-bluesecondary" : "text-grey"}`}>What challenging part of this job are you most experienced in?</p></Checkbox>                                
                                <Checkbox  className="mb-3 flex items-start" radius="none" onClick={()=>{SetIsChecked(!isChecked)}} ><p className={` ${isChecked ? "text-bluesecondary" : "text-grey"}`}>Indicate 3 similar cases or projects that you have had like this one. What is your availability to work on my case? How long does it take you to respond to communications? Are there times when you do not respond to communication?</p></Checkbox>
                            </div>
                        </div>
                        <div className=" flex items-center ">
                            <Button onClick={()=>{setFourthPage(true), setThirdPage(false)}} className="svgArrowRight text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor  hover:bg-grey flex items-center gap-1" 
                            >Add questions 
                            </Button>
                            <p className="ml-5">You have added 0 out of 5 questions</p>
                        </div>
                        
                    </div>
                    <div className="pt-7 pb-2 px-7">
                        <Checkbox  className=" pt-8 mb-3" radius="none" ><p className={`${isChecked ? "text-bluesecondary" : "text-grey"}`}>Require a Cover letter</p></Checkbox>
                    </div>
                    <div className="w-full px-8 py-5 flex justify-end gap-5 ">
                        <div className=" svgArrowLeft flex items-center gap-1">
                            <ArrowLeftSvg width={'14px'} height={'14px'} stroke={"stroke-grey"} hover={"hover:stroke-bluesecondary"}/>
                            <button onClick={()=>{setThirdPage(true), setFourthPage(false)}} className="text-grey text-sm hover:text-bluesecondary">Back</button>
                        </div>
                        <div className="">
                            <Button 
                                className="svgArrowRight text-white bg-orangeprimary font-normal text-sm rounded-full px-3 py-3 cursor  hover:bg-grey flex items-center gap-1" 
                            >Next Step
                                <ArrowRightSvg  width={"14px"} height={"14px"} fill={" fill-white"} hover={"svgArrowRight"}/> 
                            </Button>
                        </div>      
                    </div>
                </div> 
            }   
            

        </section>
    )
}
export default Create;