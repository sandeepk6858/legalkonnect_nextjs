
'use client'
import { useState } from "react";
import {Select, SelectItem } from "@nextui-org/select";
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

  return(
    <>
      <section className="bg-greytoolight w-full m-auto mb-6">
        <div className="max-w-[950px] px-4 mx-auto overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden">
          <div className="w-full flex justify-between flex-nowrap">
            <div className="py-3 pr-5  flex items-center text-base gap-2 font-semibold text-orangeprimary whitespace-nowrap border-r border-lightgrey ">
              <OrderSvg width={"20px"} height={"20px"} className="fill-current text-orangeprimary"/>
              <h5>My Orders</h5>
            </div>
            <div className="ml-7 border-r border-lightgrey ">
              <ul className="text-sm flex items-center justify-center whitespace-nowrap">
                <li className={`py-6 mr-7 ${activeContracts ? "text-orangeprimary border-b-2  border-orangeprimary hover:text-orangeprimary":"hover:text-greysecondary"}`}>
                  <button onClick={activeContractsHandler}>Active contracts</button>
                </li>
                <li className={`py-6 mr-7 ${ closedContracts ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary":"hover:text-greysecondary"}`}>
                  <button onClick={closedContractsHandler}>Closed contracts</button>
                </li>
                <li className={`py-6  mr-7 ${ submittedJobs ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary": "hover:text-greysecondary" }`}>
                  <button onClick={SubmittedJobsHandler}>Submitted Jobs</button>
                </li>    
              </ul>
            </div>
            <div className=" w-full flex py-3 ml-7 gap-8" >
              <div className="flex gap-2 py-3 align items-center ">
                <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"}/>
                <input className="outline-none w-14 text-lg bg-greytoolight" placeholder="Search"></input>
              </div>
              <div className="flex items-center gap-2 ">
                <label className="text-nowrap text-sm">Sort by</label>
                <Select
                  label=""
                  placeholder="By date "
                  selectionMode="multiple"
                  className="w-40 py-1  outline-none bg-white border border-greysecondary">
                  <SelectItem
                      className=" w-full" 
                      key={'first'}>
                      By date
                  </SelectItem>
                  <SelectItem 
                      className=" w-full"
                      key={'second'}>
                      By Price
                  </SelectItem>
                </Select>      
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