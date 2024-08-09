import React from 'react'
import {
    Input
} from "@nextui-org/react";

const RulingMotion = ({ }) => {
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2 sm:mt-5 sm:gap-[10px] bg-transparent">
            <Input
                label="Ruling on the Motion"
                placeholder="Select case ruling"
                labelPlacement="outside"
                className="max-w-xs border border-lightgrey rounded-xl bg-white"
            >
            </Input>
        </div>
    )
}

export default RulingMotion