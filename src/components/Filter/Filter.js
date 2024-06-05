"use client"
import React from "react";
import {Input , Button , Checkbox, CheckboxGroup, Select, SelectItem} from "@nextui-org/react";
import Image from "next/image";

const svg = <svg height="10pt" viewBox="-4 0 393 393.99003" width="10pt" xmlns="http://www.w3.org/2000/svg">
<path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0" fill="#fff"></path>
</svg>
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f16622" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

export const animals = [
  {key: "cat", label: "Cat"},
  {key: "dog", label: "Dog"},
  {key: "elephant", label: "Elephant"},
  {key: "lion", label: "Lion"},
  {key: "tiger", label: "Tiger"},
  {key: "giraffe", label: "Giraffe"},
  {key: "dolphin", label: "Dolphin"},
  {key: "penguin", label: "Penguin"},
  {key: "zebra", label: "Zebra"},
  {key: "shark", label: "Shark"},
  {key: "whale", label: "Whale"},
  {key: "otter", label: "Otter"},
  {key: "crocodile", label: "Crocodile"}
];

const Filter = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] mt-[20px] border-1 border-[#EBEBEB] mt-[60px]">
      <div class="container">
      <div className="filter_main_wrapper bg-[#F9F9F9] py-[15px] flex items-center justify-between flex-wrap">
        <div className="inner_filter_left flex items-center justify-between gap-[10px]">
        <div className="filter_serach_section">
      <Input className="bg-[#f3efef]"
                type="text"
                placeholder="Search"
                startContent={searchIcon}
              />
      </div>
      <div className="">    
       <Button className="bg-orangeprimary text-[#fff] text-[18px] rounded-[22px] px-[10px] py-[10px]">
        Post a Job
      </Button> 
       </div>
      </div>

      <div className="inner_filter_right flex items-center justify-end gap-[30px] flex-wrap w-[50%]">
        <div className="filter_filter_section">
        <Button className="bg-orangeprimary text-[#fff] text-[18px]" endContent={svg}>
        Filters
      </Button>  
      </div>
      <span>Sort By</span>
      <Select 
        label="Select an animal" 
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
      </div>
      </div>

      <div class="container">
      <div class="filter_main_inner_select mt-[40px] pl-[20px] flex items-center justify-between flex-wrap">
        <div className="firt_checkbox_section w-full lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4 sm:w-1/2">
        <Checkbox defaultSelected radius="none">available as substitute attorney (0)</Checkbox>
        </div>
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2">
        <Select
      label ="Specialization"
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
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2 sm:mt-[20px] sm:gap-[10px]">
        <Select
      label="Location"
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
        <div className="firt_checkbox_section w-full mt-[10px] lg:w-[calc(25%_-_10px) md:w-1/2 lg:w-1/4  sm:w-1/2 sm:mt-[20px] sm:gap-[10px]">
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
      <div class="filter_main_inner_select mt-[40px] pl-[20px] flex items-center justify-between flex-wrap">
        <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
        <Select
      label ="Country"
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
      <div className="checkbox_section flex items-center justify-between mt-[40px] flex-wrap pl-[20px]">
        <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
        <CheckboxGroup label = "Hourly rate"
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
        <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-[20px]">
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
        <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-[20px]">
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

      <div className="checkbox_section flex items-center justify-between mt-[40px] flex-wrap pl-[20px]">
        <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
        <CheckboxGroup label = "Rate"
      defaultValue={["buenos-aires", "london"]}
    >
      <Checkbox value="buenos-aires" radius="none">     
      <div className="review_rating_section flex items-center justify-between gap-[10px]">
          <div className="review_rating_section_inner flex items-center gap-[5px]">
     <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      </div>
      <div className="rating_number"> (3)</div>
      </div>
      </Checkbox>
      <Checkbox value="sydney" radius="none">
      <div className="review_rating_section flex items-center justify-between gap-[10px]">
          <div className="review_rating_section_inner flex items-center gap-[5px]">
     <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      </div>
      <div className="rating_number"> (3)</div>
      </div>
      </Checkbox>
      <Checkbox value="san-francisco" radius="none">
      <div className="review_rating_section flex items-center justify-between gap-[10px]">
          <div className="review_rating_section_inner flex items-center gap-[5px]">
     <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>

      </div>
      <div className="rating_number"> (3)</div>
      </div>
      </Checkbox>
      <Checkbox value="london" radius="none">
      <div className="review_rating_section flex items-center justify-between gap-[10px]">
          <div className="review_rating_section_inner flex items-center gap-[5px]">
     <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>
      </div>
      <div className="rating_number"> (3)</div>
      </div>
      </Checkbox>
      <Checkbox value="tokyo" radius="none">   <div className="review_rating_section flex items-center justify-between gap-[10px]">
          <div className="review_rating_section_inner flex items-center gap-[5px]">
     <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_yellow.svg"
    />
      </span>


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
        <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-[20px]">
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
        <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-[20px]">
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
    </>
  );
};

export default Filter;
