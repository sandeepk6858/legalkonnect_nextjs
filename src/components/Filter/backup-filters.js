// <div className="filter_main_inner_select mt-10 pl-5 flex items-center justify-between flex-wrap">
//   <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
//     <Select
//       label="Country"
//       placeholder="Select an animal"
//       labelPlacement="outside"
//       className="max-w-xs"
//     >
//       {animals.map((animal) => (
//         <SelectItem key={animal.key}>{animal.label}</SelectItem>
//       ))}
//     </Select>
//   </div>
//   <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
//     <Select
//       label="State"
//       placeholder="Select an animal"
//       labelPlacement="outside"
//       className="max-w-xs"
//     >
//       {animals.map((animal) => (
//         <SelectItem key={animal.key}>{animal.label}</SelectItem>
//       ))}
//     </Select>
//   </div>
//   <div className="firt_checkbox_section w-full mt-[10px] md:w-1/2 lg:w-1/4 sm:w-1/2">
//     <Select
//       label="County"
//       placeholder="Select an animal"
//       labelPlacement="outside"
//       className="max-w-xs"
//     >
//       {animals.map((animal) => (
//         <SelectItem key={animal.key}>{animal.label}</SelectItem>
//       ))}
//     </Select>
//   </div>
// </div>
// <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
//   <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
//     <CheckboxGroup
//       label="Hourly rate"
//       defaultValue={["buenos-aires", "london"]}
//     >
//       <Checkbox value="buenos-aires" radius="none">
//         Buenos Aires
//       </Checkbox>
//       <Checkbox value="sydney" radius="none">
//         Sydney
//       </Checkbox>
//       <Checkbox value="san-francisco" radius="none">
//         San Francisco
//       </Checkbox>
//       <Checkbox value="london" radius="none">
//         London
//       </Checkbox>
//       <Checkbox value="tokyo" radius="none">
//         Tokyo
//       </Checkbox>
//     </CheckboxGroup>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Last Activity"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Experience"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Talent Type"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
// </div>

// <div className="checkbox_section flex items-center justify-between mt-10 flex-wrap pl-5">
//   <div className="form_group md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
//     <CheckboxGroup
//       label="Rate"
//       defaultValue={["buenos-aires", "london"]}
//     >
//       <Checkbox value="buenos-aires" radius="none">
//         <div className="review_rating_section flex items-center justify-between gap-[10px]">
//           <div className="review_rating_section_inner flex items-center gap-[5px]">
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//           </div>
//           <div className="rating_number"> (3)</div>
//         </div>
//       </Checkbox>
//       <Checkbox value="sydney" radius="none">
//         <div className="review_rating_section flex items-center justify-between gap-[10px]">
//           <div className="review_rating_section_inner flex items-center gap-[5px]">
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//           </div>
//           <div className="rating_number"> (3)</div>
//         </div>
//       </Checkbox>
//       <Checkbox value="san-francisco" radius="none">
//         <div className="review_rating_section flex items-center justify-between gap-[10px]">
//           <div className="review_rating_section_inner flex items-center gap-[5px]">
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//           </div>
//           <div className="rating_number"> (3)</div>
//         </div>
//       </Checkbox>
//       <Checkbox value="london" radius="none">
//         <div className="review_rating_section flex items-center justify-between gap-[10px]">
//           <div className="review_rating_section_inner flex items-center gap-[5px]">
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//           </div>
//           <div className="rating_number"> (3)</div>
//         </div>
//       </Checkbox>
//       <Checkbox value="tokyo" radius="none">
//         {" "}
//         <div className="review_rating_section flex items-center justify-between gap-[10px]">
//           <div className="review_rating_section_inner flex items-center gap-[5px]">
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-yellow stroke-yellow`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//             <StarSvg
//               width={`16px`}
//               height={`16px`}
//               color={`fill-lightgrey stroke-lightgrey`}
//             />
//           </div>
//           <div className="rating_number"> (3)</div>
//         </div>
//       </Checkbox>
//     </CheckboxGroup>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Cases"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Reviews"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
//   <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
//     <div className="form_group">
//       <CheckboxGroup
//         label="Earned amounts"
//         defaultValue={["buenos-aires", "london"]}
//       >
//         <Checkbox value="buenos-aires" radius="none">
//           Buenos Aires
//         </Checkbox>
//         <Checkbox value="sydney" radius="none">
//           Sydney
//         </Checkbox>
//         <Checkbox value="san-francisco" radius="none">
//           San Francisco
//         </Checkbox>
//         <Checkbox value="london" radius="none">
//           London
//         </Checkbox>
//         <Checkbox value="tokyo" radius="none">
//           Tokyo
//         </Checkbox>
//       </CheckboxGroup>
//     </div>
//   </div>
//   {Bids && (
//     <div className="hourly_rate md:w-1/2 lg:w-1/4 sm:w-1/2 w-1/2 mt-5">
//       <div className="form_group">
//         <CheckboxGroup
//           label="Bids"
//           defaultValue={["buenos-aires", "london"]}
//         >
//           <Checkbox value="buenos-aires" radius="none">
//             No bids (11)
//           </Checkbox>
//           <Checkbox value="sydney" radius="none">
//             1 to 9 bids (0)
//           </Checkbox>
//           <Checkbox value="san-francisco" radius="none">
//             10+ bids (0)
//           </Checkbox>
//         </CheckboxGroup>
//       </div>
//     </div>
//   )}
// </div>