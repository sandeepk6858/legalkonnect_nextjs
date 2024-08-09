import React, { useState } from 'react'
import {
    Select,
    SelectItem
} from "@nextui-org/react";

export default function CountryFilter({ countries, onCountrySelect }) {

    const handleSelectChange = (value) => {
        console.log("Selected City", JSON.stringify(value));
        onCountrySelect(value);
    };

    console.log(countries)
    return (
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
            <Select
                label={`Countries (${countries.length})`}
                placeholder="Select a country"
                labelPlacement="outside"
                className="max-w-xs"
                onChange={(value) => { console.log('value===', value) }}
            >
                {countries.map((country) => (
                    <SelectItem key={country.key} value={country}>{country.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}
