"use client"
import React,{useState} from "react";
import { Input, Button, Checkbox, CheckboxGroup, Select, SelectItem } from "@nextui-org/react";
import StarSvg from "../Icons/starSvg";
import SearchSvg from "../Icons/searchSvg";
import FillterSvg from "../Icons/filterSvg";


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
  { key: "crocodile", label: "Crocodile" }
];

export const SortBy = [
  { key: "date", label: "Date" },
  { key: "price", label: "Price" },
  { key: "rank", label: "Rank" },
  { key: "language", label: "Language" },
  { key: "location", label: "location" },
  { key: "specialization", label: "Specialization" }
];



const Filter = () => {
  const [ toogleFilter,setToogleFilter ] = useState(false);

  const FiltterToggle = () =>{
    setToogleFilter(!toogleFilter);
  }


  return (
    <>

      <div className="bg-lightgrey mt-[60px] border-1 border-lightgrey">
        <div className="container">
          <div className="filter_main_wrapper py-[15px] flex items-center justify-between flex-wrap">
            <div className="inner_filter_left flex items-center justify-between gap-[10px]">
              <div className="filter_serach_section">
                <Input className="border border-lightgrey rounded-xl w-64 max-w-96"
                  type="text"
                  placeholder="Search"
                  startContent={<SearchSvg width={`16px`} height={`16px`} fill={`fill-orangeprimary`}/>}
                />
              </div>
            </div>

            <div className="inner_filter_right flex items-center justify-end gap-[30px] flex-wrap w-[50%]">
              <div className="filter_filter_section">
                <Button className="bg-orangeprimary text-white text-lg" endContent={<FillterSvg width={`13px`} height={`13px`} fill={`fill-white`}/>} onClick={ (e) => FiltterToggle() } >
                  Filters
                </Button>
              </div>
              <div className="">
                <Button className="bg-orangeprimary text-white text-lg rounded-[22px] px-6 py-[10px]">
                  Post a Job
                </Button>
              </div>
              <span>Sort By</span>
              <Select
                //label="Select an animal"
                className="max-w-xs"
                defaultSelectedKeys={["location"]}
              >
                {SortBy?.map((item) => (
                  <SelectItem key={item?.key}>
                    {item?.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
      {toogleFilter && (
        <>       
          <div className="container">
            <div className="filter_main_inner_select mt-10 pl-5 flex items-center justify-between flex-wrap">
              <div className="firt_checkbox_section w-full lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4 sm:w-1/2">
                <Checkbox defaultSelected radius="none">available as substitute attorney (0)</Checkbox>
              </div>
              <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
                <Select
                  label="Specialization"
                  placeholder="Select an animal"
                  labelPlacement="outside"
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
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
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
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
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
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
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
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
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
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
                    <SelectItem key={animal.key}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
              <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <CheckboxGroup label="Hourly rate"
                  defaultValue={["buenos-aires", "london"]}
                >
                  <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                  <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                  <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                  <Checkbox value="london" radius="none">London</Checkbox>
                  <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                </CheckboxGroup>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <div className="form_group">
                  <CheckboxGroup
                    label="Last Activity"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Experience"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Talent Type"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            </div>

            <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
              <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <CheckboxGroup label="Rate"
                  defaultValue={["buenos-aires", "london"]}
                >
                  <Checkbox value="buenos-aires" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="sydney" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="san-francisco" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="london" radius="none">
                    <div className="review_rating_section flex items-center justify-between gap-[10px]">
                      <div className="review_rating_section_inner flex items-center gap-[5px]">
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                        <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      </div>
                      <div className="rating_number"> (3)</div>
                    </div>
                  </Checkbox>
                  <Checkbox value="tokyo" radius="none">   <div className="review_rating_section flex items-center justify-between gap-[10px]">
                    <div className="review_rating_section_inner flex items-center gap-[5px]">
                      <StarSvg width={`16px`} height={`16px`} color={`fill-yellow stroke-yellow`} />
                      <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                      <StarSvg width={`16px`} height={`16px`} color={`fill-lightgrey stroke-lightgrey`} />
                    </div>
                    <div className="rating_number"> (3)</div>
                  </div></Checkbox>
                </CheckboxGroup>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
                <div className="form_group">
                  <CheckboxGroup
                    label="Cases"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Reviews"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
                <div className="form_group">
                  <CheckboxGroup
                    label="Earned amounts"
                    defaultValue={["buenos-aires", "london"]}
                  >
                    <Checkbox value="buenos-aires" radius="none">Buenos Aires</Checkbox>
                    <Checkbox value="sydney" radius="none">Sydney</Checkbox>
                    <Checkbox value="san-francisco" radius="none">San Francisco</Checkbox>
                    <Checkbox value="london" radius="none">London</Checkbox>
                    <Checkbox value="tokyo" radius="none">Tokyo</Checkbox>
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
    </>
  );
};

export default Filter;
