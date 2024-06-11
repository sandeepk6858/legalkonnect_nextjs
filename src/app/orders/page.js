
'use client'
import React from "react";
import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import SearchSvg from "@/components/Icons/searchSvg";
import OrderSvg from "@/components/Icons/orderSvg";



const Orders = () => {
  const [activeContracts, setActiveContracts] =useState(true)
  const [closedContracts, setClosedContracts]=useState(false)
  const [submittedJobs, setSubmittedJobs]= useState(false)
  

  function activeContractsHandler(){
    if(closedContracts === true || submittedJobs === true ){
    setActiveContracts(true)
    setClosedContracts(false)
    setSubmittedJobs(false)
    }
  }
  

  function closedContractsHandler(){
    if(activeContracts === true || submittedJobs === true ){
    setClosedContracts(true)
    setActiveContracts(false)
    setSubmittedJobs(false)
    }
  }
  function SubmittedJobsHandler(){
    if(activeContracts === true || closedContracts === true ){
      setSubmittedJobs(true)
      setActiveContracts(false)
      setClosedContracts(false)
    }
  }

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Default"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

  return(
    <>
      <section className="bg-greytoolight w-full m-auto mb-6">
        <div className="max-w-[950px] px-4 mx-auto overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden">
          <div className="w-full flex justify-between flex-nowrap">
            <div className="py-3 pr-5  flex items-center text-base gap-2 font-semibold text-orangeprimary whitespace-nowrap border-r border-lightgrey ">
              <OrderSvg width={"20px"} height={"20px"} className="fill-current text-orangeprimary"/>
              <h5>My Orders</h5>
            </div>
            <div className="ml-7 border-r border-lightgrey flex items-center">
              <ul className="text-sm flex justify-center whitespace-nowrap">
                <li className={`py-4 mr-7 ${activeContracts ? "text-orangeprimary border-b-2  border-orangeprimary  hover:text-orangeprimary":"hover:text-greysecondary"}`}>
                  <button onClick={activeContractsHandler}>Active contracts</button>
                </li>
                <li className={`py-4 mr-7 ${ closedContracts ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary":"hover:text-greysecondary"}`}>
                  <button onClick={closedContractsHandler}>Closed contracts</button>
                </li>
                <li className={`py-4  mr-7 ${ submittedJobs ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary": "hover:text-greysecondary" }`}>
                  <button onClick={SubmittedJobsHandler}>Submitted Jobs</button>
                </li>    
              </ul>
            </div>
            <div className=" w-full flex  ml-7 gap-8" >
              <div className="flex gap-2 py-3 align items-center "> 
                <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"}/>
                <input className="outline-none w-14 text-lg bg-greytoolight" placeholder="Search"></input>
              </div>              
              <div className="flex items-center gap-x-2.5 py-5 lg:py-0  ">
                <p className="text-sm font-normal text-blackcolor whitespace-nowrap">Sort by</p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="capitalize bg-gray-50 border-1 border-blackcolor rounded-none min-w-36 text-grey text-left flex justify-start "
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
                  >
                    <DropdownItem key="Default">Default</DropdownItem>
                    <DropdownItem key="By Date">By Date</DropdownItem>
                    <DropdownItem key="By Price">By Price</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>    

            </div>
          </div>
        </div>
      </section>
      {activeContracts &&
      <section className="px-6 flex justify-center flex-wrap">
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
      </section>
      }
      {closedContracts && 
      <section className="px-6 flex justify-center flex-wrap">
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
      </section>}
      {submittedJobs &&
      <section className="px-6 flex justify-center flex-wrap">
        <OrdersCard/>
      </section>}
    </>
  )
}
export default Orders;  