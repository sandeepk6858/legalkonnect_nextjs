"use client";
import { useReducer, useState, useEffect } from 'react';
import { validateInput } from "@/components/lib/validation/form/profileSetting/attorneyCredentails";
import { Card, CardBody, Button } from "@nextui-org/react";
import { useSession } from '@/context/SessionContext';
import { toast } from 'react-hot-toast';
import SearchSvg from '@/components/Icons/searchSvg';

const BillingCard = () => {
    const [isCardSelected, setIsCardSelected] = useState(true);
    const [isBankSelected, setIsBankSelected] = useState(false);

    const handleCardCheckbox = () => {
        setIsCardSelected(true);
        setIsBankSelected(false);
    };

    const handleBankCheckbox = () => {
        setIsBankSelected(true);
        setIsCardSelected(false);
    };


    return (
        <Card>
            <CardBody>
                <div className="sm:p-[20px]">
                    <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Billing Methods
                    </h3>
                    <div className="flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                                checked={isCardSelected}
                                onChange={handleCardCheckbox}
                            />
                            <p className="text-[#474040] text-[16px]">
                                Credit or Debit Card
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                                checked={isBankSelected}
                                onChange={handleBankCheckbox}
                            />
                            <p className="text-[#474040] text-[16px]">
                                Bank Account
                            </p>
                        </div>
                    </div>
                    <div className="p-[10px] sm:p-[20px] border border-[#EBEBEB] rounded-[3px] mt-4">
                        <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                            Billing Address
                        </h3>
                        <div className="flex flex-col gap-3 flex-wrap">
                            <div className="flex flex-col gap-2 pt-3 w-full">
                                <label className="text-[#474040] text-base">
                                    Street Address
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                    <label className="text-[#474040] text-base">
                                        City
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                    <label className="text-[#474040] text-base">
                                        State
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                    <label className="text-[#474040] text-base">
                                        Postal Code
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                    <label className="text-[#474040] text-base">
                                        Country
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isCardSelected && (
                        <div className="p-[10px] sm:p-[20px] border border-[#EBEBEB] rounded-[3px] mt-4">
                            <div className="flex flex-col gap-3 flex-wrap">
                                <div className="flex flex-col gap-2 pt-3 w-full">
                                    <label className="text-[#474040] text-base">
                                        Card Number
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder="dTUxfZLAymIrWlOG"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                        <label className="text-[#474040] text-base">
                                            First Name
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                                placeholder="mGQoIkbz"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                        <label className="text-[#474040] text-base">
                                            Last Name
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                                placeholder="sWtQElDZ"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                        <label className="text-[#474040] text-base">
                                            Expires Month
                                        </label>
                                        <div>
                                            <input
                                                type="number"
                                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                                placeholder="MM"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                        <label className="text-[#474040] text-base">
                                            Expires Year
                                        </label>
                                        <div>
                                            <input
                                                type="number"
                                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                                placeholder="YY"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                        <label className="text-[#474040] text-base">
                                            Security Code
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                                placeholder="rkEAqaOZsIFg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isBankSelected && (
                        <div className="p-[10px] sm:p-[20px] mt-4">
                            <div className="flex items-center justify-between">
                                <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                                    Account Details
                                </h3>
                                <div>
                                    <Button
                                        radius="full"
                                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                    >
                                        Delete Account
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2 pt-3 w-full">
                                    <label className="text-[#474040] text-base">
                                        Bank Name*
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder="Bank Name"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full">
                                    <label className="text-[#474040] text-base">
                                        Account holder name*
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder="Name of account holder"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full">
                                    <label className="text-[#474040] text-base">
                                        Account number*
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder="Account number"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-3 w-full">
                                    <label className="text-[#474040] text-base">
                                        Routing number*
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                            placeholder="Routing number"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Button
                                        radius="full"
                                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                    >
                                        Verify Bank Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    )
}
export default BillingCard;