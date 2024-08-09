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
import { counter } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import CourtsMapComponent from "../Court-Filter/CourtsMap";
import CourtMapComponent from "../Court-Filter/CourtMap";

//new
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import FilterTab from "./Filter-Tab";
import SpecializationFilter from "./Filter-Components/specialization";
import LocationFilter from "./Filter-Components/location";
import LanguageFilter from "./Filter-Components/language";
import { fetchSpecializationsData } from "@/actions/filter-actions/getSpecializations";
import { fetchLocationsData } from "@/actions/filter-actions/getLocations";
import { fetchLanguagesData } from "@/actions/filter-actions/getLanguages";

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


  //NEW
  //Specializationaction
  const [specializations, setSpecializations] = useState([]);
  const [languages, setLangusges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSpecializationsData();
      setSpecializations(response.data || []);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchLanguagesData();
      setLangusges(response.data || []);
    };
    fetchData();
  }, []);


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
                <CourtsMapComponent CourtMapToggle={CourtMapToggle} />
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
              {/* <div className="firt_checkbox_section w-full lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Checkbox defaultSelected radius="none">
                  available as substitute attorney (0)
                </Checkbox>
              </div> */}

              {/* <PostList fetchData={() => fetchPostsByTopicSlug(slug)} /> */}
              <SpecializationFilter specializations={specializations ? specializations : specializations} />
              <LocationFilter />

              <LanguageFilter languages={languages} />

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
        <CourtMapComponent />
      )}
    </>
  );
};

export default Filter;
