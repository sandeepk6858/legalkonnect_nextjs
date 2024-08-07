"use client";
import { useState, useEffect } from "react";
import { Card, CardBody} from "@nextui-org/react";

const ApiCard = () => {
    return (<Card>
        <CardBody>
            <div className="sm:p-[20px]">
                <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                    API
                </h3>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 pt-3 w-full">
                        <label className="text-[#474040] text-base">
                            API Token
                        </label>
                        <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="92*********************"
                        />
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
    )
}
export default ApiCard;