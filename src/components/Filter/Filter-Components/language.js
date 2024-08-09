import React from 'react'
import {
    Input,
    Button,
    Checkbox,
    CheckboxGroup,
    Select,
    SelectItem,
} from "@nextui-org/react";

export default function LanguagesFilter({ languages }) {

    console.log(languages)
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
            <Select
                label={`Languages (${languages.length})`}
                placeholder="Select a Language"
                labelPlacement="outside"
                className="max-w-xs"
            >
                SPECS
                {languages.map((language) => (
                    <SelectItem key={language.key}>{language.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}
