'use client'
import { useState } from 'react';
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Link, Button } from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";




const balance = () => {

    const rows = [
        {
          key: "1",
          no: "1",
          Amount: "130.00 usd",
          PaymentMethod: "Stripe",
          Item: "Payment 130.00 usd",
          Date: "2024-05-16 04:18:13",
          Status: "Success",
        },
        {
            key: "2",
            no: "2",
            Amount: "130.00 usd",
            PaymentMethod: "Stripe",
            Item: "Payment 130.00 usd",
            Date: "2024-05-16 04:18:13",
            Status: "Success",
          },
       

      ];
      
      const columns = [
        {
          key: "no",
          label: "#",
        },
        {
          key: "Amount",
          label: "Amount",
        },
        {
          key: "PaymentMethod",
          label: "Payment Method",
        },
        {
         key: "Item",
          label: "Item",
        },
        {
            key: "Date",
            label: "Date",
        },
        {
            key: "Status",
            label: "Status",
        },
         
        
      ];
      
    return (
        <>
        <div className="relative">
            <JobSlider />
        </div>
        <div className="w-full mt-10 relative">
            <div className='bg-gray-100 py-4 lg:py-5 lg:absolute w-full px-4'>
                <p className='text-base text-blackcolor max-w-[1250px] text-start lg:text-right mx-auto'>Balance: <span className='font-bold'>$936</span></p>
            </div>
            <Tabs aria-label="Options" className='w-full max-w-[1250px] mx-auto lg:px-4 flex h-14 py-0 tabbalance'>
                <Tab key="Deposit" title="Deposit" className=' py-0 tabCustom' >
                <Card className='max-w-[1250px] mx-auto px-0 lg:px-4 mt-8 bg-transparent bottom-0 shadow-none'>
                    <CardBody className='overflow-y-visible'>
                    <form className="input-wrapper">
                    <Input
                        type="number"
                        label="Amount"
                        placeholder="$"
                        labelPlacement="outside"
                        className="text-base"
                    />
                    </form>
                    <h3 className='my-5 text-lg font-semibold text-blueprimary'>Choose your payment method</h3>
                    <div className='shadow-[1px_2px_8px_0px_#d7d7d7]'>
                    <Tabs aria-label="Options" className='w-full flex px-4 lg:px-[30px] pt-[10px] bg-transparent paymentatabs'>
                        <Tab key="Card" title="Card" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4 bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                             <form className='w-full flex justify-end'>
                             <Button color="greencolour" className="bg-greencolour text-white text-base  mt-5 font-normal cursor-pointer w-max rounded-md ">Checkout </Button> 
                             </form>
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="PayPal" title="PayPal" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4 bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                             <form className='w-full flex justify-end '>
                             <Button color="greencolour" className="bg-greencolour text-white text-base font-normal cursor-pointer w-max rounded-md  mt-5">Submit Payment </Button> 
                             </form>
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="Bank to Bank" title="Bank to Bank" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4  bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                            <form className=" ">
                               <div className=' max-w-[480px] flex flex-col gap-y-8'>
                               <div className='input-wrapper '>
                                    <Input
                                        type="text"
                                        label="Account holder name*"
                                        placeholder="Name of account holder"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='input-wrapper '>
                                    <Input
                                        type="number"
                                        label="Account number*"
                                        placeholder="Account number"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='input-wrapper'>
                                    <Input
                                        type="number"
                                        label="Routing number*"
                                        placeholder="Routing number"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                               </div>
                              <div className='w-full flex justify-end '>
                              <Button color="greencolour" className="bg-greencolour text-white text-base font-normal cursor-pointer w-max
                               mt-5 rounded-md ">Submit Payment </Button> 
                              </div>
                                </form>
                            
                            </CardBody>
                        </Card>  
                        </Tab>
                       
                    </Tabs>
                    </div>
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="Withdrawal" title="Withdrawal" className=' py-0 tabCustom'>
                <Card className='max-w-[1250px] mx-auto px-0 lg:px-4 mt-8 bg-transparent bottom-0 shadow-none'>
                    <CardBody className='overflow-y-visible'>
                    <form className="input-wrapper">
                    <Input
                        type="number"
                        label="Amount"
                        placeholder="$"
                        labelPlacement="outside"
                        className="text-base"
                    />
                    </form>
                    <h3 className='my-5 text-lg font-semibold text-blueprimary'>Choose your payout method</h3>
                    <div className='shadow-[1px_2px_8px_0px_#d7d7d7]'>
                    <Tabs aria-label="Options" className='w-full flex px-[30px] pt-[10px] bg-transparent paymentatabs'>
                        <Tab key="Card" title="Card" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4  bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                            <p className='mb-5 text-base font-semibold text-blueprimary'>We use a 256-bit SSL encryption to protect your payment information</p>
                            <form className=" ">
                               <div className='flex flex-wrap gap-y-8 justify-between'>
                               <div className='input-wrapper md:max-w-[48%] w-full'>
                                    <Input
                                        type="number"
                                        label="Card number*"
                                        placeholder="16 digits"
                                        labelPlacement="outside"
                                        className="text-base "
                                    />
                                </div>
                                <div className='input-wrapper md:max-w-[48%] w-full'>
                                    <Input
                                        type="number"
                                        label="Name on card*"
                                        placeholder="mGQoIkbz sWtQElDZ"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='flex gap-y-8 md:gap-4 flex-col md:flex-row md:max-w-[48%] w-full'>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="number"
                                                label="Expiry date* (Month)"
                                                placeholder="MM"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                        <div className='input-wrapper  w-full'>
                                            <Input
                                                type="number"
                                                label="Expiry date* (Year)"
                                                placeholder="YY"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                </div>
                                <div className='flex gap-4  md:max-w-[48%] w-full'>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="number"
                                                label="CVC/CVV*"
                                                placeholder="3 or 4 digits"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                 </div>
                                 <div className='flex gap-y-8 md:gap-4 flex-col md:flex-row md:max-w-[48%] w-full'>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="text"
                                                label="First Name*"
                                                placeholder="mGQoIkbz"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                        <div className='input-wrapper  w-full'>
                                            <Input
                                                type="text"
                                                label="Last Name*"
                                                placeholder="sWtQElDZ"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                </div>
                                <div className='flex gap-4  md:max-w-[48%] w-full'>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="date"
                                                label="Date of birth*"
                                                placeholder="3 or 4 digits"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                 </div>
                               </div>
                              <div className='w-full flex justify-end '>
                              <Button color="greencolour" className="bg-greencolour text-white text-base font-normal cursor-pointer w-max
                               mt-5 rounded-md ">Submit Payment </Button> 
                              </div>
                                </form>
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="PayPal" title="PayPal" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4 bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                            <form className=" ">
                               <div className='flex flex-wrap gap-y-8 justify-between'>
                               <div className='input-wrapper w-full'>
                                    <Input
                                        type="email"
                                        label="Email*"
                                        placeholder="Email"
                                        labelPlacement="outside"
                                        className="text-base "
                                    />
                                </div>
                               
                               </div>
                              <div className='w-full flex justify-end '>
                              <Button color="greencolour" className="bg-greencolour text-white text-base font-normal cursor-pointer w-max
                               mt-5 rounded-md ">Submit Payment </Button> 
                              </div>
                                </form>
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="Bank to Bank" title="Bank to Bank" className=' py-0 tabCustom bg-transparent' >
                        <Card className='mx-auto px-0 lg:px-4 bg-transparent  shadow-none'>
                            <CardBody className='py-[30px] '>
                            <form className=" ">
                               <div className=' max-w-[480px] flex flex-col gap-y-8'>
                               <div className='input-wrapper '>
                                    <Input
                                        type="text"
                                        label="Account holder name*"
                                        placeholder="Name of account holder"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='input-wrapper '>
                                    <Input
                                        type="number"
                                        label="Account number*"
                                        placeholder="Account number"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='input-wrapper '>
                                    <Input
                                        type="number"
                                        label="Routing number*"
                                        placeholder="Routing number"
                                        labelPlacement="outside"
                                        className="text-base"
                                    />
                                </div>
                                <div className='flex gap-y-8 lg:gap-4 flex-col lg:flex-row'>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="text"
                                                label="First Name*"
                                                placeholder="mGQoIkbz"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                        <div className='input-wrapper  w-full'>
                                            <Input
                                                type="text"
                                                label="Last Name*"
                                                placeholder="sWtQElDZ"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                </div>
                                <div className='flex gap-4  '>
                                       <div className='input-wrapper  w-full'>
                                            <Input
                                                type="date"
                                                label="Date of birth*"
                                                placeholder="3 or 4 digits"
                                                labelPlacement="outside"
                                                className="text-base"
                                            />
                                        </div>
                                 </div>
                               </div>
                              <div className='w-full flex justify-end '>
                              <Button color="greencolour" className="bg-greencolour text-white text-base font-normal cursor-pointer w-max
                               mt-5 rounded-md ">Submit Payment </Button> 
                              </div>
                                </form>
                            
                            </CardBody>
                        </Card>  
                        </Tab>
                    </Tabs>
                    </div>
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="Transactions" title="Transactions" className=' py-0 tabCustom'>
                <Card className='max-w-[1250px] mx-auto px-0 lg:px-4 mt-8 bg-transparent bottom-0 shadow-none'>
                    <CardBody className='overflow-y-visible'>
                   <div>
                   <Table aria-label="Example table with dynamic content" >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn className='text-base whitespace-nowrap' key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell className='text-base whitespace-nowrap'>{getKeyValue(item, columnKey)} </TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                    </Table>
                   </div>
                    </CardBody>
                </Card>  
                </Tab>
            </Tabs>
        </div>  
    </>
    );
};

export default balance;
