"use client";

import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const GlobalDropdownComponent = ({pathname, searchParams}) => {
    const router = useRouter();
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Default"]));

    const selectedValue = Array.from(selectedKeys).join(", ").replaceAll("_", " ");

    const handleSelectionChange = (keys) => {
        setSelectedKeys(keys);

        const newSelectedValue = Array.from(keys).join(", ").replaceAll("_", " ");
        const sort = newSelectedValue === 'By Price' ? 'price' : 'date';

        const updatedSearchParams = { ...searchParams, sort };

        const queryString = new URLSearchParams(updatedSearchParams).toString();

        router.push(`${pathname}?${queryString}`);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button className="capitalize bg-gray-50 border-1 border-blackcolor rounded-none min-w-36 text-grey text-left flex justify-start ">
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
            >
                <DropdownItem key="Default">Default</DropdownItem>
                <DropdownItem key="By Date">By Date</DropdownItem>
                <DropdownItem key="By Price">By Price</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default GlobalDropdownComponent;
