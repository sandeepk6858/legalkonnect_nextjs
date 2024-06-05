

'use client'

import {Select, SelectItem } from "@nextui-org/select";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import { useState } from "react";

const Orders = () => {
  const [activeContracts, setActiveContracts] =useState(true)
  const [closedContracts, setClosedContracts]=useState(false)
  const [submittedJobs, setSubmittedJobs]= useState(false)
  console.log("activeContracts", activeContracts)

  function activeContractsHandler(){
    if(closedContracts === true || submittedJobs === true ){
    setActiveContracts(true)
    setClosedContracts(false)
    setSubmittedJobs(false)
    }
  }
  console.log("activeContracts", activeContracts)

  function closedContractsHandler(){
    if(activeContracts=== true || submittedJobs === true){
    setClosedContracts(true)
    setActiveContracts(false)
    setSubmittedJobs(false)
    }
  }
  function SubmittedJobsHandler(){
    if(activeContracts === true ||closedContracts === true){
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
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.12488 1.26764C3.8666 1.26764 2.84273 2.28217 2.84273 3.52447L2.75977 15.2257L4.00457 15.2346L4.08758 3.52905C4.08758 2.96846 4.55293 2.51244 5.12492 2.51244H17.6353V1.26764H5.12488Z" fill="#1359C3"></path>
                              <path d="M17.6348 1.26764C16.3307 1.26764 15.2697 2.32862 15.2697 3.6328V16.7656C15.2697 17.7149 14.4971 18.4876 13.5477 18.4876C12.5983 18.4876 11.8257 17.7149 11.8257 16.7656V15.251C11.8257 14.9073 11.5471 14.6286 11.2033 14.6286H0.622422C0.278633 14.6286 0 14.9073 0 15.251V16.7656C0 18.4015 1.3309 19.7324 2.9668 19.7324V18.4876C2.01723 18.4876 1.2448 17.7149 1.2448 16.7656V15.8734H10.5809V16.7655C10.5809 18.4014 11.9118 19.7323 13.5477 19.7323C15.1836 19.7323 16.5145 18.4014 16.5145 16.7655V7.03526H19.3776C19.7214 7.03526 20 6.75662 20 6.41284V3.63276C20 2.32862 18.939 1.26764 17.6348 1.26764ZM18.7552 5.79045H16.5145V3.63276C16.5145 3.0149 17.0172 2.51244 17.6348 2.51244C18.2525 2.51244 18.7552 3.01494 18.7552 3.63276V5.79045H18.7552Z" fill="#1359C3"></path>
                              <path d="M13.4018 18.4875H2.8418V19.7323H13.4018V18.4875Z" fill="#1359C3"></path>
                              <path d="M9.25227 4.73236H6.03648C5.6927 4.73236 5.41406 5.01099 5.41406 5.35478C5.41406 5.69857 5.6927 5.9772 6.03648 5.9772H9.25227C9.59605 5.9772 9.87469 5.69857 9.87469 5.35478C9.87469 5.01099 9.59602 4.73236 9.25227 4.73236Z" fill="#1359C3"></path>
                              <path d="M12.9867 7.22202H6.03648C5.6927 7.22202 5.41406 7.50065 5.41406 7.84444C5.41406 8.18823 5.6927 8.46686 6.03648 8.46686H12.9867C13.3305 8.46686 13.6091 8.18823 13.6091 7.84444C13.6091 7.50065 13.3305 7.22202 12.9867 7.22202Z" fill="#1359C3"></path>
                              <path d="M12.9867 9.71161H6.03648C5.6927 9.71161 5.41406 9.99024 5.41406 10.334C5.41406 10.6778 5.6927 10.9565 6.03648 10.9565H12.9867C13.3305 10.9565 13.6091 10.678 13.6091 10.334C13.6091 9.99024 13.3305 9.71161 12.9867 9.71161Z" fill="#1359C3"></path>
                              <path d="M12.9867 12.2013H6.03648C5.6927 12.2013 5.41406 12.4799 5.41406 12.8237C5.41406 13.1675 5.6927 13.4461 6.03648 13.4461H12.9867C13.3305 13.4461 13.6091 13.1675 13.6091 12.8237C13.6091 12.4799 13.3305 12.2013 12.9867 12.2013Z" fill="#1359C3"></path>
                          </svg>
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
                      <img className="h-6 w-6" src="https://legalkonnect.com/img/search_icon_grey-clr.svg" alt="img"></img>
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