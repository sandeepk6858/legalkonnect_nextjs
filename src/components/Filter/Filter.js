"use client";
import React, { useState, useEffect } from "react";
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
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { counter } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

//
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import FilterTab from "./Filter-Tab";

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

const Filter = ({
  showRequestButton,
  showSortBy,
  dropdownDateShow,
  counrtsMap,
  Bids,
}) => {
  const [toogleFilter, setToogleFilter] = useState(false);
  const [courtMap, setCourtMap] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Date"]));

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    setFilters(params);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams(filters);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const FiltterToggle = () => {
    setToogleFilter(!toogleFilter);
  };

  const CourtMapToggle = () => {
    setCourtMap(!courtMap);
  };

  const AllCourtsOption = [
    { value: "All Courts", label: "All Courts" },
    {
      value: "1004 9th Ave N, Texas City, TX 77590, United States",
      label: "1004 9th Ave N, Texas City, TX 77590, United States",
    },
    {
      value: "300 E 26th St # 116A, Bryan, TX 77803, United States",
      label: "300 E 26th St # 116A, Bryan, TX 77803, United States",
    },
    {
      value: "300 E 26th St # 116A, Bryan, TX 78701, United States",
      label: "201 W 14th St, Austin, TX 78701, United States",
    },
  ];

  return (
    <>
      <div className="bg-lightgrey mt-[60px] border-1 border-lightgrey overflow-x-auto 2xl:overflow-x-visible lg:w-full">
        <div className="min-w-[1440px] m-[auto]">
          <div className="filter_main_wrapper py-[15px] flex items-center justify-between flex-wrap max-w-[1440px] m-[auto] px-[25px]">
            <div className="inner_filter_left flex items-center justify-between gap-[10px]">
              <div className="filter_serach_section">
                <Input
                  className="border border-lightgrey rounded-xl w-64 max-w-96"
                  type="text"
                  name="search"
                  startContent={
                    <SearchSvg
                      width={`16px`}
                      height={`16px`}
                      fill={`fill-orangeprimary`}
                    />
                  }
                  placeholder="Search"
                  value={filters.search || ''}
                  onChange={handleFilterChange}
                />
              </div>
              {counrtsMap && (
                <div className="filter_filter_section">
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
                </div>
              )}
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
                <Link href="/jobs/create" className="bg-orangeprimary text-white text-lg rounded-[22px] px-6 py-[10px]">
                  Post a Job
                </Link>
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
              {Bids && (
                <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                  <div className="form_group">
                    <CheckboxGroup
                      label="Bids"
                      defaultValue={["buenos-aires", "london"]}
                    >
                      <Checkbox value="buenos-aires" radius="none">
                        No bids (11)
                      </Checkbox>
                      <Checkbox value="sydney" radius="none">
                        1 to 9 bids (0)
                      </Checkbox>
                      <Checkbox value="san-francisco" radius="none">
                        10+ bids (0)
                      </Checkbox>
                    </CheckboxGroup>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-lightgrey mt-5 p-5">
            <div className="container">
              <div className="cards_filters_topbar flex items-center gap-5 justify-start sm:justify-end flex-wrap">
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
          <div className="flex items-center flex-col lg:flex-row max-w-[1150px] m-[auto]">
            <div className="map_Section lg:w-[50%]">
              <div className="courts_map_wrpr">
                <svg
                  height="321"
                  viewBox="0 0 546 321"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="usa_full_map w-[320px] sm:w-[400px] md:w-[546px]"
                >
                  <g id="us 1">
                    <path
                      id="Massachusetts"
                      d="M522.146 83.4113L521.987 83.3055V83.4642L522.146 83.4113V83.4113ZM520.556 81.983L520.927 81.8243V81.6127L520.556 81.983ZM527.128 77.8569L527.075 77.1163L526.969 76.6932L527.128 77.8569H527.128ZM503.969 72.4084L503.598 72.5671L500.577 73.4664L499.517 73.8366L498.298 74.2069L497.874 74.3656V74.5243L498.033 77.2751L498.192 79.8142L498.351 82.1417L498.616 82.3004L499.57 82.0359L503.863 80.7664L503.969 81.0309L511.6 78.1214L511.653 78.2272L512.342 77.9627L514.78 77.0106L517.112 79.8142L517.43 79.5497L517.589 78.7562L517.536 80.0258H518.066L518.225 80.6606L518.702 81.5598L521.192 78.5446L523.259 79.2323L523.736 78.1743L527.128 76.3758L525.697 73.5721L526.068 75.3707L524.319 76.6932L522.358 76.8519L518.437 72.6729L516.688 70.0279L518.437 68.1765L516.635 68.0707L515.893 66.325L515.84 66.2192L512.819 69.4989L506.141 71.7207L503.969 72.4084Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Minnesota"
                      d="M304.967 40.2462L306.027 44.002L308.253 57.5441L309.313 62.9397L309.631 67.7006L310.849 70.5571L311.114 72.9904L311.326 73.7839L311.273 73.9426L309.154 77.4339L310.531 79.7615L313.181 98.3818L313.287 100.815L315.937 100.656L326.377 100.075L352.452 97.9057L355.048 97.6412V97.3767L354.306 93.3035L351.074 91.6636L348.53 89.0187L344.502 86.5854L343.23 86.4796L341.269 84.9984L341.799 77.6984L339.944 76.0057L340.58 73.0433L343.972 69.9752L343.389 63.6274L344.608 62.252L348.742 57.9144L353.459 51.8839L355.26 50.6143L358.44 49.0803L361.779 46.5941L359.553 47.0172L358.228 46.0122L353.141 46.6999L352.346 45.7477L347.788 47.5991L344.131 46.0651L343.124 44.8484L340.209 45.06L338.249 44.0549L338.885 43.3143L336.394 42.5209H334.168L330.617 44.0549L329.928 42.997L324.31 42.2035L322.403 37.4426L322.191 36.0143L319.753 35.3267L319.965 39.3999L313.499 39.8759L305.497 40.1933L304.967 40.2462L304.967 40.2462Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Montana"
                      d="M254.249 39.7698L236.707 38.6061L223.935 37.3894L211.216 35.9082L203.32 34.8503L190.706 32.893L184.4 31.835L170.303 29.1372L168.819 28.8198L166.54 39.6111L167.547 41.5684L168.342 44.5836L167.865 45.0068L168.872 47.7575L170.25 48.9213L174.172 55.4807L174.542 56.5916L176.132 56.4858L174.278 65.1611L173.536 65.3727L172.529 68.2822L177.775 68.6524L178.199 71.0858L181.167 78.3329L181.697 78.7561L183.764 82.988L184.294 82.5648L188.693 82.5119L194.257 83.0937L195.635 81.2952L197.278 84.2575L197.596 84.4162L197.649 84.0988L198.391 78.9148L216.516 81.1365L230.984 82.5119L238.615 83.1466L252.235 83.9401L252.924 83.993H253.083L253.136 83.2525L253.295 79.6025L253.507 74.7887L253.56 73.572L253.666 71.4561L254.514 54.8459L255.203 41.9387L255.256 39.8227L254.249 39.7698L254.249 39.7698Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="North Dakota"
                      d="M303.854 40.2459L287.849 40.5633L276.667 40.5104L267.074 40.2988L255.839 39.8757L255.256 39.8228L255.203 41.9387L254.514 54.846L253.666 71.4561L253.56 73.572L255.627 73.6778L278.998 74.3126L300.568 74.1539L309.524 73.8894L311.326 73.7836L311.114 72.9902L310.849 70.5568L309.63 67.7003L309.312 62.9394L308.252 57.5438L306.027 44.0017L304.967 40.2459H303.854L303.854 40.2459Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Hawaii"
                      d="M227.327 280.67L225.684 279.454L224.253 279.824L224.571 282.786L222.61 285.22L224.306 289.081L224.783 293.049L226.744 294.318L227.963 292.361L230.136 290.774L232.786 290.086L235.701 287.6L232.839 285.167L232.786 283.686L227.327 280.67H227.327ZM217.682 276.386L216.887 275.698L216.145 276.703L217.682 276.386ZM213.707 274.111L213.919 272.154L212.912 271.995L213.707 274.111ZM217.046 270.884L216.145 271.307L216.781 273.317L218.159 273.423L218.583 275.169L220.067 275.804L223.352 274.27L220.279 271.731L217.046 270.884ZM210.262 268.715L209.785 270.144L212.064 270.091L214.184 270.62L213.071 268.874L210.262 268.715V268.715ZM203.585 264.536L202.366 263.373L200.034 265.171L201.518 267.922L202.578 266.811L205.599 267.446L205.334 266.176L203.585 264.536ZM179.842 262.209L180.16 261.468L181.061 260.992L179.842 262.209ZM188.269 257.395L184.559 258.77L184.188 259.775L185.672 260.833L187.739 261.362L189.223 258.453L188.269 257.395ZM162.565 247.662V247.609H162.459L162.565 247.662ZM134.477 240.732V240.838H134.53L134.477 240.732ZM119.744 238.299L119.797 238.352L119.744 238.299ZM118.684 236.712H118.578V236.765L118.684 236.712ZM119.055 236.712H119.002H119.055ZM119.002 236.659V236.712V236.659ZM102.361 223.011L102.308 222.852V222.905L102.361 223.011V223.011ZM66.0589 211.426L65.8999 211.585L66.0059 211.638L66.0589 211.426L66.0589 211.426ZM28.9614 184.765H28.9084H28.9614ZM6.06689 174.82L6.22588 174.767V174.662L6.06689 174.82V174.82Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Idaho"
                      d="M168.766 28.82L164.049 27.8679L162.512 27.4976L161.823 27.3389L155.676 54.9519L155.941 57.2266L155.729 59.607L155.835 60.136V60.1889L155.888 61.194L157.69 63.1512L155.093 69.6577L149.581 76.852L149.422 78.1744L150.853 81.5599L145.818 102.402L145.606 103.513L147.09 103.83L162.088 106.793L168.077 107.903L169.614 108.168L171.098 108.432L178.729 109.649L192.402 111.712L193.939 111.924L194.151 110.178L194.628 106.74L196.43 92.986L197.384 86.1621L197.596 84.4165L197.278 84.2578L195.635 81.2954L194.257 83.094L188.693 82.5121L184.294 82.565L183.764 82.9882L181.697 78.7563L181.167 78.3331L178.199 71.086L177.775 68.6527L172.529 68.2824L173.536 65.373L174.278 65.1614L176.132 56.486L174.543 56.5918L174.172 55.4809L170.25 48.9215L168.872 47.7578L167.865 45.007L168.342 44.5838L167.547 41.5686L166.54 39.6114L168.819 28.8201H168.766V28.82Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Washington"
                      d="M104.905 41.9919L104.958 41.0926L104.852 41.1455L104.905 41.9919H104.905ZM116.193 37.1781L116.511 36.6491L116.14 36.5962L116.193 37.1781H116.193ZM115.186 36.2259L115.504 35.1679L115.186 35.0621V36.2259ZM119.055 34.6919L119.002 33.6339L118.101 35.0092L119.055 34.6919H119.055ZM119.161 32.4701L119.32 31.4121L119.214 31.1477L119.161 32.4701H119.161ZM119.32 27.2861L119.267 26.7042L119.055 26.6513L119.32 27.2861H119.32ZM121.016 23.7948L120.539 23.7419L119.585 25.223L121.016 23.7948ZM119.691 22.3665L119.956 22.1549L120.009 21.9962L119.691 22.3665H119.691ZM119.426 22.5252L119.267 21.4672L118.79 22.3665L119.426 22.5252ZM119.161 21.044L118.684 20.8324L119.055 21.3614L119.161 21.044ZM120.751 21.9433V21.2556L120.592 21.5201L120.751 21.9433ZM121.228 21.2556L121.016 21.0969H120.963L121.228 21.2556H121.228ZM118.207 20.0919L117.942 19.8803L117.836 19.8274L118.207 20.0919V20.0919ZM120.168 19.8803L118.737 20.2505L119.108 20.3563L120.168 19.8803ZM119.002 19.7745L118.737 19.4571L118.684 19.51L119.002 19.7745H119.002ZM120.115 19.1397H119.903L120.168 19.2455L120.115 19.1397H120.115ZM109.728 46.2766L111.636 48.3397L111.318 52.3071L111.689 53.3121L114.55 54.8462L122.606 55.5868L122.924 56.539L126.74 56.5919L130.343 57.068L136.226 56.4332L139.141 56.9093L139.936 56.539L154.828 59.9245L155.835 60.1361L155.729 59.6071L155.941 57.2267L155.676 54.952L161.823 27.339L160.975 27.1803L148.574 24.2709L137.763 21.5201L125.521 18.1346L121.864 17.2354L122.712 21.8375L121.917 23.3187L120.486 22.5781L121.864 28.9788L120.38 31.0948L119.691 33.052V35.0622L116.564 37.231L115.239 36.3846L113.968 37.0194L116.299 34.0042L115.716 36.0672L117.041 34.639L118.101 34.8506L117.783 32.2056L118.472 32.3114L119.903 29.1375L119.426 28.6614L117.571 31.0419L116.352 31.0948L117.677 29.6136L119.161 29.2433L118.631 26.5455L117.147 26.1752L116.405 24.9056L115.504 25.3817L110.629 23.2658L106.336 19.9332L105.17 23.16L105.064 24.5354L105.965 26.9687L105.382 34.8506L104.958 36.0672L107.343 36.2788L104.958 37.9716L106.23 38.6064L105.223 41.9919L104.746 39.3469L103.845 42.4151L105.064 43.8962L106.389 43.7904L107.979 44.7426L108.774 46.2767H109.728V46.2766Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Arizona"
                      d="M203.213 168.896L185.353 166.674L175.761 165.298L162.088 163.13L160.71 162.918V163.024L158.378 173.286L157.159 173.233L155.304 171.593L152.973 173.551L152.92 181.961L152.072 183.76V183.919V183.972L151.966 185.294L153.82 190.267L155.463 192.488L152.496 194.234L151.33 196.403L149.422 201.058L148.468 201.269L148.415 205.131L150.058 206.348L149.21 208.675L147.302 208.781L146.189 210.844L150.005 213.225L157.212 217.245L179.471 229.041L198.337 231.369H198.549L200.033 215.764L200.404 211.902L204.379 170.959L204.591 169.054L203.213 168.896H203.213Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="California"
                      d="M112.483 198.254L112.695 199.418V199.629L112.483 198.254ZM104.693 193.705L105.064 194.498L105.276 194.445L104.693 193.705V193.705ZM113.967 193.546L114.126 194.922L115.08 195.609L113.967 193.546ZM107.555 186.035L106.972 185.876L107.449 186.087L107.555 186.035V186.035ZM101.672 184.448L100.241 185.294L100.612 185.664L101.672 184.448ZM98.9164 183.443L98.8104 183.866L99.2873 183.972L98.9164 183.443ZM103.58 184.501L105.912 185.823L106.336 185.453L103.58 184.501ZM85.5082 137.897L85.4552 137.95L85.5082 137.897ZM91.1789 138.161L91.1258 138.003V138.214L91.1789 138.161V138.161ZM121.758 98.0113L119.691 97.4823L97.0085 91.2403L88.582 88.7012V88.9128L88.1051 94.1497L85.8792 100.339L82.1695 104.941L82.0635 107.269L83.8654 110.495L84.7663 114.727L83.4944 118.166L83.7064 121.604L83.0704 123.032L85.2433 127.74L86.6212 129.539L86.5152 134.67L89.801 137.791L91.7088 134.617L93.7757 136.257L94.5706 135.516L91.7088 136.045L91.6558 138.743L92.2388 142.129L90.6489 140.595L89.7479 138.532L89.483 141.388L90.2249 147.048L93.1927 150.698L91.2318 153.237L91.5498 156.464L93.6697 159.744L97.3794 169.9L98.5454 170.535L98.1744 177.571L98.7573 178.417L106.707 181.274L109.145 183.866L109.993 185.558L112.324 186.881L114.868 187.357L115.928 190.266L118.048 191.272L121.228 195.027L124.196 199.947L123.984 204.496L125.627 206.665L147.302 208.781L149.21 208.675L150.058 206.348L148.415 205.131L148.468 201.269L149.422 201.058L151.33 196.403L152.496 194.234L155.464 192.488L153.821 190.266L151.966 185.294L152.072 183.972V183.919L150.694 182.067L146.454 176.407L138.24 164.875L126.792 148.477L120.327 139.537L114.073 130.544L121.281 100.021L121.758 98.0113L121.758 98.0113Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Colorado"
                      d="M267.339 139.273L267.551 128.904L265.007 128.799L252.076 128.323L250.804 128.27L249.744 128.217L234.004 127.212L223.511 126.365L210.421 125.096L209.149 124.937L208.99 126.312L206.128 153.873L205.121 163.5L204.697 167.679L204.591 169.054L206.234 169.213L232.944 171.541L244.71 172.281L256.422 172.81L258.118 172.863L259.178 172.916L261.404 172.969L262.463 173.022L265.802 173.128H266.65V172.07L267.233 144.086L267.286 140.965V139.96L267.339 139.273L267.339 139.273Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Nevada"
                      d="M160.976 161.225L166.487 127L169.296 109.861L169.614 108.168L168.077 107.903L162.089 106.792L147.091 103.83L145.607 103.513L144.123 103.195L136.65 101.555L123.242 98.3815L121.758 98.0112L121.281 100.021L114.074 130.544L120.327 139.537L126.793 148.476L138.24 164.875L146.455 176.407L150.694 182.067L152.072 183.919V183.76L152.92 181.961L152.973 173.55L155.305 171.593L157.16 173.233L158.379 173.286L160.711 163.024V162.918L160.976 161.225L160.976 161.225Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="New Mexico"
                      d="M257.959 176.989L258.012 175.614L258.065 174.238L258.118 172.863L256.422 172.81L244.71 172.281L232.945 171.54L206.234 169.213L204.591 169.054L204.379 170.959L200.405 211.902L200.034 215.764L198.55 231.369L198.762 231.422L206.075 232.109L206.764 228.406L208.089 227.348L222.928 228.671H223.034L221.709 226.079L228.44 226.555L245.24 227.507L255.733 227.983L257.535 178.364L257.906 178.417L257.959 176.989L257.959 176.989Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Oregon"
                      d="M88.582 88.7012L97.0085 91.2404L119.691 97.4824L121.758 98.0114L123.242 98.3817L136.65 101.556L144.122 103.195L145.606 103.513L145.818 102.402L150.853 81.5599L149.422 78.1744L149.581 76.8519L155.093 69.6577L157.689 63.1512L155.888 61.194L155.835 60.1889V60.136L154.828 59.9244L139.936 56.5389L139.141 56.9092L136.226 56.4331L130.343 57.0679L126.739 56.5918L122.924 56.5389L122.606 55.5867L114.55 54.8461L111.688 53.312L111.317 52.307L111.635 48.3396L109.728 46.2765L109.569 46.3294L109.198 46.5939L106.548 45.2186L104.958 45.6946L103.898 45.1657L102.785 49.7149L102.043 50.9845L98.7573 58.9722L97.8034 63.3628L97.2204 63.4157L94.1466 70.7157L92.0798 73.8367L91.3378 74.3657L89.43 78.0686L89.059 81.9831L87.8931 85.4744L88.582 88.6483V88.7012L88.582 88.7012ZM107.979 45.2715L107.82 44.7954L107.767 45.1657L107.979 45.2715H107.979Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Utah"
                      d="M192.402 111.712L178.729 109.649L171.098 108.432L169.614 108.168L169.296 109.861L166.487 127L160.975 161.225L160.71 162.918L162.088 163.13L175.761 165.298L185.354 166.674L203.214 168.896L204.592 169.054L204.698 167.679L205.121 163.5L206.128 153.872L208.99 126.312L209.149 124.937L208.089 124.831L194.575 123.191L192.508 122.927L193.833 112.611L193.939 111.924L192.402 111.712Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Wyoming"
                      d="M251.917 104.73L252.341 96.4774L252.871 85.3687L252.924 83.9933L252.235 83.9404L238.615 83.1469L230.984 82.5121L216.516 81.1368L198.391 78.915L197.649 84.0991L197.596 84.4165L197.384 86.1621L196.43 92.9861L194.628 106.74L194.151 110.178L193.939 111.924L193.833 112.611L192.508 122.927L194.575 123.191L208.089 124.831L209.149 124.937L210.421 125.095L223.511 126.365L234.005 127.211L249.745 128.216L250.804 128.269L250.857 126.894L251.122 121.34L251.599 111.659L251.811 107.533L251.864 106.158L251.917 104.73H251.917Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Arkansas"
                      d="M376.989 178.788L371.265 179.634L373.597 175.931L372.59 173.868L352.399 175.825L335.334 177.201L332.843 177.359L333.161 178.841L335.228 189.526L335.281 191.907L335.864 206.295L335.917 208.675L336.076 208.728L336.871 209.575L340.05 209.469L340.368 214.124L340.474 215.446L342.117 215.288L347.152 214.917L367.132 213.066H367.238L367.185 211.902L367.715 211.532L366.761 209.733L368.774 201.27L367.979 200.317L371 196.985L370.788 194.128L373.014 190.425V190.373L372.908 190.267L374.816 188.521L374.286 186.405L375.77 184.078L375.452 181.909L377.042 178.841V178.788H376.989V178.788Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Iowa"
                      d="M361.196 107.745L358.281 106.211L356.691 104.042L356.161 100.921L356.585 99.4926L355.049 97.6411L352.452 97.9056L326.377 100.074L315.937 100.656L313.287 100.815L312.174 100.868L313.075 106.74L312.333 109.543L313.499 111.289V111.659L313.87 111.712L315.566 116.685L317.209 119.277L317.315 122.239L319.117 124.725L318.799 125.783L320.442 132.448V132.607L331.306 132.29L342.912 131.285L354.307 129.856L356.903 132.131L357.009 132.237L357.486 132.025L357.115 129.962L359.076 128.746L359.871 123.35L359.076 122.98L359.553 120.229L361.938 119.753L364.588 117.848L365.754 114.516L365.807 112.823L363.687 110.813L363.051 109.543L361.037 108.274L361.143 108.009L361.196 107.745L361.196 107.745Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Kansas"
                      d="M332.472 170.429L331.147 148.053L328.762 146.678L328.55 145.62L326.642 143.927L328.497 141.653L327.755 140.33L326.377 140.383L325.105 139.484L324.575 139.061L322.774 139.166L303.218 139.907L294.262 140.119H276.455L269.3 140.013L267.286 139.96V140.965L267.233 144.086L266.65 172.069V173.127L268.929 173.18L281.224 173.339L310.001 172.916L330.511 171.963L332.525 171.805L332.472 170.429L332.472 170.429Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Missouri"
                      d="M356.903 132.131L354.306 129.856L342.912 131.285L331.306 132.29L320.442 132.607L320.389 132.925L321.714 135.464L322.932 136.31L324.363 138.849L324.575 139.061L325.105 139.484L326.377 140.383L327.755 140.33L328.497 141.653L326.642 143.927L328.55 145.62L328.762 146.678L331.147 148.054L332.472 170.43L332.525 171.805L332.631 173.18L332.684 174.556L332.79 175.984L332.843 177.359L335.334 177.201L352.399 175.825L372.59 173.868L373.597 175.931L371.265 179.634L376.989 178.788H377.042V178.364L377.148 175.931L378.208 174.609L377.89 173.127L377.837 173.075L377.784 173.022L377.996 172.334L378.314 172.44L378.473 172.863L378.42 173.022V173.075V173.498L378.632 173.551L379.056 173.022V172.969L379.109 172.81L380.487 171.964L380.699 171.858L381.176 167.52L381.07 167.309L380.911 167.256L377.148 164.188L377.731 163.077L376.671 160.061L374.763 158.58L371.159 156.993L368.881 155.142L369.146 151.333L369.834 147.789L366.019 148.001L364.853 146.784L364.323 144.351L358.281 139.272L356.585 134.564L357.009 132.237L356.903 132.131V132.131Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Nebraska"
                      d="M312.492 111.553L310.849 109.914L305.073 108.221L303.218 108.168L300.409 108.961L297.07 106.845L286.63 106.951L271.42 106.793L253.454 106.211L251.864 106.158L251.811 107.533L251.599 111.659L251.122 121.34L250.857 126.894L250.804 128.269L252.076 128.322L265.007 128.798L267.551 128.904L267.339 139.272L267.286 139.96L269.3 140.013L276.454 140.119H294.261L303.218 139.907L322.773 139.166L324.575 139.061L324.363 138.849L322.932 136.31L321.713 135.464L320.389 132.924L320.442 132.607V132.448L318.799 125.783L319.117 124.725L317.315 122.239L317.209 119.277L315.566 116.685L313.87 111.712L313.499 111.659L312.492 111.553L312.492 111.553Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Oklahoma"
                      d="M332.79 175.984L332.684 174.556L332.631 173.181L332.525 171.805L330.511 171.964L310.001 172.916L281.224 173.339L268.929 173.181L266.65 173.128H265.802L262.464 173.022L261.404 172.969L259.178 172.916L258.118 172.863L258.065 174.238L258.012 175.614L257.959 176.989L257.906 178.417H258.224L271.049 178.735L284.616 178.894L284.775 196.985L285.729 200.159L287.849 202.169L290.128 202.275L290.605 201.323L293.731 204.179L297.812 204.602L298.554 205.449L300.038 204.761L303.748 206.507V207.512L305.126 207.459L306.556 206.242L309.206 207.935L311.697 208.834L313.393 206.507L318.799 209.046L320.813 207.406L322.455 206.771L323.78 207.088L328.762 205.66L331.412 206.771L333.797 208.305L335.863 208.675H335.917L335.863 206.295L335.281 191.907L335.228 189.526L333.161 178.841L332.843 177.359L332.79 175.984L332.79 175.984Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="South Dakota"
                      d="M309.524 73.8897L300.568 74.1541L278.999 74.3128L255.627 73.6781L253.56 73.5723L253.507 74.7889L253.295 79.6027L253.136 83.2527L253.083 83.9933H252.924L252.871 85.3687L252.341 96.4774L251.917 104.73L251.864 106.158L253.454 106.211L271.42 106.793L286.63 106.951L297.07 106.846L300.409 108.961L303.218 108.168L305.073 108.221L310.849 109.914L312.492 111.553L313.499 111.659V111.289L312.333 109.543L313.075 106.74L312.174 100.868L313.287 100.815L313.181 98.3817L310.531 79.7614L309.153 77.4339L311.273 73.9426L311.326 73.7839L309.524 73.8897L309.524 73.8897Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Louisiana"
                      d="M376.194 255.755L375.505 255.914L375.187 256.231L376.194 255.755ZM378.42 255.755L378.049 255.596L377.943 255.755H378.42ZM379.692 255.332H379.321L379.109 255.596L379.692 255.332ZM379.056 254.962L378.95 254.803L378.897 254.962H379.056ZM383.295 252.158L383.136 252.264H383.401L383.295 252.158ZM390.715 249.037L391.033 248.614L390.662 249.09L390.715 249.037V249.037ZM391.775 247.662L391.669 247.715V247.767L391.775 247.662V247.662ZM364.535 252.317L365.329 251.312L363.157 250.73L362.203 251.523L364.535 252.317ZM386.528 247.714L386.316 247.503L386.263 247.609L386.528 247.714ZM387.111 246.762L386.581 246.604L386.74 247.133L387.111 246.762ZM391.457 245.863V245.704V245.757V245.863V245.863ZM392.517 245.175L392.464 245.122L392.517 245.228V245.175V245.175ZM392.093 245.07L391.987 245.017L391.934 245.175L392.093 245.07L392.093 245.07ZM388.383 244.911L388.86 244.752V244.593L388.383 244.911ZM388.648 244.646L388.913 244.382L388.86 244.329L388.648 244.646L388.648 244.646ZM386.793 242.689L386.687 242.795H386.74L386.793 242.689H386.793ZM367.237 213.066H367.131L347.152 214.917L342.117 215.288L340.474 215.446L340.527 216.716L341.587 226.925L343.336 229.359L343.389 230.787L345.085 233.749L346.463 238.087L345.986 240.52L345.615 246.551L344.82 248.508H344.926L345.085 249.883L344.184 251.153L350.755 250.412L355.896 251.841L359.553 252.317L361.408 250.994L360.401 249.672L363.793 248.614L363.687 249.778L365.436 249.354L366.866 251.576L368.085 251.153L371.265 253.322L369.304 254.009L373.809 255.332H375.505L376.512 254.115L378.685 252.951L380.222 255.173L381.281 253.163L380.964 249.989L383.825 251.1L384.143 252.052L387.535 252.475L389.231 253.851L389.019 254.962L391.404 252.74L390.503 251.576L386.528 250.571L385.044 249.725L384.991 248.138L386.634 248.349L387.906 245.757L386.263 243.483L385.362 245.651L383.295 245.281L384.726 242.954L383.772 242.689L381.44 244.329L378.102 244.541L377.148 243.8L378.685 241.102L380.487 241.049L383.56 242.054L385.786 242.266L384.567 240.732L382.235 236.183L382.871 233.643L364.588 235.654L365.277 234.966L364.535 233.062L365.647 231.422L366.283 227.296L370.311 220.419L368.35 218.038L368.456 216.293L367.237 213.436V213.066H367.237Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Texas"
                      d="M313.393 292.625L310.85 283.051V284.849L313.393 292.625ZM312.81 275.803L311.008 279.189L310.797 280.3L312.81 275.803ZM314.241 273.317L315.937 271.095L314.718 271.836L314.241 273.317ZM320.23 267.922L316.255 269.985L317.368 269.773L320.23 267.922ZM320.76 267.181L321.873 266.282L321.449 266.388L320.76 267.181ZM257.906 178.417L257.535 178.364L255.733 227.983L245.24 227.507L228.44 226.555L221.709 226.079L223.034 228.671L223.087 228.724L228.811 234.437L232.097 238.298L236.442 241.525L239.516 247.132L240.682 253.004L243.173 254.644L245.134 256.813L247.943 257.818L252.023 260.41L253.878 261.098L256.422 258.559L257.217 255.861L258.542 253.269L262.676 251.629L264.266 252.422L268.876 252.793L273.063 255.385L275.925 255.914L275.13 257.395L276.773 258.453L278.31 260.304L278.628 262.261L279.635 263.584L281.966 269.191L284.298 271.148L286.1 274.111L288.379 276.438L289.386 276.756L290.234 282.786L292.725 284.161L292.831 286.066L293.467 285.907L297.812 291.197L299.985 291.673L302.741 293.313H306.981L310.055 295.006L313.711 294.212L312.068 292.678L310.585 288.235L310.002 284.373L309.154 283.103L309.525 280.511L308.412 280.406L306.928 277.972L308.624 279.771L310.585 279.083L311.644 276.28L309.525 273.423L312.704 273.793L314.188 271.519L313.976 270.725L315.301 268.98L314.983 270.514L316.467 269.35L315.884 267.287L317.792 268.292L320.23 266.917L317.845 264.43L319.329 265.012L322.085 265.171L325.689 264.377L329.716 261.68L332.154 259.669L332.525 258.188L334.009 256.654L333.214 254.115L333.373 252.528L336.023 251.364L335.811 254.168H337.401L335.652 255.649L342.7 251.946L343.866 251.893L344.608 248.508H344.82L345.615 246.551L345.986 240.52L346.463 238.087L345.085 233.749L343.389 230.787L343.336 229.358L341.587 226.925L340.528 216.716L340.475 215.446L340.369 214.124L340.051 209.469L336.871 209.574L336.076 208.728L335.917 208.675H335.864L333.797 208.305L331.412 206.771L328.762 205.66L323.781 207.088L322.456 206.771L320.813 207.406L318.799 209.045L313.393 206.506L311.697 208.834L309.207 207.935L306.557 206.242L305.126 207.458L303.748 207.511V206.506L300.038 204.761L298.554 205.448L297.812 204.602L293.732 204.179L290.605 201.322L290.128 202.274L287.849 202.169L285.729 200.158L284.775 196.985L284.616 178.893L271.049 178.735L258.224 178.417H257.906L257.906 178.417Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Connecticut"
                      d="M511.6 78.1216L503.968 81.031L503.862 80.7665L499.57 82.0361L498.616 82.3006L498.722 82.8295L500.736 90.6056L501.372 91.3991L499.994 93.0919L500.948 93.9911L504.021 91.0288L505.664 88.7542L505.982 89.389L513.72 85.9506L513.879 85.7919L513.826 84.5223L513.508 83.4114L511.865 78.8093L511.653 78.2274L511.6 78.1216H511.6Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="New Hampshire"
                      d="M504.446 41.4097L503.757 42.256L502.962 42.0974L502.538 45.5887V45.6416L503.81 50.4024L503.704 51.3546L501.425 54.3698L502.008 57.1205V60.559L501.584 63.7329L503.969 72.4082L506.141 71.7206L512.819 69.4988L515.84 66.2191V65.3727L515.999 63.9974L515.628 64.1561L515.575 63.8387L512.236 59.7655L512.13 59.3952L504.446 41.4097H504.446Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Rhode Island"
                      d="M516.793 82.8825L516.74 81.7716L516.581 82.1948L516.793 82.8825H516.793ZM517.853 82.0361L517.164 80.7137L517.111 82.089L517.853 82.0361V82.0361ZM517.535 80.3963L517.906 81.3484L518.383 82.1948L518.701 81.56L518.224 80.6608L518.065 80.026H517.535V80.3963ZM511.653 78.2274L511.865 78.8093L513.508 83.4115L513.826 84.5224L513.879 85.7919L513.985 85.6332L516.529 83.6231L516.052 80.026L517.111 79.8144L514.78 77.0107L512.342 77.9629L511.653 78.2274H511.653Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Vermont"
                      d="M503.968 72.4088L501.584 63.7334L502.008 60.5595V57.1211L501.425 54.3704L503.703 51.3551L503.809 50.403L502.538 45.6421L501.849 45.9066L498.934 46.9646L496.072 48.0754L489.5 50.4559L489.129 50.5617L491.514 56.116L492.309 61.353L495.118 65.7435L497.768 74.4189L497.874 74.366L498.298 74.2073L499.517 73.837L500.577 73.4667L503.597 72.5674L503.968 72.4088V72.4088Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Alabama"
                      d="M392.199 187.939L392.411 188.362L393.153 188.838L393.471 210.527L393.577 222.429L396.28 238.722L396.492 238.669L398.877 239.145L399.513 234.437L400.572 237.082L402.374 238.722L405.819 236.712L405.448 236.394L405.554 236.447L403.169 230.999L426.064 227.296L427.601 227.031V226.978L426.17 224.28L426.064 220.419L424.898 218.303L425.481 214.177L426.435 213.119L422.513 206.136L415.412 184.554L415.358 184.448L413.769 184.712L405.289 186.088L401.049 186.617L392.146 187.833L392.199 187.939V187.939Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Florida"
                      d="M466.659 291.726H466.553L466.606 291.779L466.659 291.726H466.659ZM466.182 291.673V291.726H466.235L466.182 291.673ZM466.288 291.62V291.567V291.62ZM459.08 292.414V292.467V292.414ZM458.974 292.467V292.414V292.467ZM458.497 292.467H458.444V292.519L458.497 292.467ZM473.548 289.134H473.495L473.548 289.24V289.134ZM474.979 288.764V288.658L474.873 288.817L474.979 288.764V288.764ZM474.449 288.658L474.237 288.446L474.184 288.499L474.449 288.658L474.449 288.658ZM474.29 289.081L473.654 288.288L474.025 288.975L474.29 289.081ZM479.325 285.96V286.172L479.431 286.066L479.325 285.96ZM480.067 285.431L480.226 285.167L480.014 285.378L480.067 285.431V285.431ZM480.226 284.902H480.173V284.955L480.226 284.902ZM479.272 284.743L479.219 284.69L479.272 284.743ZM479.749 283.95L479.696 283.897V284.003L479.749 283.95V283.95ZM478.318 283.897L478.265 283.844L478.318 283.897ZM480.12 282.68L480.014 282.733L480.173 282.786L480.12 282.68V282.68ZM480.332 282.68L480.226 282.574L480.279 282.733L480.332 282.68L480.332 282.68ZM479.961 282.574L479.908 282.522V282.627L479.961 282.574V282.574ZM481.922 282.204V282.151L481.816 282.363L481.922 282.204V282.204ZM479.696 282.416H479.59L479.696 282.469V282.416ZM480.809 281.781H480.65L480.597 281.834L480.809 281.781H480.809ZM481.233 281.516H481.18H481.233ZM476.781 281.728V281.622L476.728 281.728H476.781ZM477.258 281.569H477.099L477.258 281.887V281.569ZM475.986 281.622V281.305L475.721 281.358L475.986 281.622ZM475.244 281.093L475.509 281.358V281.252L475.244 281.093ZM483.035 281.411L482.081 281.834L482.399 281.887L483.035 281.411V281.411ZM475.615 280.935H475.297V281.04L475.615 280.935ZM483.989 278.29L484.042 278.025L484.095 277.338L483.989 278.29H483.989ZM484.042 275.327L483.83 274.798L483.724 275.01L484.042 275.327ZM471.799 276.65L471.693 276.809L471.958 276.861L471.799 276.65V276.65ZM470.792 276.174L470.315 276.332L470.686 276.385L470.792 276.174V276.174ZM469.733 276.28V276.121L469.679 276.174L469.733 276.28V276.28ZM468.62 276.227L468.302 276.438L468.726 276.65L468.62 276.227ZM470.103 276.28L470.05 276.121L469.785 276.068L470.103 276.28V276.28ZM463.161 271.095L462.843 271.254L463.479 271.466L463.161 271.095ZM461.889 269.403L461.465 268.768L461.624 269.244L461.889 269.403ZM463.532 270.461L462.79 268.768L462.26 268.609L463.532 270.461ZM461.412 268.345L461.253 267.922L461.147 267.657L461.412 268.345ZM457.013 262.473L456.059 261.785L456.43 262.156L457.013 262.473ZM480.862 258.929L476.993 252.475H476.781L480.862 258.929ZM454.099 248.614L453.94 248.561L454.099 248.667V248.614V248.614ZM453.781 248.243L453.728 248.296L453.781 248.349V248.243V248.243ZM453.41 247.714V247.661L453.357 247.714H453.41ZM453.622 247.503L453.781 247.609V247.503H453.622ZM453.94 247.291L453.728 247.344H453.781L453.94 247.291H453.94ZM453.569 247.238L453.41 247.08L453.463 247.132L453.569 247.238V247.238ZM453.198 246.656H453.092L453.251 246.709L453.198 246.656H453.198ZM453.569 246.022H453.357L453.304 246.075L453.569 246.022H453.569ZM453.781 246.127L453.516 245.863L453.622 245.916L453.781 246.127V246.127ZM451.767 243.853L451.661 243.8V243.853H451.767ZM449.488 243.853L449.329 243.641L449.382 243.906L449.488 243.853V243.853ZM430.197 242.107L431.787 240.89L430.038 242.054L430.197 242.107V242.107ZM433.377 239.568L433.536 239.409L432.9 239.674L433.377 239.568ZM413.238 236.024L407.462 237.875L410.641 236.976L413.238 236.024ZM427.6 227.031L426.063 227.296L403.169 230.998L405.554 236.447L405.713 236.5L405.13 238.669L406.826 237.928L408.681 236.288L411.86 236.182L415.517 234.86L418.008 235.23L417.425 236.13L421.983 237.664L425.904 239.568L426.805 241.684L429.72 241.049L436.61 235.442L439.154 235.548L449.541 243.377L451.661 242.953L453.887 245.916L454.311 250.624L453.622 253.586L453.94 255.067L455.794 258.77L454.946 255.861L457.331 255.808L457.543 257.924L456.271 261.203L460.67 267.234L462.313 267.287L460.935 265.435L462.631 265.647L463.638 265.012L463.214 268.398L465.493 270.196L467.03 274.322L469.097 275.592L471.746 276.28L475.403 280.935L477.311 281.94L474.767 282.098L475.933 283.421L480.12 282.046L482.187 280.882L484.095 274.217L483.141 263.848L482.929 262.79L477.841 254.327L473.495 248.19L471.057 243.165L473.124 244.911L473.548 244.593L474.449 248.984L476.781 252.317L474.502 247.873L474.608 245.757L467.772 237.452L466.129 234.86L463.956 230.469L462.472 226.767L461.306 225.444L461.041 223.751L460.988 223.698L457.331 223.487L455.9 224.598L455.105 228.671L454.364 226.767L429.349 229.888L427.547 227.084L427.6 227.031V227.031Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Georgia"
                      d="M461.836 215.869L461.783 214.282L461.412 215.658L461.836 215.869H461.836ZM462.419 213.436L462.207 212.219L462.048 212.96L462.419 213.436ZM437.617 180.11L436.928 180.269L434.914 180.692L427.495 182.226L426.806 182.384L426.064 182.49L421.93 183.284L420.817 183.495L416.312 184.342L415.358 184.448L415.411 184.553L422.513 206.136L426.435 213.119L425.481 214.177L424.898 218.303L426.064 220.419L426.17 224.28L427.601 226.978V227.031L427.548 227.084L429.349 229.887L454.364 226.766L455.106 228.671L455.901 224.598L457.332 223.487L460.988 223.698L460.67 217.985L461.359 216.769L460.988 214.494L461.73 212.325L462.843 211.108L462.048 210.368L463.903 208.093H463.85L460.67 205.131L456.325 198.942L453.94 197.831L443.711 189.261L441.221 186.087L436.398 184.077L436.133 183.019L437.617 180.11V180.11Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Mississippi"
                      d="M391.351 241.314L391.086 241.367V241.42L391.351 241.314V241.314ZM396.28 240.679H395.538L396.227 240.732L396.28 240.679H396.28ZM390.132 241.208L389.92 241.419L389.973 241.472L390.132 241.208L390.132 241.208ZM395.114 240.785H393.1L395.008 240.838L395.114 240.785ZM373.014 190.372V190.425L370.788 194.128L371 196.985L367.979 200.317L368.774 201.269L366.76 209.733L367.714 211.532L367.184 211.902L367.237 213.066V213.436L368.456 216.293L368.35 218.038L370.311 220.419L366.284 227.296L365.648 231.422L364.535 233.062L365.277 234.966L364.588 235.654L382.871 233.643L382.235 236.183L384.567 240.732L385.786 242.266V242.213L387.747 239.991L391.881 239.092L395.697 239.515L396.28 238.775V238.722L393.577 222.429L393.471 210.527L393.153 188.838L392.411 188.362L392.199 187.939H392.093L389.443 188.309L384.779 188.944L374.18 190.267L373.014 190.372L373.014 190.372Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="South Carolina"
                      d="M437.617 180.11L436.133 183.019L436.398 184.077L441.22 186.088L443.711 189.261L453.94 197.831L456.324 198.942L460.67 205.131L463.85 208.093L464.38 205.66L463.532 203.332L465.811 205.025L467.083 204.02L464.91 202.222L467.56 202.063L471.693 198.572L471.216 197.672L473.76 195.715L473.495 194.763L475.35 193.599L475.456 190.901L478.371 185.506L480.332 183.019L480.544 182.914L468.726 175.455L464.327 176.301L458.338 176.09L455.371 174.556L437.776 180.11H437.617Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Illinois"
                      d="M361.143 108.009L361.037 108.274L363.051 109.543L363.687 110.813L365.807 112.823L365.754 114.516L364.588 117.848L361.938 119.753L359.553 120.229L359.076 122.98L359.871 123.35L359.076 128.746L357.115 129.962L357.486 132.025L357.009 132.237L356.585 134.564L358.281 139.272L364.323 144.351L364.853 146.784L366.019 148.001L369.835 147.789L369.146 151.333L368.881 155.142L371.159 156.993L374.763 158.58L376.671 160.062L377.731 163.077L377.148 164.188L380.911 167.256L381.07 167.309L380.752 166.991L381.812 164.505L385.892 165.616L386.899 164.452L386.104 162.125L389.443 160.167L388.542 158.898L389.337 157.099V156.941L389.125 156.888L389.178 152.18L390.344 151.333L392.358 146.625L391.934 144.562L390.609 142.076L391.351 139.272L387.641 113.193L387.111 112.612L385.734 109.491L384.621 108.327L384.144 105.259V105.153L376.989 106.158L372.696 106.687L361.143 108.009Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Indiana"
                      d="M409.688 109.12L401.579 110.548L399.724 110.919L393.153 111.977L391.775 113.088L389.708 114.04L388.913 113.987L387.959 113.511L387.641 113.193L391.351 139.272L390.609 142.076L391.934 144.562L392.358 146.625L390.344 151.333L389.178 152.18L389.125 156.888L389.337 156.94L389.549 156.888L390.344 155.406H392.305L394.69 154.613L397.657 155.724L397.975 154.507L399.671 153.238L402.215 153.608L403.593 150.91L407.356 151.227L407.303 149.693L410.642 145.303L410.112 143.293L412.443 143.24L415.305 140.965L414.616 138.373L414.722 138.267L414.616 137.368L411.437 118.642L410.006 110.654L409.847 109.808L409.688 109.12L409.688 109.12Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Kentucky"
                      d="M378.473 172.863L378.314 172.439L377.996 172.334L377.784 173.021L377.837 173.074L378.42 173.021L378.473 172.863H378.473ZM414.722 138.267L414.616 138.373L415.305 140.965L412.443 143.239L410.112 143.292L410.641 145.302L407.303 149.693L407.356 151.227L403.593 150.91L402.215 153.608L399.671 153.237L397.975 154.507L397.657 155.723L394.69 154.613L392.305 155.406H390.344L389.549 156.887L389.337 156.94V157.099L388.542 158.897L389.443 160.167L386.104 162.124L386.899 164.452L385.892 165.616L381.811 164.505L380.751 166.991L381.069 167.308L381.175 167.52L380.699 171.858L380.486 171.963L379.109 172.81L379.056 172.968L380.592 172.757L391.298 171.329L390.768 169.213L392.57 169.16L414.139 166.303L429.296 163.764L429.508 163.605L429.879 163.182L433.854 161.066L436.928 157.046L437.352 155.671L439.366 154.084L441.909 150.857L442.28 150.328L442.121 150.275H440.796L439.101 149.323L436.08 145.673L435.02 141.97V141.864L434.914 141.758L432.688 140.489L431.681 138.796L429.667 140.753L428.395 141.071L426.805 140.436L425.427 141.494L422.566 140.224L421.824 140.542L419.121 138.214L417.743 137.526L415.146 137.844L414.722 138.267Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="North Carolina"
                      d="M486.055 181.062L485.472 181.644L485.578 181.75L486.055 181.062ZM486.479 177.994L486.214 178.417L486.32 178.841L486.479 177.994ZM489.659 173.075L488.864 173.604L488.44 174.238L489.659 173.075ZM496.496 169.742L496.178 169.53L495.489 169.477L496.496 169.742V169.742ZM495.065 169.425H494.588L493.793 169.848L495.065 169.425ZM496.708 170.006L498.245 166.198L497.185 167.785L496.708 170.006ZM498.987 164.981L499.676 163.976H499.305L498.987 164.981ZM503.438 160.855L502.272 154.983L503.279 158.051L503.438 160.855ZM496.973 147.472L496.867 147.525L496.708 147.578H496.761L499.676 152.497L501.954 154.772L496.973 147.472L496.973 147.472ZM496.019 147.789L495.595 147.895L495.701 147.948H496.602L496.496 147.63L496.337 147.683H496.178V147.789L496.072 147.842L496.019 147.789V147.789ZM446.997 159.85L446.732 160.643L446.785 162.918L446.202 162.865L444.824 165.669L443.287 165.827L440.426 168.631L439.154 168.155L437.511 170.588L433.165 174.503L431.045 175.032L428.819 177.095L428.713 178.47L426.752 179.528L426.805 181.856V182.385L427.494 182.226L434.914 180.692L436.928 180.269L437.617 180.11H437.776L455.371 174.556L458.338 176.09L464.327 176.301L468.726 175.455L480.544 182.914L480.756 182.755L486.214 180.533L486.267 177.624L488.228 174.08L490.348 172.069L494.747 169.16L495.33 168.102L496.496 168.631L497.026 165.14L496.39 166.356L494.164 167.097L492.044 167.15L494.641 165.246L493.846 164.399L494.747 162.495L489.765 161.701L489.553 161.437L493.793 160.643L495.171 161.331L496.92 161.172L498.351 160.114L499.411 158.051L500.365 157.787L500.206 154.877L498.987 153.714L497.768 154.825L498.033 157.628L497.132 154.19L496.443 154.031L491.196 156.2L493.528 153.925L493.634 153.026L496.072 152.444L496.761 150.646L498.404 151.598L496.655 149.006L495.436 147.948L474.237 153.978L460.723 157.417L447.05 159.956L446.997 159.85H446.997Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Ohio"
                      d="M446.732 112.611L445.407 106.898L445.142 105.735L443.658 99.228L441.751 100.445L437.67 103.566L435.02 106.793L432.953 107.11L429.137 109.279L427.018 108.009L420.605 107.269L417.213 108.115L413.874 108.908L410.377 109.649L409.847 109.808L410.006 110.654L411.437 118.642L414.616 137.368L414.722 138.267L415.146 137.844L417.743 137.527L419.121 138.214L421.824 140.542L422.566 140.224L425.428 141.494L426.806 140.436L428.395 141.071L429.667 140.753L431.681 138.796L432.688 140.489L434.914 141.758L435.02 141.864L437.299 140.753L438.094 139.008L437.458 137.209L439.26 134.458L440.585 134.247L440.426 131.919L442.599 128.957L442.97 129.38L444.93 127.899L446.626 125.36L446.891 113.775L446.997 113.722L446.732 112.611V112.611Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Tennessee"
                      d="M429.296 163.765L414.139 166.304L392.57 169.16L390.768 169.213L391.298 171.329L380.593 172.757L379.056 172.969V173.022L378.632 173.551L378.42 173.498V173.075V173.022L377.837 173.075L377.89 173.128L378.208 174.609L377.148 175.931L377.042 178.365V178.788V178.841L375.452 181.909L375.77 184.078L374.286 186.405L374.816 188.521L372.908 190.267L373.014 190.373L374.18 190.267L384.779 188.944L389.443 188.31L392.093 187.939H392.199L392.146 187.833L401.049 186.617L405.289 186.088L413.768 184.712L415.358 184.448L416.312 184.342L420.817 183.496L421.93 183.284L426.064 182.491L426.806 182.385V181.856L426.753 179.528L428.713 178.47L428.819 177.095L431.045 175.032L433.165 174.503L437.511 170.589L439.154 168.155L440.426 168.631L443.288 165.828L444.824 165.669L446.202 162.865L446.785 162.918L446.732 160.644L446.997 159.85L446.149 160.009L443.128 160.855L439.525 161.596L430.462 163.447L429.508 163.606L429.296 163.765L429.296 163.765Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Virginia"
                      d="M496.178 147.683H496.337L496.496 147.63L496.39 147.366L496.178 147.683V147.683ZM494.376 141.759V142.023L494.641 141.864L494.376 141.759ZM495.33 139.907L495.277 139.484L495.33 139.907ZM495.012 140.542L494.906 141.23L494.747 141.494L495.012 140.542ZM495.489 139.167L495.542 138.849L495.436 139.167H495.489H495.489ZM495.807 137.738L495.966 137.368L495.701 138.32L495.807 137.738ZM495.86 136.945L496.072 135.781L495.807 136.046L495.86 136.945ZM496.814 131.708L496.92 131.232L496.867 131.338L496.814 131.708H496.814ZM496.602 130.491L495.913 130.756L494.853 131.232L494.482 131.708L494.641 131.761L493.369 139.643L493.846 140.912L494.588 137.632L495.966 133.348L496.602 130.544V130.491ZM497.662 130.068L497.503 130.121L497.45 130.333L497.185 131.972L497.397 131.39L497.662 130.068V130.068ZM442.28 150.328L441.909 150.857L439.366 154.084L437.352 155.671L436.928 157.046L433.854 161.067L429.879 163.182L429.508 163.606L430.462 163.447L439.525 161.596L443.128 160.855L446.149 160.009L446.997 159.85L447.05 159.956L460.723 157.417L474.237 153.978L495.436 147.948L495.277 147.683L495.224 147.525L495.595 147.895L496.019 147.789L495.966 147.736L495.595 145.938L495.86 145.99L496.708 147.577L496.867 147.524L496.973 147.472L496.761 147.048L494.588 143.716L491.885 144.192L490.666 145.197L489.5 144.139L485.526 142.817L482.77 142.711L488.122 142.235L491.09 144.245L491.938 142.922L489.553 139.907L491.249 140.013L490.348 137.58L488.228 137.685L483.194 133.612H482.558L489.659 137.103L489.182 134.67L489.659 133.877L486.055 132.501L482.929 132.29L481.392 130.914L480.12 131.708L479.643 128.058L480.173 128.164L480.067 125.201L479.961 125.095L479.855 125.148L479.749 125.095L479.484 124.884L479.325 124.725L477.629 123.985L475.88 122.715L473.442 122.08L473.283 122.027V122.08L472.965 124.302L468.037 122.186L468.143 125.254L465.44 130.385L463.797 132.184L462.737 135.305L459.504 134.194L457.914 141.388L456.642 143.822L456.43 146.995L455.477 148.53L451.926 149.588L449.011 151.862L447.633 152.074L446.308 153.238L442.969 152.021L442.386 150.381L442.28 150.328L442.28 150.328Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Wisconsin"
                      d="M385.362 73.4663L384.037 75.1061L383.242 77.4866L383.613 78.809L385.362 73.4663ZM354.942 61.0351L355.737 59.9242L355.154 60.4532L354.942 61.0351ZM356.161 59.2894L355.896 58.972L355.313 59.3423L356.161 59.2894V59.2894ZM344.608 62.2518L343.389 63.6271L343.972 69.975L340.58 73.0431L339.944 76.0054L341.799 77.6981L341.269 84.9982L343.23 86.4793L344.502 86.5851L348.53 89.0184L351.074 91.6634L354.306 93.3032L355.048 97.3764V97.6409L356.585 99.4924L356.161 100.921L356.691 104.042L358.281 106.21L361.196 107.745L361.143 108.009L372.696 106.687L376.989 106.158L384.143 105.153L383.931 104.359V101.873L382.5 99.2279L382.129 95.8953L382.818 92.1924L382.447 89.3358L383.719 85.7916L383.242 85.2097L383.348 81.93L384.037 79.4438L383.242 78.5974L381.706 79.1264L380.858 81.3482L378.844 82.5119L379.48 79.7083L381.282 77.3279L381.388 76.2699L381.441 76.217L378.897 73.6778V70.0807L376.035 67.7532L372.113 67.4887L368.085 66.4307L359.394 63.7858L357.698 62.8336L357.539 62.9923L354.836 62.622L353.935 63.151L354.306 59.2894L349.961 61.5112L344.661 62.3575L344.608 62.2517V62.2518ZM354.995 59.4481L354.889 59.0778L354.518 59.2365L354.995 59.4481ZM353.087 59.0778L353.246 58.7605L353.14 58.6547L353.087 59.0778ZM356.956 58.1786L356.797 57.438L356.638 58.3373L356.956 58.1786Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="West Virginia"
                      d="M456.855 121.921L449.329 123.773L446.997 113.722L446.891 113.775L446.626 125.36L444.93 127.899L442.97 129.38L442.599 128.957L440.426 131.919L440.585 134.247L439.26 134.458L437.458 137.209L438.094 139.008L437.299 140.753L435.02 141.864V141.97L436.08 145.673L439.101 149.323L440.797 150.275H442.122L442.281 150.328L442.387 150.381L442.97 152.021L446.308 153.237L447.633 152.074L449.011 151.862L451.926 149.587L455.477 148.529L456.431 146.995L456.643 143.822L457.914 141.388L459.504 134.194L462.737 135.305L463.797 132.184L465.44 130.385L468.143 125.254L468.037 122.186L472.965 124.302L473.283 122.08V122.027L471.747 119.382L468.567 119.012L466.712 120.44V121.498L465.122 121.869L462.79 123.508L461.571 123.773L459.133 127.211L457.914 121.657L456.855 121.921V121.921Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Delaware"
                      d="M488.017 113.193L488.229 113.987L492.627 126.524L497.662 125.042L497.609 124.937H497.715L497.874 124.989L497.98 124.937L497.874 124.725L496.602 121.339L490.401 115.468L490.666 111.395H489.394L488.441 112.135L488.017 113.193H488.017Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="District of Columbia"
                      d="M479.484 124.884L479.749 125.095L479.855 125.148L479.961 125.095L480.067 125.148L480.438 125.36L480.544 125.519V125.889L480.65 126.1L481.339 124.831L480.597 124.408L479.696 124.461L479.484 124.884V124.884Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                    <path
                      id="Maryland"
                      d="M497.715 129.856L498.086 127L497.768 129.116L497.556 130.015L497.503 130.121L497.662 130.068L497.715 129.856V129.856ZM497.98 124.937L497.874 124.99L497.98 125.307V125.942V124.937V124.937ZM457.915 121.657L459.133 127.212L461.571 123.773L462.79 123.509L465.122 121.869L466.712 121.498V120.44L468.567 119.012L471.747 119.383L473.284 122.027L473.443 122.08L475.88 122.715L477.629 123.985L479.325 124.725L479.484 124.884L479.696 124.461L480.597 124.408L481.339 124.831L480.65 126.101V126.154L479.643 129.222L482.929 131.338L486.215 131.496L488.388 132.501L487.487 129.962L484.678 129.01L483.989 126.841L485.738 129.169L487.169 129.38L485.897 128.111L484.89 124.355L485.155 122.186L484.042 119.806L485.208 118.854L486.056 115.785L485.738 120.335L486.639 121.869L487.487 120.07L487.964 123.033L487.063 125.201L489.66 126.154L487.434 126.894L488.6 129.063L490.507 129.698L491.567 127.846L491.461 130.438L493.263 130.385L494.429 131.708H494.482L494.853 131.232L495.913 130.756L496.602 130.491L496.549 130.385L497.927 126.312V126.154L497.662 125.096V125.043L492.627 126.524L488.229 113.987L488.017 113.193L487.116 113.458L483.353 114.622L462.631 120.388L458.868 121.393L457.915 121.657V121.657Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="New Jersey"
                      d="M500.576 112.982L500.311 112.347V112.982H500.576ZM501.106 111.024L501.265 109.437L500.947 110.813L501.106 111.024ZM498.933 94.7846L493.369 93.4092L492.415 93.1447L491.514 92.9331L489.288 97.8527L490.242 99.0164L490.189 102.561L491.196 102.719L493.263 108.115L493.157 108.274L490.56 112.082L490.825 114.992L497.079 117.108L497.132 119.541L498.562 117.531L498.774 114.622L500.258 113.616L499.675 111.448L500.788 108.856V103.195L500.417 101.344L497.927 101.397L498.562 98.8578L498.933 94.7846V94.7846Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="New York"
                      d="M498.775 99.0695L497.98 100.18L497.768 100.498L498.775 99.0695ZM506.089 96.4775L508.738 94.1499V94.0441L506.089 96.4775ZM499.146 98.1173V96.3188L498.987 97.2709L499.146 98.1173ZM511.441 89.6535L510.805 89.4948L510.699 89.9709L511.441 89.6535ZM512.872 88.7014L512.819 89.2304L512.925 88.913L512.872 88.7014H512.872ZM511.388 88.7543L507.837 92.034L502.379 94.3615L500.948 95.5782L500.842 96.742L499.358 97.9586L499.57 99.5456L501.849 98.6463L505.188 95.9485L508.897 93.9913L514.515 88.7014L510.54 91.7166L509.268 92.2456L511.388 88.7543ZM513.031 86.5326L513.243 86.2152L512.607 86.9557L513.031 86.5326ZM453.463 84.5753L452.615 84.4695L453.251 85.3159L453.463 84.5753ZM471.058 68.3883L471.164 67.8065L470.74 68.3354L471.058 68.3884V68.3883ZM471.323 64.5796L471.111 64.6854L470.846 65.2673L471.323 64.5796ZM448.905 94.626L449.276 96.213L452.085 96.9007L468.196 92.5101L484.413 87.6434L487.381 89.9181L487.964 91.2405L491.408 92.7217L491.514 92.9333L492.415 93.1449L493.369 93.4094L498.934 94.7847L498.828 94.5202L499.305 96.6891L500.365 96.4246L500.948 94.0442V93.9912L499.994 93.092L501.372 91.3992L500.736 90.6057L498.722 82.8296L498.616 82.3006L498.351 82.142L498.192 79.8144L498.033 77.2753L497.874 74.5246V74.3659L497.768 74.4188L495.118 65.7434L492.309 61.3528L491.514 56.1159L489.13 50.5615L488.812 50.7202L477.735 54.4231L475.51 56.8036L473.019 61.5644L473.125 62.6224L469.839 67.5949L471.853 68.2825L472.436 72.0383L470.104 75.1065L463.108 79.3383L461.783 78.8094L456.59 79.5499L451.767 82.4594L452.032 83.9934L453.728 85.4746L452.774 90.1297L448.958 94.5731L448.905 94.6261V94.626Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Pennsylvania"
                      d="M491.408 92.7218L487.963 91.2407L487.38 89.9182L484.412 87.6436L468.196 92.5102L452.085 96.9008L449.276 96.2131L448.905 94.6262L448.004 95.3138L446.573 96.3189L443.976 98.9639L443.658 99.2283L445.142 105.735L445.407 106.899L446.732 112.612L446.997 113.723L449.329 123.773L456.854 121.922L457.914 121.657L458.868 121.393L462.631 120.388L483.353 114.622L487.115 113.458L488.016 113.194L488.44 112.136L489.394 111.395H490.666L490.825 110.919L492.892 108.591L493.104 108.221L493.263 108.115L491.196 102.72L490.189 102.561L490.242 99.0168L489.288 97.853L491.514 92.9334L491.408 92.7218Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Maine"
                      d="M516.952 64.5267H516.899L517.005 64.5796L516.952 64.5267H516.952ZM520.874 53.2593L520.45 52.6245V52.9419L520.874 53.2593ZM520.132 52.6774V52.1484L520.079 51.831L520.132 52.6774ZM522.04 50.4557L521.934 50.4028L521.987 50.5615L522.04 50.4557L522.04 50.4557ZM527.34 47.8107L527.234 47.0173L527.022 47.3875L527.34 47.8107ZM526.015 48.1281L526.068 47.5462L525.432 47.652L526.015 48.1281ZM527.976 46.3825H527.764V46.4883L527.976 46.3825ZM525.326 47.1759L524.849 47.0702L524.796 47.5462L525.326 47.1759ZM528.029 45.5361L528.506 45.9064L528.347 45.4832L528.029 45.5361ZM526.598 45.589L526.121 46.4883L526.757 46.1709L526.598 45.589ZM524.319 45.6419L524.107 45.9593L524.266 46.4354L524.319 45.6419ZM527.446 43.8962L527.393 43.473L527.234 43.7375L527.446 43.8962H527.446ZM527.181 44.1078L526.704 43.6846V44.0549L527.181 44.1078V44.1078ZM524.213 45.3245L524.107 44.7426L523.895 45.2187L524.213 45.3245ZM529.248 43.473L528.453 44.6368L528.4 43.7904L529.248 43.473ZM533.116 39.9288L532.745 39.3999L532.533 39.5057L533.116 39.9288ZM534.547 37.5484L534.229 37.3897L534.176 37.5484H534.547ZM535.236 33.4223H534.759L535.289 33.581L535.236 33.4223H535.236ZM536.031 33.9513L535.872 32.9991L535.448 32.9462L536.031 33.9513ZM535.183 33.1049L535.077 32.0999L534.706 32.7875L535.183 33.1049ZM504.445 41.41L512.13 59.3955L512.236 59.7658L515.575 63.839V63.7861L516.105 63.6274L516.211 60.6122L517.058 59.5542L517.588 56.7506L517.111 56.2745L518.012 53.5238L521.086 52.0955L523.1 49.6622L523.842 45.4303L527.075 45.2187L526.651 43.0498L530.679 41.5158L530.944 39.1353L531.897 39.3469L534.547 37.1781L535.713 34.3745L533.01 31.6766L530.149 31.0948L529.089 28.9259V27.6564L527.34 28.1853L525.379 27.4977V25.3288L520.079 13.9027L516.211 11.8926L511.918 15.4897L510.752 15.2781L509.745 13.4266L508.367 13.9556L506.406 23.689L507.095 26.8629L507.678 33.3165L506.141 38.289L507.201 39.0824L505.929 41.5158L504.551 41.3042L504.445 41.41V41.41Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Michigan"
                      d="M393.1 75.3178L392.835 74.8946L392.782 75.4236L393.1 75.3178ZM393.948 74.3656L393.312 73.5192L393.206 73.8895L393.948 74.3656ZM394.478 70.5569L393.948 70.0808V70.1866L394.478 70.5569ZM393.153 111.976L399.724 110.919L401.579 110.548L409.688 109.12L409.847 109.808L410.377 109.649L413.874 108.908L417.213 108.115L420.605 107.269L420.552 107.11L422.301 103.671L422.142 100.815L424.103 95.8953L425.64 96.7946L426.223 95.6837L426.064 91.4518L424.633 88.8069L422.513 83.1996L420.658 81.1366L419.704 80.8721L416.259 83.2526L416.63 83.7286L414.828 87.1142L413.079 86.7968L412.55 83.2526L413.291 82.9881L414.828 79.4439L414.987 73.2018L412.603 67.912L407.303 67.0127L406.773 66.2192L401.844 64.791L399.618 67.5417L399.83 69.9221L398.134 72.0381L398.505 75.3178L396.863 76.4815V72.3554L395.379 75.4765L393.63 78.2272L392.464 79.1265L393.047 82.0359L392.305 85.0511L392.729 88.8069L392.199 90.6584L396.015 97.9584L396.492 100.762L396.015 105.946L393.471 111.765L393.153 111.976ZM404.494 64.3149L403.116 64.4207L403.964 65.0554L404.494 64.3149ZM396.439 65.6902H396.015L396.492 65.9018L396.439 65.6902H396.439ZM405.713 58.9721L405.183 58.1257L404.971 58.1786L405.713 58.9721V58.9721ZM357.698 62.8337L359.394 63.7859L368.086 66.4308L372.113 67.4888L376.035 67.7533L378.897 70.0808V73.6779L381.441 76.217V76.1641L383.507 70.1866L385.998 68.4409L387.906 66.325L388.224 68.2293L390.185 65.2141L394.902 63.4156L395.273 62.675L400.042 63.2569L401.897 64.209L402.798 61.8815L403.646 62.4105L407.356 61.8286L406.455 60.3474L404.812 59.3953L405.13 55.9569L401.897 57.7554L398.929 57.3851L397.976 55.1105L398.294 54.3699L394.266 56.2743L391.669 56.4329L387.005 59.2895L386.475 60.3474L383.613 59.6598L381.812 60.4532L378.208 57.3322L370.205 54.8989L370.046 53.9467L364.906 58.8663L361.991 59.6069L357.857 62.7279L357.698 62.8337V62.8337ZM376.459 50.8257L370.258 53.8938L372.325 55.904L373.12 53.8938L375.24 51.3018L376.459 50.8257ZM369.516 43.5786L365.277 46.488L365.065 47.9163L368.404 45.483L369.516 43.5786Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      id="Alaska"
                      d="M55.3002 295.905L55.0352 296.011L55.2472 296.064L55.3002 295.905H55.3002ZM57.2611 296.222V296.275V296.222ZM56.3071 295.323V295.482L56.4131 295.429L56.3071 295.323ZM55.8302 295.058V295.006V295.058ZM56.8371 295.587V295.482L56.7841 295.535L56.8371 295.588V295.587ZM56.7311 295.482V295.429H56.6251L56.7311 295.482ZM15.3938 260.727L15.3409 261.098L15.4468 262.156L15.3939 260.727H15.3938ZM15.1289 259.299L15.1819 259.775L15.2349 259.616L15.1289 259.299H15.1289ZM56.7311 294.847L56.7841 294.53L56.5721 294.635L56.7311 294.847H56.7311ZM62.7727 297.439L62.7197 297.386L62.8257 297.598L62.7727 297.439L62.7727 297.439ZM58.851 295.587L58.268 295.058V296.328L58.851 295.587ZM60.1759 296.751L60.1229 296.381L59.2219 296.328L60.1759 296.751H60.1759ZM63.3557 297.492L63.3026 297.598H63.4086L63.3556 297.492H63.3557ZM63.5676 297.545H63.4617L63.6736 297.598L63.5676 297.545ZM64.2036 297.756H64.1506H64.0976H64.2036H64.2036ZM17.4077 261.891L17.6197 261.944L17.7787 261.891H17.4077ZM63.0377 297.016L62.6137 296.963L62.7727 297.122L63.0377 297.016ZM14.5459 257.765L13.804 257.448L13.751 257.606L14.5459 257.765H14.5459ZM64.3626 297.122L64.2566 297.069V297.122H64.3626ZM67.5954 297.756L65.5285 297.915L65.0515 298.127L67.5954 297.756ZM10.7832 249.46H10.2002L10.3062 249.619L10.7832 249.46ZM74.0079 300.19V299.978H73.902L74.0079 300.19ZM76.7638 300.243L76.8698 300.137L76.7638 300.031V300.243ZM78.8306 300.824L78.9366 300.772H78.8836L78.8306 300.824H78.8306ZM77.1347 299.872L77.0817 299.661H76.9757L77.1347 299.872H77.1347ZM80.6855 300.666L80.6325 300.719H80.6855V300.666ZM11.1011 246.762L10.3062 246.868L11.3131 247.767L11.1011 246.762ZM77.8767 299.872L77.9827 299.555H77.9297L77.8767 299.872H77.8767ZM86.8331 299.079L86.8861 298.973L86.7801 298.92L86.8331 299.079L86.8331 299.079ZM85.5082 298.603L83.6533 300.243L84.9782 300.137L86.5151 298.92L85.5082 298.603ZM88.847 299.185L88.476 299.079L88.741 299.29L88.847 299.185ZM89.5889 299.238L89.006 299.079L88.9 299.132L89.5889 299.238V299.238ZM87.5751 298.497H86.9921L87.999 298.761L87.5751 298.497ZM90.0129 299.026L89.9599 298.92L89.7479 298.973L90.0129 299.026L90.0129 299.026ZM88.423 298.391L88.211 298.285V298.867L88.423 298.391ZM95.2065 299.714L95.1535 299.661H95.0475L95.2065 299.714H95.2065ZM95.3125 299.661V299.608L95.2065 299.555L95.3125 299.661V299.661ZM94.4116 299.343L94.5176 299.555V299.502L94.4116 299.343ZM94.8886 299.343L94.4116 299.185L94.9946 299.608L94.8886 299.343ZM95.5775 298.814V298.867V298.814ZM101.884 299.608L101.778 299.396H101.725L101.884 299.608H101.884ZM158.908 296.064L158.802 295.958L158.855 296.064H158.908H158.908ZM94.6766 297.703V297.651L94.6236 297.703H94.6766ZM160.445 295.111L160.604 295.323H160.71L160.445 295.111ZM102.52 299.079L102.467 299.132V299.29L102.52 299.079V299.079ZM95.9485 298.127L96.0545 297.703H96.0015L95.9485 298.127H95.9485ZM163.519 293.895L163.042 294.159L163.466 294.371L163.519 293.895H163.519ZM96.9024 297.862L96.8494 297.756L96.9024 297.862ZM92.9277 296.698L91.6028 296.963L90.4369 298.497L92.9277 296.698ZM102.414 298.709L102.096 298.973L102.414 298.92V298.709V298.709ZM163.519 293.63L163.413 293.419L163.36 293.524L163.519 293.63H163.519ZM97.3264 297.333L96.9554 297.28L97.3264 297.651V297.333V297.333ZM160.021 294.318L159.915 294.424L160.021 294.794V294.318ZM98.1743 297.28L98.0154 297.333L98.2273 297.492L98.1743 297.28L98.1743 297.28ZM102.096 298.391H101.937L101.831 298.285L102.096 298.391ZM97.7504 297.28L97.4854 297.122L97.5914 297.28H97.7504ZM101.301 297.862L100.824 298.021L100.506 298.867L101.301 297.862ZM158.855 294.159V294.53L159.067 294.265L158.855 294.159ZM95.0475 296.169L95.4715 296.064H95.4185L95.0475 296.169H95.0475ZM94.5176 295.852L94.4116 295.746V295.799L94.5176 295.852V295.852ZM158.855 293.789L158.749 293.736L158.696 293.895L158.855 293.789L158.855 293.789ZM100.718 296.963L100.612 296.91L100.506 297.069L100.718 296.963V296.963ZM158.325 293.895L158.378 293.63L158.272 293.577L158.325 293.895H158.325ZM157.901 293.63L157.742 293.842L158.007 293.895L157.901 293.63ZM102.944 296.222L102.838 296.117H102.785L102.944 296.222H102.944ZM157.742 292.678L158.166 292.837L158.325 292.625L157.742 292.678ZM158.378 292.308L158.219 292.414L158.484 292.572L158.378 292.308ZM157.159 292.625L157.053 292.414L156.947 292.519L157.159 292.625ZM162.459 290.668L161.77 292.625L162.459 292.202V290.668ZM99.6583 294.741H99.6052H99.6583ZM157.795 291.409L157.318 291.885L157.424 292.414L157.795 291.409ZM108.456 295.64V295.429L108.403 295.535L108.456 295.64ZM157.212 290.88L158.749 293.207L162.194 295.376L161.399 293.524L158.113 290.721L157.212 290.88ZM106.336 294.794L106.283 294.635L106.177 294.688L106.336 294.794H106.336ZM159.014 289.98L158.802 290.774L159.173 290.509L159.014 289.98ZM160.127 289.98L160.074 290.509L160.551 290.668L160.127 289.98H160.127ZM108.032 294.106L107.767 294.053L107.502 294.159L108.032 294.106V294.106ZM113.49 294.53L113.278 294.9L113.384 294.582L113.49 294.53V294.53ZM114.285 294.582L113.808 294.635L114.073 294.953L114.285 294.582ZM82.1694 287.811L82.6994 288.076L82.5934 287.97L82.1694 287.811ZM103.209 293.048L103.262 292.995L103.209 293.048ZM103.368 292.995H103.421V292.943L103.368 292.995ZM158.166 288.922L158.431 289.927L158.961 289.61L158.166 288.922ZM104.799 292.414L104.852 292.361L104.799 292.414ZM155.887 289.345L156.152 291.779L156.682 291.25L155.887 289.345ZM156.152 288.552L157.371 290.245L157.212 289.134L156.152 288.552ZM152.39 288.975L152.072 289.98L152.496 289.293L152.39 288.975ZM109.993 291.567L109.94 291.514L109.993 291.567ZM115.027 291.673L114.921 291.514L115.027 291.726V291.673ZM152.496 288.182L154.616 291.673L154.298 289.293L152.496 288.182ZM117.995 290.033L117.836 290.192L118.101 290.298L117.995 290.033ZM117.306 290.139L117.359 289.98H117.147L117.306 290.139H117.306ZM116.776 290.139L115.398 291.038L113.702 293.26L114.55 294.159L118.472 291.25L116.776 290.139ZM150.217 286.701L149.846 286.489V286.806L150.217 286.701ZM116.458 289.504L116.511 289.716L116.882 289.927L116.458 289.504H116.458ZM151.224 285.696L150.164 286.224L151.171 286.542L151.224 285.696H151.224ZM150.535 285.696L150.429 285.59L150.376 285.696H150.535H150.535ZM153.768 284.849L153.344 284.69L153.238 285.008L153.768 284.849ZM151.489 285.219L151.118 285.166V285.272L151.489 285.219V285.219ZM152.655 284.796L154.828 287.97L154.245 285.061L152.655 284.796ZM117.677 288.235L116.405 289.187L116.988 289.822L118.684 288.552L117.677 288.235ZM103.262 286.224L103.209 286.172V286.224H103.262ZM102.679 285.96L102.626 285.696V285.801L102.679 285.96ZM118.949 286.648L118.843 286.701V286.753L118.949 286.648V286.648ZM118.419 286.542H118.366L118.26 286.701L118.419 286.542H118.419ZM119.691 286.119L119.532 286.013V286.066L119.691 286.119V286.119ZM120.115 286.066L119.956 285.96V286.013L120.115 286.066V286.066ZM119.426 285.907H119.214V285.96L119.426 285.907ZM129.972 284.849L130.025 284.69L129.919 284.796L129.972 284.849L129.972 284.849ZM133.205 283.156L133.841 282.363L133.629 282.522L133.205 283.156ZM126.739 283.051L126.951 282.892L127.004 282.68L126.739 283.051H126.739ZM126.739 282.469L126.527 282.627L126.898 282.522L126.739 282.469V282.469ZM118.048 282.469L117.995 282.257H117.942L118.048 282.469H118.048ZM126.527 282.416L126.315 282.627L126.209 282.839L126.527 282.416ZM132.357 281.781H132.41H132.463H132.357H132.357ZM132.622 281.781L132.516 281.728V281.781H132.622ZM131.986 281.728L132.039 281.781V281.728H131.986ZM127.64 282.045L127.852 281.834L127.587 282.045H127.64H127.64ZM128.276 281.569L127.004 283.632L128.647 281.728L128.276 281.569ZM126.633 281.834L126.474 281.622L126.421 281.728L126.633 281.834H126.633ZM130.661 281.358L130.555 281.305L130.608 281.358H130.661H130.661ZM132.039 281.464V281.093L131.933 281.252L132.039 281.464ZM93.1397 277.39L90.5958 277.285L92.3447 279.136L93.1397 277.39ZM129.336 281.146L129.442 281.516L129.707 281.093L129.336 281.146V281.146ZM127.216 281.093L127.057 282.257L127.322 281.516L127.216 281.093ZM81.2155 272.312L81.2685 272.1L81.2155 272.312ZM126.686 280.353L126.739 280.511L126.845 280.458L126.686 280.353L126.686 280.353ZM126.421 280.564L126.315 280.247L126.156 280.353L126.421 280.564ZM128.912 279.929V279.718L128.753 279.824L128.912 279.929ZM126.527 279.612V280.141L126.686 279.771L126.527 279.612ZM122.5 278.977V278.819V278.977ZM94.8356 272.418L94.9416 272.1L94.8885 272.153L94.8355 272.418L94.8356 272.418ZM94.9946 271.889L94.9415 271.836L94.8885 271.889H94.9945H94.9946ZM97.3264 270.619V270.566V270.619ZM97.3264 270.408L97.2734 270.302L97.3264 270.408ZM98.2803 269.032H98.2273H98.2803ZM98.5983 269.138L98.3863 269.032V269.085L98.5983 269.138V269.138ZM98.2803 268.927V268.821L98.1743 268.927H98.2803ZM89.8009 266.44L89.6949 266.176L89.6419 266.017L89.8009 266.44H89.8009ZM90.5958 265.488H90.6489L90.7019 265.541L90.5959 265.488H90.5958ZM89.1649 265.224L88.741 264.695L89.059 265.118L89.1649 265.224ZM88.317 264.377H88.211L88.37 264.43L88.317 264.377H88.317ZM88.317 263.742L88.423 263.795L88.317 263.742ZM102.361 267.921L101.778 267.974L102.096 268.133L102.361 267.922V267.921ZM87.734 262.79L87.3101 264.377L88.635 264.589L90.3839 266.387L91.4438 265.911L87.734 262.79ZM97.0084 263.425V263.319V263.372V263.425V263.425ZM94.3586 257.818L94.2526 257.765L94.3056 257.818H94.3586H94.3586ZM95.8955 258.347L96.0545 258.294H96.0015L95.8955 258.347H95.8955ZM96.9554 258.029H97.1144L97.5914 257.818L96.9554 258.029ZM98.8633 257.448L98.9693 257.342L98.8103 257.448H98.8633H98.8633ZM99.1283 257.395L99.4463 257.236L99.1813 257.289L99.1283 257.395L99.1283 257.395ZM99.9232 257.077L99.6583 257.13V257.183L99.9232 257.077V257.077ZM133.947 247.503L133.735 247.344L133.364 247.185L133.947 247.503ZM106.177 246.339L106.654 245.704L106.389 245.916L106.177 246.339ZM106.813 245.598L107.025 245.281L106.919 245.387L106.813 245.598ZM107.131 245.175L107.502 244.858L107.29 244.963L107.131 245.175ZM123.825 245.281L124.09 245.545H124.249L123.825 245.281ZM115.292 241.79L113.119 243.588L111.794 243.218L108.721 244.963L108.138 244.593L104.64 248.508L101.089 249.301L101.407 251.205L102.997 253.374L105.965 256.231L105.488 257.342L107.714 258.294L106.548 258.505L105.117 257.395L105.859 259.034L104.905 259.616L101.884 256.866L99.4993 257.289L95.4185 258.823L97.2734 260.886L97.0084 262.155L98.2273 263.637L102.255 265.224L105.17 263.742L105.647 264.853L104.852 268.186H102.414L99.5523 269.456L99.3933 268.556L97.9094 269.138L97.2204 270.672L94.7826 272.524V275.221L95.7365 275.645L94.9946 277.919L98.1743 280.67L100.188 279.824L99.7642 283.209L100.347 283.95L102.785 284.479L103.686 285.484L105.806 285.642L106.813 286.7L108.986 286.066L107.979 287.441L107.184 290.245L100.718 294.424L99.8702 295.27L98.6513 294.794L96.6904 295.27L93.8816 297.121L98.2803 295.852L98.9163 296.804L104.587 294.953L104.746 295.693L106.972 293.471L111.635 290.245L112.006 290.456L116.087 287.229L115.027 285.96L116.405 283.685L120.009 279.4L122.765 278.871L123.613 279.453L120.274 280.405L119.373 283.95L119.479 285.854L120.645 285.748L126.262 282.363L126.686 281.093L126.209 279.136L127.905 279.559L129.124 278.766L132.622 280.882L132.357 281.463L140.307 282.469L142.161 281.887L142.691 282.68L149.581 285.96L150.747 285.272L150.853 281.305L151.754 283.103L156.205 286.33L156.576 287.653L160.445 289.821L161.452 292.625L162.406 290.456L164.367 294.265L165.692 292.096L164.632 289.398L160.551 288.975L154.298 282.998L150.906 280.511L148.309 283.05H146.772L143.221 280.723L139.724 280.564L134.742 249.195L133.894 247.714L131.88 246.498L128.859 247.079L126.527 246.603L123.56 245.44L120.433 245.651L119.638 244.17L117.147 243.8L116.723 242.9L115.61 244.17L115.292 241.79Z"
                      fill="#ECF0F6"
                      stroke="#1359C3"
                      strokeWidth="0.970631"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="Form_Section w-full lg:w-[50%] px-[15px] sm:px-[30px] relative">
              <div className="flex flex-col gap-2 pt-3 w-full">
                <Autocomplete
                  labelPlacement="outside"
                  label=""
                  placeholder="All Courts"
                  className="w-full"
                  inputProps={{
                    classNames: {
                      input: "ml-1",
                      inputWrapper:
                        "h-[54px] mt-[8px] border-2 pl-7 border-[#9b9898] rounded-none",
                    },
                  }}
                >
                  {AllCourtsOption.map((AllCourts) => (
                    <AutocompleteItem
                      key={AllCourts.value}
                      value={AllCourts.value}
                    >
                      {AllCourts.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <div className="icon absolute z-20 top-[37px] left-[25px] sm:left-[40px]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2695 20.032L16.2078 14.9703C17.4625 13.4406 18.2188 11.4812 18.2188 9.3457C18.2188 4.44727 14.2441 0.472656 9.3457 0.472656C4.44297 0.472656 0.472656 4.44727 0.472656 9.3457C0.472656 14.2441 4.44297 18.2188 9.3457 18.2188C11.4812 18.2188 13.4363 17.4668 14.966 16.2121L20.0277 21.2695C20.3715 21.6133 20.9258 21.6133 21.2695 21.2695C21.6133 20.9301 21.6133 20.3715 21.2695 20.032ZM9.3457 16.4527C5.42266 16.4527 2.23438 13.2645 2.23438 9.3457C2.23438 5.42695 5.42266 2.23438 9.3457 2.23438C13.2645 2.23438 16.457 5.42695 16.457 9.3457C16.457 13.2645 13.2645 16.4527 9.3457 16.4527Z"
                      fill="#f16622"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="border border-[#EBEBEB] p-[20px] max-h-[469px] overflow-y-auto rounded-[2px] mt-5 custom-scrollbar-blue">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Alabama
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      lowa
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Kansas
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Kentucky
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Louisiana
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Maine
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Maryland
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Massachusetts
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Mishigan
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Mississippi
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      Missouri
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                  <div className="flex group justify-between bg-[#EAF1FD] rounded-[3px] p-[15px] hover:bg-[#1359C3] cursor-pointer hover:text-white">
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      New York
                    </span>
                    <span className="text-[16px] text-bluesecondary group-hover:text-white">
                      <b>0</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lightgrey mt-5 p-5">
            <div className="container">
              <div className="cards_filters_topbar flex items-center gap-5 justify-start sm:justify-end flex-wrap">
                <span>Filters applied</span>
                <Button className="bg-orangeprimary hover:bg-grey rounded-[22px] text-white text-lg">
                  Close Filters
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
