'use client'

import { imageURL } from "@/components/utils/helper/helper";
import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const Selectbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <>
      <div className="flex flex-wrap" ref={dropdownRef}>
        <div className="w-full">
          <div className="flex h-10 items-center justify-between border-gray-400 border px-4 py-0 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="text-gray-900 title-font font-medium flex-shrink-0">
              Select dates
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23">
              <path d="M0 23h22V2h-3V0h-2v5.908h-1V2H6V0H4v5.908H3V2H0zm16-10.092v-2h2v2zm2 1v2h-2v-2zm-5 2v-2h2v2zm2 1v2h-2v-2zm-2-4v-2h2v2zm-3 3v-2h2v2zm2 1v2h-2v-2zm-2-4v-2h2v2zm-3 3v-2h2v2zm2 1v2H7v-2zm-2-4v-2h2v2zm-3 3v-2h2v2zm2 1v2H4v-2z" />
            </svg>
          </div>
          {isOpen && <ul className=" shadow-lg border-gray-400 border p-4 h-[183px] overflow-auto">
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Current week (Jun 03, 2024 - Jun 09, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Last week (May 27, 2024 - Jun 02, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Current month (Jun 01, 2024 - Jun 30, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Last month (May 01, 2024 - May 31, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Last 30 days (Jun 04, 2024 - May 05, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Last 30 days (Jun 04, 2024 - May 05, 2024)</span>
            </li>
            <li className="flex gap-3 items-center mb-2">
              <input name="plan" type="radio" />
              <span>Custom date range (May 01, 2024 - May 31, 2024)</span>
            </li>
          </ul>}
        </div>
      </div>
    </>
  );
};

export default Selectbox;
                                    
