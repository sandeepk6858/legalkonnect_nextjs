import React from 'react'
import {
    Select,
    SelectItem
} from "@nextui-org/react";

export default function StatesFilter({ data }) {

    console.log('STATESdata', data)
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
            <Select
                label={`States (${data.length})`}
                placeholder="Select a State"
                labelPlacement="outside"
                className="max-w-xs"
            >
                {data.map((value) => (
                    <SelectItem key={value.key}>{value.state}</SelectItem>
                ))}
            </Select>
        </div>
    )
}
