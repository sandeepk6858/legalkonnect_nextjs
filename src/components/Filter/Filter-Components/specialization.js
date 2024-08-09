import React from 'react'
import {
    Input,
    Button,
    Checkbox,
    CheckboxGroup,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { fetchSpecializationsData } from "@/actions/filter-actions/getSpecializations";

export default function SpecializationFilter({ specializations }) {

    console.log(specializations)
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
            <Select
                label={`Specialization (${specializations.length})`}
                placeholder="Select a specialization"
                labelPlacement="outside"
                className="max-w-xs"
            >
                {specializations.map((specialization) => (
                    <SelectItem key={specialization.key}>{specialization.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}
