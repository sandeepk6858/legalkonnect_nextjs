"use client";
import { useState, useReducer } from 'react';
import Link from "next/link";
import { validateInput } from "@/components/lib/validation/form/register";
import FormField from './filed';
import RegisterUser from '@/actions/user/register';
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

const ResetPaswordCard = () => {

    return (
        <Card>
            <CardBody>
                <div className="sm:p-[20px]">
                    <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Password
                    </h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                            <label className="text-[#474040] text-base">
                                Current password
                            </label>
                            <input
                                type="password"
                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                            <label className="text-[#474040] text-base">
                                New password
                            </label>
                            <input
                                type="password"
                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                            <label className="text-[#474040] text-base">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                placeholder=""
                            />
                        </div>
                        <div className="pt-4">
                            <Button
                                radius="full"
                                className="bg-orangeprimary text-white text-[14px]"
                            >
                                Change Password
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
export default ResetPaswordCard;