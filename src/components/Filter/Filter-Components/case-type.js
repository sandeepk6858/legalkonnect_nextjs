import React from 'react'
import {
    Select,
    SelectItem
} from "@nextui-org/react";

export default function CaseTypeFilter({ transcriptTypes }) {
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
            <Select
                label={`Type of case (${transcriptTypes.length})`}
                placeholder="Choose preferred case"
                labelPlacement="outside"
                className="max-w-xs"
            >
                {transcriptTypes.map((transcriptType) => (
                    <SelectItem key={transcriptType.key}>{transcriptType.title}</SelectItem>
                ))}
            </Select>
        </div>
    )
}