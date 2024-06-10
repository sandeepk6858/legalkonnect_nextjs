"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import StarSvg from "../Icons/starSvg";
import SearchSvg from "../Icons/searchSvg";
import FillterSvg from "../Icons/filterSvg";
import { counter } from "@fortawesome/fontawesome-svg-core";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

export const SortBy = [
  { key: "date", label: "Date" },
  { key: "price", label: "Price" },
  { key: "rank", label: "Rank" },
  { key: "language", label: "Language" },
  { key: "location", label: "location" },
  { key: "specialization", label: "Specialization" },
];

const Filter = ({ showRequestButton, showSortBy, dropdownDateShow, counrtsMap }) => {
  const [toogleFilter, setToogleFilter] = useState(false);
  const [courtMap , setCourtMap] = useState(false)
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Date"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const FiltterToggle = () => {
    setToogleFilter(!toogleFilter);
  };

  const CourtMapToggle = () => {
    setCourtMap(!courtMap)
  }

  return (
    <>
      <div className="bg-lightgrey mt-[60px] border-1 border-lightgrey overflow-x-auto 2xl:overflow-x-visible lg:w-full">
        <div className="min-w-[1434px] m-[auto]">
          <div className="filter_main_wrapper py-[15px] flex items-center justify-between flex-wrap max-w-[1434px] m-[auto] px-[25px]">
            <div className="inner_filter_left flex items-center justify-between gap-[10px]">
              <div className="filter_serach_section">
                <Input
                  className="border border-lightgrey rounded-xl w-64 max-w-96"
                  type="text"
                  placeholder="Search"
                  startContent={
                    <SearchSvg
                      width={`16px`}
                      height={`16px`}
                      fill={`fill-orangeprimary`}
                    />
                  }
                />
              </div>
              { counrtsMap && <div className="filter_filter_section">
                <Button
                  className="bg-orangeprimary text-white text-lg"
                  endContent={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5938 8.46964C14.8527 8.46964 15.0625 8.25967 15.0625 8.00089V6.59464H15.5312C15.7329 6.59464 15.912 6.46561 15.9758 6.2742C16.0397 6.08292 15.974 5.87222 15.8127 5.75101L8.28149 0.0948791C8.11475 -0.030365 7.88525 -0.030365 7.71851 0.0948791L0.187256 5.75101C0.026001 5.87222 -0.0396728 6.08292 0.0241699 6.2742C0.0880127 6.46561 0.26709 6.59464 0.46875 6.59464H0.9375V8.00089C0.9375 8.25967 1.14746 8.46964 1.40625 8.46964H1.875V13.1571H1.40625C1.14746 13.1571 0.9375 13.367 0.9375 13.6259V15.0634H0.46875C0.209961 15.0634 0 15.2732 0 15.5321C0 15.7909 0.209961 16.0009 0.46875 16.0009C0.998535 16.0009 15.0027 16.0009 15.5312 16.0009C15.79 16.0009 16 15.7909 16 15.5321C16 15.2732 15.79 15.0634 15.5312 15.0634H15.0625V13.6259C15.0625 13.367 14.8527 13.1571 14.5938 13.1571H14.125V8.46964H14.5938ZM8 1.05582L14.1266 5.65714H1.87341L8 1.05582ZM14.125 6.59464V7.53214H1.875V6.59464H14.125ZM9.40625 13.1571V8.46964H11.2812V13.1571H9.40625ZM4.71875 13.1571V8.46964H6.59375V13.1571H4.71875ZM7.53125 8.46964H8.46875V13.1571H7.53125V8.46964ZM2.8125 8.46964H3.78125V13.1571H2.8125V8.46964ZM1.875 15.0634V14.0946C3.13611 14.0946 12.6422 14.0946 14.125 14.0946V15.0634H1.875ZM13.1875 13.1571H12.2188V8.46964H13.1875V13.1571Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M8 1.875C7.22461 1.875 6.59375 2.50586 6.59375 3.28125C6.59375 4.05664 7.22461 4.6875 8 4.6875C8.77539 4.6875 9.40625 4.05664 9.40625 3.28125C9.40625 2.50586 8.77539 1.875 8 1.875ZM8 3.75C7.74158 3.75 7.53125 3.53967 7.53125 3.28125C7.53125 3.02283 7.74158 2.8125 8 2.8125C8.25842 2.8125 8.46875 3.02283 8.46875 3.28125C8.46875 3.53967 8.25842 3.75 8 3.75Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  }
                  onClick={(e) => CourtMapToggle()}
                >
                  Courts Map
                </Button>
              </div>}
            </div>

            <div className="inner_filter_right flex items-center justify-end gap-[30px] flex-wrap w-[50%]">
              <div className="filter_filter_section">
                <Button
                  className="bg-orangeprimary text-white text-lg"
                  endContent={
                    <FillterSvg
                      width={`13px`}
                      height={`13px`}
                      fill={`fill-white`}
                    />
                  }
                  onClick={(e) => FiltterToggle()}
                >
                  Filters
                </Button>
              </div>
              <div className="">
                <Button className="bg-orangeprimary text-white text-lg rounded-[22px] px-6 py-[10px]">
                  Post a Job
                </Button>
              </div>

              {!showSortBy && <span>Sort By</span>}
              {!showSortBy && (
                <Select className="max-w-xs" defaultSelectedKeys={["location"]}>
                  {SortBy?.map((item) => (
                    <SelectItem key={item?.key}>{item?.label}</SelectItem>
                  ))}
                </Select>
              )}
              {dropdownDateShow && (
                <div className="flex items-center gap-[6px]">
                  <div>Sort By</div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={setSelectedKeys}
                    >
                      <DropdownItem key="Date">Date</DropdownItem>
                      <DropdownItem key="Price">Price</DropdownItem>
                      <DropdownItem key="Rank">Rank</DropdownItem>
                      <DropdownItem key="Language">Language</DropdownItem>
                      <DropdownItem key="Location">Location</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
              {showRequestButton && (
                <div>
                  <a
                    href="#"
                    className="btn request_subst_btn bg-[#1359C3] text-white text-[14px] rounded-[22px] px-6 py-[10px]"
                  >
                    Request Substitute Attorney
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {toogleFilter && (
        <>
          <div className="container">
            <div className="filter_main_inner_select mt-10 pl-5 flex items-center justify-between flex-wrap">
              <div className="firt_checkbox_section w-full lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Checkbox defaultSelected radius="none">
                  available as substitute attorney (0)
                </Checkbox>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
                <Select
                  label="Specialization"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2 sm:mt-5 sm:gap-[10px] bg-transparent">
                <Select
                  label="Location"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs border border-lightgrey rounded-xl bg-white"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2 sm:mt-5 sm:gap-[10px]">
                <Select
                  label="Language"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="filter_main_inner_select mt-10 pl-5 flex items-center justify-between flex-wrap">
              <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Select
                  label="Country"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Select
                  label="State"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Select
                  label="County"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
              <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <CheckboxGroup
                  label="Hourly rate"
                  defaultValue={["buenos-aires", "london"]}
                >
                  <Checkbox value="buenos-aires" radius="none">
                    Buenos Aires
                  </Checkbox>
                  <Checkbox value="sydney" radius="none">
                    Sydney
                  </Checkbox>
                  <Checkbox value="san-francisco" radius="none">
                    San Francisco
                  </Checkbox>
                  <Checkbox value="london" radius="none">
                    London
                  </Checkbox>
                  <Checkbox value="tokyo" radius="none">
                    Tokyo
                  </Checkbox>
                </CheckboxGroup>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <div className="form_group">
                  <CheckboxGroup
                    label="Last Activity"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Experience"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Talent Type"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            </div>

            <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
              <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <CheckboxGroup
                  label="Rate"
                  defaultValue={["buenos-aires", "london"]}
                >
                  <Checkbox value="buenos-aires" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="sydney" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="san-francisco" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="london" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="tokyo" radius="none">
                    {" "}
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-yellow stroke-yellow`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                        <StarSvg
                          width={`16px`}
                          height={`16px`}
                          color={`fill-lightgrey stroke-lightgrey`}
                        />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                </CheckboxGroup>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <div className="form_group">
                  <CheckboxGroup
                    label="Cases"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Reviews"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Earned amounts"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox value="sydney" radius="none">
                      Sydney
                    </Checkbox>
                    <Checkbox value="san-francisco" radius="none">
                      San Francisco
                    </Checkbox>
                    <Checkbox value="london" radius="none">
                      London
                    </Checkbox>
                    <Checkbox value="tokyo" radius="none">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lightgrey mt-5 p-5">
            <div className="container">
              <div className="cards_filters_topbar flex items-center gap-5 justify-end flex-wrap">
                <span>Filters applied</span>
                <Button className="bg-orangeprimary hover:bg-grey rounded-[22px] text-white text-lg">
                  Apply Filters
                </Button>
                <Button className="bg-grey hover:bg-orangeprimary rounded-[22px] text-white text-lg">
                  Reset Filters
                </Button>
                <Button className="bg-orangeprimary hover:bg-grey rounded-[22px] text-white text-lg">
                  Close Filters
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {courtMap && (
        <>
          <div>
             
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
