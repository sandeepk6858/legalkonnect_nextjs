import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

export default function CountryStatesCountyFilter({ countriesData, stateAndCountiesData, onCountrySelect }) {
    const [selectedStateFips, setSelectedStateFips] = useState(null);
    const [counties, setCounties] = useState([]);

    const handleSelectCountryChange = (value) => {
        console.log("Selected City", value);
        onCountrySelect(value)
    };

    // const allCounties = stateAndCountiesData.flatMap(state => state.county_information);

    const handleStateChange = (stateFips) => {
        setSelectedStateFips(stateFips);

        // Find the selected state data
        const selectedState = selectedStateFips.find(state => state.state_fips === stateFips);

        // Set counties based on the selected state
        setCounties(selectedState ? selectedState.county_information : []);
    };

    return (
        <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
            {/* Country Selector */}
            <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
                <Select
                    label={`Countries (${countriesData.length})`}
                    placeholder="Select a country"
                    labelPlacement="outside"
                    className="max-w-xs"
                    onChange={(e) => handleSelectCountryChange(e.target.value)}
                >
                    {countriesData.map((country) => (
                        <SelectItem key={country.id}>{country.name}</SelectItem>
                    ))}
                </Select>
            </div>
            {/* State Selector */}
            <div className="first_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px)] md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Select
                    label={`States`}
                    placeholder="Select a State"
                    labelPlacement="outside"
                    className="max-w-xs"
                    onChange={(e) => handleStateChange(e.target.value)} // Track state selection
                >
                    {stateAndCountiesData.map((value) => (
                        <SelectItem key={value.state_fips}>
                            {value.state}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            {/* County Selector */}
            <div className="second_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px)] md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Select
                    label={`Counties`}
                    placeholder="Select a County"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {counties.map(county => (
                        <SelectItem key={county.county_fips} value={county.county_fips}>
                            {county.county}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
}
