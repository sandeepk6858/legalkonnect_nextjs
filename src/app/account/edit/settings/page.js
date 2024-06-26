"use client";
import { useState , useEffect , useRef  } from "react";
import { Tabs, Tab, Card, CardBody, Switch, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

const Settings = () => {
  const [isCardSelected, setIsCardSelected] = useState(true);
  const [isBankSelected, setIsBankSelected] = useState(false);
  const [isViewportLessThan1024, setIsViewportLessThan1024] = useState(false);
  const [disable2FaOpen, setDisable2FaOpen] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const inputRef = useRef(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputFocus = () => {
    setShowCalendar(true);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.year;
    const month = String(date.month).padStart(2, '0');
    const day = String(date.day).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };




  useEffect(() => {
    const handleResize = () => {
      setIsViewportLessThan1024(window.innerWidth < 1024);
    };
 
    window.addEventListener('resize', handleResize); 

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);  
    };
  }, []); 


  const [image, setImage] = useState(
    "https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCardCheckbox = () => {
    setIsCardSelected(true);
    setIsBankSelected(false);
  };

  const handleBankCheckbox = () => {
    setIsBankSelected(true);
    setIsCardSelected(false);
  };

  const timeZoneOptions = [
    { value: "UTC-12:00", label: "UTC-12:00" },
    { value: "UTC-11:00", label: "UTC-11:00" },
    { value: "UTC-10:00", label: "UTC-10:00" },
    { value: "UTC-09:00", label: "UTC-09:00" },
  ];
  const Visibilitys = [
    { value: "Public", label: "Public" },
    { value: "Private", label: "Private" },
  ];
  const EnginePrivacys = [
    { value: "Show My Full Name", label: "Show My Full Name" },
    {
      value: "Show Only First And Last Initial",
      label: "Show Only First And Last Initial",
    },
    {
      value: "Show Only My First Name And Last Initial",
      label: "Show Only My First Name And Last Initial",
    },
  ];
  const FeeTypes = [
    { value: "Flat", label: "Flat" },
    { value: "Hourly", label: "Hourly" },
    { value: "Both", label: "Both" },
  ];
  const Countrys = [{ value: "United Stated", label: "United Stated" }];
  const States = [
    { value: "Alaska", label: "Alaska" },
    { value: "Alabama", label: "Alabama" },
    { value: "American Somoa", label: "American Somoa" },
    { value: "Arizone", label: "Arizone" },
    { value: "Guam", label: "Guam" },
    { value: "ldaho", label: "ldaho" },
  ];
  const Countys = [
    { value: "Anchorage Munuicipality", label: "Anchorage Munuicipality" },
    { value: "Aleutians East Borough", label: "Aleutians East Borough" },
    {
      value: "Aleutians West Census Area",
      label: "Aleutians West Census Area",
    },
    { value: "Bethel Census Area", label: "Bethel Census Area" },
  ];
  const Languages = [
    { value: "Afrikaans", label: "Afrikaans" },
    { value: "Amharic", label: "Amharic" },
    { value: "Arabic", label: "Arabic" },
    { value: "Assamese", label: "Assamese" },
    { value: "Bengali", label: "Bengali" },
    { value: "Assamese", label: "Assamese" },
  ];
  const Proficiencys = [
    {
      value: "Bacic - I Write In This Language Decently",
      label: "Bacic - I Write In This Language Decently",
    },
    {
      value: "Conversational - I Write And Speak This",
      label: "Conversational - I Write And Speak This",
    },
    {
      value: "Fluent - I Write And Speak This Language Almost Perfectly",
      label: "Fluent - I Write And Speak This Language Almost Perfectly",
    },
  ];
  const Categories = [
    { value: "Crimial", label: "Crimial" },
    { value: "Family Low", label: "Family Low" },
    { value: "Corporate", label: "Corporate" },
  ];
  const Arizonas = [
    { value: "Arizpne", label: "Arizpne" },
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Delaware", label: "Delaware" },
    { value: "Florida", label: "Florida" },
  ];


  const disable2Fa = () => {
    setDisable2FaOpen(prevState => !prevState);
  }
  return (
    <> 
      <JobSlider/>
      <div className=" w-full max-w-[1250px] m-[auto]">
        <div className="flex flex-col px-4 mt-[25px] mb-[25px]">
          <div className="flex w-full flex-col relative mt-[50px]">
            <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold absolute z-20 top-[15px] left-[20px]">
               Settings
            </h3>
            <Tabs
              classNames={{
                tabList:
                  "gap-2 w-[calc(100svw-25px)] lg:w-[280px] relative rounded-[8px] py-4 bg-white shadow-custom flex md:flex flex-col pt-12",
                tab: "px-0 h-10 rounded-[20px] bg-[#F9F9F9] w-[200px] mb-2 lg:mb-0 py-2",
              }}
              size="lg"
              aria-label="Options"
              isVertical={!isViewportLessThan1024}
            >
              <Tab
                key="Profile Settings"
                title="Profile Settings"
                className="w-full max-w-[900px]"
              >
                <Card>
                  <CardBody>
                    <div className="profile-picture-box profile-item-box sm:px-[25px] border-b pb-[30px] border-#[F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Your Profile picture
                      </h3>
                      <div
                        id="avatar"
                        className="dropzone dropzone2 input_file_container dz-clickable"
                      >
                        <div className="wrap_btn_dropzone">
                          <div className="settings_dropzone flex-col sm:flex-row flex items-center">
                            <div className="avatar_wrapper">
                              <img
                                className="avatar min-w-[60px] max-w-[60px] h-[60px] rounded-[30px]"
                                src={image} 
                              />
                            </div>
                            <div className="wrap_dropzone border border-[#EBEBEB]  rounded-[3px] flex justify-center items-center w-full">
                              <div className="dropzone_inner my-[35px] relative">
                                <label
                                  data-target-form="avatar" htmlFor="fileInputs"
                                  className="input_file_btn hover:text-white hover:bg-bluesecondary bg-[#EAF1FD] text-bluesecondary cursor-pointer rounded-[22px] text-[14px] py-[10px] px-[15px]"
                                >
                                  Attach your photo or Drag &amp; Drop
                                </label>
                                <input
                                  id="fileInputs"
                                  type="file"
                                  onChange={handleFileChange}
                                  className="bg-black absolute w-0 h-0 opacity-0"
                                  />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title font-semibold text-bluesecondary text-[16px]">
                        Contact Info
                      </h3>
                      <div className="flex flex-wrap gap-[14px] flex-col sm:flex-row justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:sm:w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Client"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3  w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Dev"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] relative" ref={inputRef}>
                          <label className="text-[#474040] text-base">
                            Birth date
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Birth date"
                            onFocus={handleInputFocus}
                            value={formatDate(selectedDate)}
                            readOnly
                          />
                          {showCalendar && (
                            <div className="absolute z-10 top-[106px] left-[44px]">
                              <Calendar
                                aria-label="Date (Min Date Value)"
                                defaultValue={today(getLocalTimeZone())}
                                minValue={today(getLocalTimeZone())}
                                onSelect={handleDateSelect}
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full  sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Time Zone"
                            placeholder="(UTC-10:00) Hawaii"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {timeZoneOptions.map((timeZone) => (
                              <AutocompleteItem
                                key={timeZone.value}
                                value={timeZone.value}
                              >
                                {timeZone.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="1234567891"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Address
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Mohali"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        My profile
                      </h3>
                      <div className="flex flex-wrap flex-col sm:flex-row gap-[14px] justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full  sm:w-[calc(50%_-_10px)]">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Visibility"
                            placeholder="Public"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Visibilitys.map((Visibility) => (
                              <AutocompleteItem
                                key={Visibility.value}
                                value={Visibility.value}
                              >
                                {Visibility.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Search engine privacy"
                            placeholder="Show Only First And Last Initial"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {EnginePrivacys.map((EnginePrivacy) => (
                              <AutocompleteItem
                                key={EnginePrivacy.value}
                                value={EnginePrivacy.value}
                              >
                                {EnginePrivacy.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Experience
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="10"
                            />
                            <span className="input-details absolute text-[16px] right-[15px] top-[14px] text-[#ebebeb]">
                              years
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Fee Type"
                            placeholder="Both"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {FeeTypes.map((FeeType) => (
                              <AutocompleteItem
                                key={FeeType.value}
                                value={FeeType.value}
                              >
                                {FeeType.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Rate
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="25"
                            />
                            <span className="input-details absolute text-[16px] right-[15px] top-[14px] text-[#ebebeb]">
                              $
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Talent Type
                          </label>
                          <div>
                            <select className="w-full border cursor-pointer border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base">
                              <option value="Atorney">Atorney</option>
                              <option value="Low Firm">Low Firm</option>
                              <option value="Expet">Expet</option>
                              <option value="Paralegal/legal Support">
                                Paralegal/legal Support
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            # of cases handled
                          </label>
                          <div>
                            <select className="w-full border cursor-pointer border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base">
                              <option value="0-10">0-10</option>
                              <option value="10-50">10-50</option>
                              <option value="50-250">50-250</option>
                              <option value="500+">500+</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Country"
                            placeholder="Choose Country"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Countrys.map((Country) => (
                              <AutocompleteItem
                                key={Country.value}
                                value={Country.value}
                              >
                                {Country.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="State"
                            placeholder="Alaska"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {States.map((State) => (
                              <AutocompleteItem
                                key={State.value}
                                value={State.value}
                              >
                                {State.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="County"
                            placeholder="Anchorage Municipality"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Countys.map((County) => (
                              <AutocompleteItem
                                key={County.value}
                                value={County.value}
                              >
                                {County.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Service description
                          </label>
                          <div>
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="test rtset"
                            />
                          </div>
                        </div>
                        <div className="form-group w-full">
                          <div className="input-label text-[#474040] text-base">
                            About me
                          </div>
                          <div className="control-group">
                            <textarea
                              className="form-control min-h-[182px] w-full rounded-[3px] text-[16px] py-[14px] px-[15px] border border-[#9b9898]"
                              name="about"
                            >
                            </textarea>
                          </div>
                        </div>
                        <div className="w-full">
                          <h3 className="input-label text-[16px] text-black">
                            Your Resume
                          </h3>
                          <div className="mt-3 border-dashed border border-[#EBEBEB] rounded-[3px] flex justify-center items-center">
                            <div className="wrap_dropzone border border-[#EBEBEB]  rounded-[3px] flex justify-center items-center w-full">
                              <div className="dropzone_inner my-[35px]">
                                <label
                                  data-target-form="avatar"
                                  className="input_file_btn hover:text-white hover:bg-bluesecondary bg-[#EAF1FD] text-bluesecondary cursor-pointer rounded-[22px] text-[14px] py-[10px] px-[15px]"
                                >
                                  Attach your photo or Drag &amp; Drop
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 items-center pt-4">
                            <input
                              className="w-[22px] h-[22px]"
                              type="checkbox"
                            />
                            <p className="text-bluesecondary text-[16px]">
                              available as substitute attorney
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Education
                      </h3>
                      <div className="flex flex-wrap gap-[14px] justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Start Year
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Start Year"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            End Year
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="End Year"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <label className="text-[#474040] text-base">
                            University
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="University"
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <label className="text-[#474040] text-base">
                            Degree
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="Degree"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-[14px] justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Language"
                            placeholder="Select Language"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Languages.map((Language) => (
                              <AutocompleteItem
                                key={Language.value}
                                value={Language.value}
                              >
                                {Language.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Proficiency"
                            placeholder="Select Proficiency"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Proficiencys.map((Proficiency) => (
                              <AutocompleteItem
                                key={Proficiency.value}
                                value={Proficiency.value}
                              >
                                {Proficiency.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Location of cases I want the receive
                      </h3>
                      <div className="flex flex-wrap gap-[14px] justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)] ">
                          <Autocomplete
                            labelPlacement="outside"
                            label="State"
                            placeholder="Alabama"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {States.map((State) => (
                              <AutocompleteItem
                                key={State.value}
                                value={State.value}
                              >
                                {State.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            County
                          </label>
                          <div>
                            <select className="w-full border border-[#9b9898] cursor-pointer py-2.5 md:py-3.5 px-3.5 text-grey text-base">
                              <option value=""></option>
                              <option value="Aleutians West Census Area">
                                Aleutians West Census Area
                              </option>
                              <option value="Anchorage Municipality">
                                Anchorage Municipality
                              </option>
                              <option value="Bethel Census Area">
                                Bethel Census Area
                              </option>
                              <option value="Bristol Bay Borough">
                                Bristol Bay Borough
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Specialization
                      </h3>
                      <div className="flex flex-wrap gap-[14px] justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <Autocomplete
                            labelPlacement="outside"
                            label="Categories"
                            placeholder="Criminal"
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            {Categories.map((Categorie) => (
                              <AutocompleteItem
                                key={Categorie.value}
                                value={Categorie.value}
                              >
                                {Categorie.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <label className="text-[#474040] text-base">
                            Attorney license credentials
                          </label>
                          <div>
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="5615430291"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col pt-3 w-full">
                          <h3 className="input-label text-[16px] text-black">
                            Attorney license documents
                          </h3>
                          <div className="mt-3 border-dashed border border-[#EBEBEB] rounded-[3px] flex justify-center items-center">
                            <div className="wrap_dropzone border border-[#EBEBEB]  rounded-[3px] flex justify-center items-center w-full">
                              <div className="dropzone_inner my-[35px]">
                                <label
                                  data-target-form="avatar"
                                  className="input_file_btn hover:text-white hover:bg-bluesecondary bg-[#EAF1FD] text-bluesecondary cursor-pointer rounded-[22px] text-[14px] py-[10px] px-[15px]"
                                >
                                  Attach your photo or Drag &amp; Drop
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px] border-b border-[#F7F7F7]">
                      <div className="flex flex-col w-full">
                        <h3 className="input-label text-[16px] text-bluesecondary">
                          Your Gallery
                        </h3>
                        <div className="mt-3 border-dashed border border-[#EBEBEB] rounded-[3px] flex justify-center items-center">
                          <div className="wrap_dropzone border border-[#EBEBEB]  rounded-[3px] flex justify-center items-center w-full">
                            <div className="dropzone_inner my-[35px]">
                              <label
                                data-target-form="avatar"
                                className="input_file_btn hover:text-white hover:bg-bluesecondary bg-[#EAF1FD] text-bluesecondary cursor-pointer rounded-[22px] text-[14px] py-[10px] px-[15px]"
                              >
                                Attach your photo or Drag &amp; Drop
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info-box profile-item-box sm:px-[25px] py-[25px]">
                      <div className="flex flex-col w-full">
                        <h3 className="input-label text-[16px] text-[#474040]">
                          Your Graphics Image
                        </h3>
                        <div className="mt-3 border-dashed border border-[#EBEBEB] rounded-[3px] flex justify-center items-center">
                          <div className="wrap_dropzone border border-[#EBEBEB]  rounded-[3px] flex justify-center items-center w-full">
                            <div className="dropzone_inner my-[35px]">
                              <label
                                data-target-form="avatar"
                                className="input_file_btn hover:text-white hover:bg-bluesecondary bg-[#EAF1FD] text-bluesecondary cursor-pointer rounded-[22px] text-[14px] py-[10px] px-[15px]"
                              >
                                Attach your photo or Drag &amp; Drop
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="muGoogle Authenticatorsic"
                title="Google Authenticator"
              >
                <Card>
                  <CardBody>
                    <div className="flex justify-center items-center flex-col py-3">
                      <div>
                        <Button
                          radius="full"
                          className="bg-orangeprimary text-white text-[14px]"
                          onClick={disable2Fa}
                        >
                           {disable2FaOpen ? 'Disable 2fa' : 'Enable 2fa'}
                        </Button>
                      </div>
                      { disable2FaOpen && <div className="card card-default flex justify-center gap-2 items-center pt-3 flex-col">
                        <h4 className="card-heading text-[16px] font-semibold text-black">
                          Set up Google Authenticator
                        </h4>
                        <p className="text-[16px]">
                          Set up your two-factor authentication by scanning the
                          barcode below. Alternatively, you can use the code
                        </p>
                        <p className="text-[16px] font-semibold text-black">
                          PWR6227SDB43KKRR
                        </p>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="200"
                              height="200"
                              fill="#fefefe"
                            ></rect>
                            <g transform="scale(4.082)">
                              <g transform="translate(4,4)">
                                <path
                                  fillRule="evenodd"
                                  d="M12 0L12 2L11 2L11 5L10 5L10 7L9 7L9 5L8 5L8 7L9 7L9 8L6 8L6 9L7 9L7 10L6 10L6 11L7 11L7 10L8 10L8 9L9 9L9 8L10 8L10 7L11 7L11 6L12 6L12 7L13 7L13 6L12 6L12 4L13 4L13 3L14 3L14 4L15 4L15 5L14 5L14 8L13 8L13 9L14 9L14 8L15 8L15 11L14 11L14 12L15 12L15 13L14 13L14 14L11 14L11 16L10 16L10 15L7 15L7 14L6 14L6 13L7 13L7 12L4 12L4 13L3 13L3 12L1 12L1 11L0 11L0 13L3 13L3 14L0 14L0 15L1 15L1 16L0 16L0 17L2 17L2 15L3 15L3 16L5 16L5 18L4 18L4 17L3 17L3 18L2 18L2 19L3 19L3 20L2 20L2 21L1 21L1 22L0 22L0 23L1 23L1 24L0 24L0 25L1 25L1 26L0 26L0 27L1 27L1 29L0 29L0 33L1 33L1 29L2 29L2 30L3 30L3 29L4 29L4 28L5 28L5 29L8 29L8 30L4 30L4 31L5 31L5 32L3 32L3 31L2 31L2 32L3 32L3 33L7 33L7 32L8 32L8 35L9 35L9 34L10 34L10 33L9 33L9 30L10 30L10 29L11 29L11 24L9 24L9 23L8 23L8 24L4 24L4 23L7 23L7 22L8 22L8 21L7 21L7 20L8 20L8 18L6 18L6 17L7 17L7 16L9 16L9 17L11 17L11 18L12 18L12 19L13 19L13 20L14 20L14 21L15 21L15 23L14 23L14 22L13 22L13 21L12 21L12 22L13 22L13 23L12 23L12 25L14 25L14 24L15 24L15 27L14 27L14 28L15 28L15 29L14 29L14 30L11 30L11 34L13 34L13 36L14 36L14 37L15 37L15 39L14 39L14 38L13 38L13 37L12 37L12 38L13 38L13 39L12 39L12 40L13 40L13 41L16 41L16 36L17 36L17 35L19 35L19 36L18 36L18 38L17 38L17 39L18 39L18 38L22 38L22 39L23 39L23 40L24 40L24 41L25 41L25 40L27 40L27 41L28 41L28 40L29 40L29 41L34 41L34 40L30 40L30 39L32 39L32 38L33 38L33 37L34 37L34 39L35 39L35 41L38 41L38 40L39 40L39 39L40 39L40 40L41 40L41 39L40 39L40 38L38 38L38 35L39 35L39 34L40 34L40 33L41 33L41 31L39 31L39 30L40 30L40 28L41 28L41 27L40 27L40 26L41 26L41 25L40 25L40 26L38 26L38 25L39 25L39 24L38 24L38 25L37 25L37 23L38 23L38 21L36 21L36 20L37 20L37 19L39 19L39 20L40 20L40 19L41 19L41 17L40 17L40 18L38 18L38 17L39 17L39 16L41 16L41 13L40 13L40 15L39 15L39 16L38 16L38 17L37 17L37 19L36 19L36 18L35 18L35 16L37 16L37 15L38 15L38 13L37 13L37 12L38 12L38 11L39 11L39 12L40 12L40 11L41 11L41 9L40 9L40 8L39 8L39 9L40 9L40 10L38 10L38 8L37 8L37 11L36 11L36 12L35 12L35 11L32 11L32 10L33 10L33 9L34 9L34 10L36 10L36 8L35 8L35 9L34 9L34 8L33 8L33 6L32 6L32 7L31 7L31 6L30 6L30 5L31 5L31 3L32 3L32 5L33 5L33 2L31 2L31 3L29 3L29 2L30 2L30 1L29 1L29 0L26 0L26 1L25 1L25 2L23 2L23 1L22 1L22 0L20 0L20 1L19 1L19 2L18 2L18 1L17 1L17 0L16 0L16 1L15 1L15 0ZM8 1L8 2L9 2L9 1ZM20 1L20 2L21 2L21 3L22 3L22 4L24 4L24 5L21 5L21 4L20 4L20 3L18 3L18 4L16 4L16 5L20 5L20 6L19 6L19 7L18 7L18 6L17 6L17 7L16 7L16 6L15 6L15 7L16 7L16 10L18 10L18 11L17 11L17 12L16 12L16 13L17 13L17 14L14 14L14 15L12 15L12 16L14 16L14 15L15 15L15 17L14 17L14 18L15 18L15 19L14 19L14 20L17 20L17 21L16 21L16 22L18 22L18 23L16 23L16 25L17 25L17 26L19 26L19 25L21 25L21 24L23 24L23 26L20 26L20 28L19 28L19 27L17 27L17 28L16 28L16 27L15 27L15 28L16 28L16 29L17 29L17 30L14 30L14 31L12 31L12 33L13 33L13 32L14 32L14 34L15 34L15 33L16 33L16 31L17 31L17 32L18 32L18 31L20 31L20 30L21 30L21 31L22 31L22 33L23 33L23 34L20 34L20 33L21 33L21 32L19 32L19 33L17 33L17 34L16 34L16 35L14 35L14 36L16 36L16 35L17 35L17 34L20 34L20 35L25 35L25 36L23 36L23 37L22 37L22 36L19 36L19 37L22 37L22 38L23 38L23 39L25 39L25 38L26 38L26 39L27 39L27 40L28 40L28 39L29 39L29 38L31 38L31 37L32 37L32 36L30 36L30 35L32 35L32 32L31 32L31 31L35 31L35 30L36 30L36 31L38 31L38 32L37 32L37 33L38 33L38 34L39 34L39 33L38 33L38 32L39 32L39 31L38 31L38 30L39 30L39 28L40 28L40 27L38 27L38 26L37 26L37 25L36 25L36 24L34 24L34 23L35 23L35 22L36 22L36 23L37 23L37 22L36 22L36 21L35 21L35 20L36 20L36 19L35 19L35 18L34 18L34 16L33 16L33 18L32 18L32 20L31 20L31 21L30 21L30 19L31 19L31 17L32 17L32 16L31 16L31 14L34 14L34 15L35 15L35 12L33 12L33 13L32 13L32 11L31 11L31 12L30 12L30 11L29 11L29 10L32 10L32 9L33 9L33 8L31 8L31 7L30 7L30 6L29 6L29 5L30 5L30 4L29 4L29 3L28 3L28 2L29 2L29 1L28 1L28 2L26 2L26 3L23 3L23 2L22 2L22 1ZM14 2L14 3L15 3L15 2ZM8 3L8 4L9 4L9 3ZM26 3L26 5L24 5L24 7L23 7L23 6L22 6L22 7L21 7L21 6L20 6L20 7L19 7L19 8L20 8L20 9L19 9L19 11L18 11L18 12L21 12L21 14L20 14L20 13L18 13L18 14L17 14L17 15L16 15L16 17L15 17L15 18L16 18L16 19L17 19L17 20L18 20L18 19L19 19L19 20L20 20L20 22L22 22L22 23L23 23L23 24L24 24L24 26L23 26L23 27L22 27L22 28L21 28L21 30L22 30L22 31L23 31L23 32L25 32L25 33L30 33L30 34L26 34L26 35L28 35L28 36L27 36L27 37L26 37L26 38L27 38L27 37L28 37L28 38L29 38L29 37L30 37L30 36L29 36L29 35L30 35L30 34L31 34L31 32L29 32L29 31L30 31L30 30L31 30L31 29L30 29L30 30L27 30L27 31L26 31L26 30L24 30L24 29L25 29L25 28L26 28L26 27L28 27L28 28L27 28L27 29L28 29L28 28L32 28L32 29L33 29L33 27L34 27L34 29L36 29L36 30L37 30L37 29L38 29L38 28L37 28L37 27L34 27L34 25L33 25L33 26L32 26L32 27L30 27L30 26L29 26L29 27L28 27L28 25L29 25L29 23L30 23L30 24L33 24L33 22L35 22L35 21L34 21L34 20L35 20L35 19L34 19L34 20L32 20L32 21L31 21L31 22L32 22L32 23L30 23L30 22L29 22L29 23L28 23L28 24L27 24L27 25L26 25L26 23L27 23L27 22L28 22L28 21L29 21L29 19L30 19L30 18L29 18L29 17L28 17L28 16L30 16L30 17L31 17L31 16L30 16L30 14L31 14L31 13L30 13L30 12L29 12L29 11L28 11L28 10L29 10L29 9L30 9L30 8L29 8L29 6L28 6L28 8L26 8L26 10L24 10L24 11L23 11L23 10L22 10L22 8L24 8L24 7L25 7L25 6L26 6L26 7L27 7L27 5L28 5L28 3ZM17 7L17 9L18 9L18 7ZM0 8L0 10L5 10L5 8ZM28 8L28 9L29 9L29 8ZM10 9L10 10L9 10L9 11L8 11L8 12L9 12L9 11L10 11L10 10L11 10L11 11L12 11L12 9ZM20 10L20 11L22 11L22 10ZM26 10L26 11L27 11L27 12L28 12L28 13L29 13L29 14L30 14L30 13L29 13L29 12L28 12L28 11L27 11L27 10ZM10 12L10 13L8 13L8 14L10 14L10 13L11 13L11 12ZM12 12L12 13L13 13L13 12ZM23 12L23 13L22 13L22 14L21 14L21 15L22 15L22 16L21 16L21 17L20 17L20 16L19 16L19 15L20 15L20 14L18 14L18 15L17 15L17 16L19 16L19 17L17 17L17 18L19 18L19 19L22 19L22 18L21 18L21 17L22 17L22 16L23 16L23 17L25 17L25 18L23 18L23 19L25 19L25 20L26 20L26 21L24 21L24 20L21 20L21 21L23 21L23 23L24 23L24 24L25 24L25 23L24 23L24 22L26 22L26 21L27 21L27 20L28 20L28 19L29 19L29 18L28 18L28 17L27 17L27 16L28 16L28 15L27 15L27 16L26 16L26 15L24 15L24 16L23 16L23 15L22 15L22 14L24 14L24 13L25 13L25 14L26 14L26 12ZM3 14L3 15L4 15L4 14ZM5 14L5 15L6 15L6 16L7 16L7 15L6 15L6 14ZM36 14L36 15L37 15L37 14ZM19 17L19 18L20 18L20 17ZM9 18L9 19L10 19L10 21L11 21L11 19L10 19L10 18ZM26 18L26 20L27 20L27 18ZM0 19L0 20L1 20L1 19ZM5 19L5 20L4 20L4 21L3 21L3 22L7 22L7 21L5 21L5 20L7 20L7 19ZM40 21L40 22L41 22L41 21ZM10 22L10 23L11 23L11 22ZM2 23L2 24L1 24L1 25L2 25L2 27L5 27L5 28L8 28L8 29L9 29L9 28L10 28L10 26L7 26L7 25L6 25L6 26L7 26L7 27L5 27L5 26L3 26L3 25L4 25L4 24L3 24L3 23ZM13 23L13 24L14 24L14 23ZM18 23L18 24L21 24L21 23ZM40 23L40 24L41 24L41 23ZM2 24L2 25L3 25L3 24ZM25 25L25 26L24 26L24 27L26 27L26 25ZM12 26L12 27L13 27L13 26ZM8 27L8 28L9 28L9 27ZM12 28L12 29L13 29L13 28ZM17 28L17 29L19 29L19 28ZM23 28L23 29L24 29L24 28ZM36 28L36 29L37 29L37 28ZM17 30L17 31L18 31L18 30ZM23 30L23 31L24 31L24 30ZM6 31L6 32L7 32L7 31ZM14 31L14 32L15 32L15 31ZM25 31L25 32L26 32L26 31ZM27 31L27 32L28 32L28 31ZM33 33L33 36L36 36L36 33ZM34 34L34 35L35 35L35 34ZM10 35L10 36L8 36L8 41L9 41L9 40L11 40L11 37L10 37L10 36L11 36L11 35ZM40 35L40 36L39 36L39 37L40 37L40 36L41 36L41 35ZM9 37L9 39L10 39L10 37ZM24 37L24 38L25 38L25 37ZM35 37L35 38L36 38L36 37ZM37 38L37 39L36 39L36 40L38 40L38 38ZM13 39L13 40L14 40L14 39ZM19 39L19 40L17 40L17 41L19 41L19 40L20 40L20 41L22 41L22 40L20 40L20 39ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM34 0L34 7L41 7L41 0ZM35 1L35 6L40 6L40 1ZM36 2L36 5L39 5L39 2ZM0 34L0 41L7 41L7 34ZM1 35L1 40L6 40L6 35ZM2 36L2 39L5 39L5 36Z"
                                  fill="#000000"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <p>
                          You must set up your Google Authenticator app before
                          continuing. You will be unable to login otherwise
                        </p>
                        <div>
                        <Button
                          radius="full"
                          className="bg-orangeprimary text-white text-[14px]"
                        >
                           Complete Registration
                        </Button>
                        </div>
                      </div>}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="Billing Methods"
                title="Billing Methods"
              >
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Your Profile picture
                      </h3>
                      <div className="flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-[20px] h-[20px]"
                            type="checkbox"
                            checked={isCardSelected}
                            onChange={handleCardCheckbox}
                          />
                          <p className="text-[#474040] text-[16px]">
                            Credit or Debit Card
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <input
                            className="w-[20px] h-[20px]"
                            type="checkbox"
                            checked={isBankSelected}
                            onChange={handleBankCheckbox}
                          />
                          <p className="text-[#474040] text-[16px]">
                            Bank Account
                          </p>
                        </div>
                      </div>
                      <div className="p-[10px] sm:p-[20px] border border-[#EBEBEB] rounded-[3px] mt-4">
                        <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                          Billing Address
                        </h3>
                        <div className="flex flex-col gap-3 flex-wrap">
                          <div className="flex flex-col gap-2 pt-3 w-full">
                            <label className="text-[#474040] text-base">
                              Street Address
                            </label>
                            <div>
                              <input
                                type="text"
                                className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap justify-between">
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                              <label className="text-[#474040] text-base">
                                City
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                              <label className="text-[#474040] text-base">
                                State
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                              <label className="text-[#474040] text-base">
                                Postal Code
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                              <label className="text-[#474040] text-base">
                                Country
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isCardSelected && (
                        <div className="p-[10px] sm:p-[20px] border border-[#EBEBEB] rounded-[3px] mt-4">
                          <div className="flex flex-col gap-3 flex-wrap">
                            <div className="flex flex-col gap-2 pt-3 w-full">
                              <label className="text-[#474040] text-base">
                                Card Number
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder="dTUxfZLAymIrWlOG"
                                />
                              </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                              <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <label className="text-[#474040] text-base">
                                  First Name
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="mGQoIkbz"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <label className="text-[#474040] text-base">
                                  Last Name
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="sWtQElDZ"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <label className="text-[#474040] text-base">
                                  Expires Month
                                </label>
                                <div>
                                  <input
                                    type="number"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="MM"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <label className="text-[#474040] text-base">
                                  Expires Year
                                </label>
                                <div>
                                  <input
                                    type="number"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="YY"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <label className="text-[#474040] text-base">
                                  Security Code
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="rkEAqaOZsIFg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {isBankSelected && (
                        <div className="p-[10px] sm:p-[20px] mt-4">
                          <div className="flex items-center justify-between">
                            <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                              Account Details
                            </h3>
                            <div>
                              <Button
                                radius="full"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                              >
                                Delete Account
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 pt-3 w-full">
                              <label className="text-[#474040] text-base">
                                Bank Name*
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder="Bank Name"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full">
                              <label className="text-[#474040] text-base">
                                Account holder name*
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder="Name of account holder"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full">
                              <label className="text-[#474040] text-base">
                                Account number*
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder="Account number"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full">
                              <label className="text-[#474040] text-base">
                                Routing number*
                              </label>
                              <div>
                                <input
                                  type="text"
                                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                  placeholder="Routing number"
                                />
                              </div>
                            </div>
                            <div className="mt-2">
                              <Button
                                radius="full"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                              >
                                Verify Bank Account
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="Attorney Credentials"
                title="Attorney Credentials"
              >
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                        Attorney Credentials
                      </h3>
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <div className="icon absolute z-20 top-[74px] sm:top-[94px] left-[24px] sm:left-[42px]">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.2695 20.032L16.2078 14.9703C17.4625 13.4406 18.2188 11.4812 18.2188 9.3457C18.2188 4.44727 14.2441 0.472656 9.3457 0.472656C4.44297 0.472656 0.472656 4.44727 0.472656 9.3457C0.472656 14.2441 4.44297 18.2188 9.3457 18.2188C11.4812 18.2188 13.4363 17.4668 14.966 16.2121L20.0277 21.2695C20.3715 21.6133 20.9258 21.6133 21.2695 21.2695C21.6133 20.9301 21.6133 20.3715 21.2695 20.032ZM9.3457 16.4527C5.42266 16.4527 2.23438 13.2645 2.23438 9.3457C2.23438 5.42695 5.42266 2.23438 9.3457 2.23438C13.2645 2.23438 16.457 5.42695 16.457 9.3457C16.457 13.2645 13.2645 16.4527 9.3457 16.4527Z"
                                fill="#909090"
                              ></path>
                            </svg>
                          </div>
                          <Autocomplete
                            labelPlacement="outside"
                            placeholder="Arizona"
                            className="w-full relative"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none pl-8",
                              },
                            }}
                          >
                            {Arizonas.map((Arizona) => (
                              <AutocompleteItem
                                key={Arizona.value}
                                value={Arizona.value}
                              >
                                {Arizona.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <Autocomplete
                            labelPlacement="outside"
                            placeholder=""
                            className="w-full"
                            inputProps={{
                              classNames: {
                                input: "ml-1",
                                inputWrapper:
                                  "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                              },
                            }}
                          >
                            <AutocompleteItem
                              key=""
                              value=""
                            ></AutocompleteItem>
                          </Autocomplete>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Button
                          radius="full"
                          className="bg-orangeprimary text-white text-[14px]"
                        >
                           Add license number
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="Social Media"
                title="Social Media"
              >
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <div>
                        <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                          Social Media
                        </h3>
                      </div>
                      <div className="flex justify-between gap-3 sm:items-end border-b border-[#F7F7F7] pb-[50px] flex-col sm:flex-row">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_76px)]">
                          <label className="text-[#474040] text-base">
                            Social Media
                          </label>
                          <div>
                            <select className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey">
                              <option>Choose social media</option>
                              <option value="Instagram">Instagram</option>
                              <option value="facebook">Facebook</option>
                              <option value="twitter">Twitter</option>
                              <option value="linkedin">LinkedIn</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_76px)]">
                          <label className="text-[#474040] text-base">
                            Url
                          </label>
                          <div>
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="Write your url"
                            />
                          </div>
                        </div>
                        <div className="pb-[6px]">
                        <Button
                          radius="full"
                          className="bg-orangeprimary text-white text-[14px]"
                        >
                           Add
                        </Button>
                        </div>
                      </div>
                      <div className="pt-[30px]">
                        <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                          Refer a friend
                        </h3>
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <label className="text-[#474040] text-base">
                            Your personal referal link
                          </label>
                          <div>
                            <input
                              type="text"
                              className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                              placeholder="https://legalkonnect.com/refer/1aedb8d9dc4751e229a335e371db8058"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="share-wrap pt-3">
                        <span>Share your link</span>
                        <div className="share-items flex items-center gap-2 pt-3">
                          <a
                            href="#"
                            className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                          >
                            <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.70908 0.672852H12.288C13.2324 0.672852 14 1.44049 14 2.38483V9.61513C14 10.5595 13.2324 11.3271 12.288 11.3271H1.71198C0.767638 11.3271 0 10.5595 0 9.61513V2.38773C-0.00289726 1.44339 0.764742 0.672852 1.70908 0.672852ZM0.779225 9.61513C0.779225 10.1279 1.19636 10.545 1.70908 10.545H12.288C12.8007 10.545 13.2179 10.1279 13.2179 9.61513V2.38773C13.2179 1.875 12.8007 1.45787 12.288 1.45787H1.71198C1.19925 1.45787 0.782123 1.875 0.782123 2.38773V9.61513H0.779225Z"
                                fill="#fff"
                              ></path>
                              <path
                                d="M5.17047 5.91035L1.74651 2.8398C1.58719 2.69496 1.57271 2.44874 1.71755 2.28652C1.86238 2.1272 2.10861 2.11271 2.27083 2.25755L6.99253 6.4955L7.9137 5.67282C7.91659 5.66992 7.91949 5.66703 7.91949 5.66413C7.93977 5.64385 7.96005 5.62647 7.98322 5.60909L11.7316 2.25465C11.8938 2.10982 12.1401 2.1243 12.2849 2.28652C12.4297 2.44874 12.4153 2.69496 12.253 2.8398L8.78852 5.93643L12.2385 9.1663C12.395 9.31404 12.4037 9.56026 12.2559 9.71958C12.1777 9.80069 12.0734 9.84414 11.9692 9.84414C11.8736 9.84414 11.778 9.80938 11.7026 9.73986L8.20048 6.46363L7.25034 7.31238C7.17503 7.37901 7.08233 7.41087 6.98963 7.41087C6.89694 7.41087 6.80134 7.37611 6.72893 7.30949L5.75272 6.43467L2.27083 9.74276C2.19551 9.81518 2.09702 9.84994 2.00143 9.84994C1.89714 9.84994 1.79576 9.80938 1.71755 9.72827C1.56981 9.57185 1.5756 9.32273 1.73203 9.17499L5.17047 5.91035Z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                          >
                            <svg
                              width="6"
                              height="14"
                              viewBox="0 0 6 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.53166 14V7.43079H0V5.06556H1.53166V3.04535C1.53166 1.45785 2.43642 0 4.52117 0C5.36526 0 5.98942 0.09177 5.98942 0.09177L5.94024 2.30049C5.94024 2.30049 5.3037 2.29347 4.60907 2.29347C3.85727 2.29347 3.73683 2.68638 3.73683 3.33851V5.06556H6L5.90153 7.43079H3.73683V14H1.53166Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.17714 13.9995V4.55374H0.176084V13.9995H3.17714ZM1.677 3.2633C2.72352 3.2633 3.37493 2.53798 3.37493 1.63156C3.35543 0.704706 2.72356 -0.000488281 1.69686 -0.000488281C0.670319 -0.000488281 -0.000976562 0.70472 -0.000976562 1.63156C-0.000976562 2.53802 0.650272 3.2633 1.65741 3.2633H1.67691H1.677ZM4.83821 13.9995H7.83927V8.72454C7.83927 8.44223 7.85877 8.16021 7.93802 7.9584C8.15497 7.39435 8.64876 6.81016 9.47778 6.81016C10.5637 6.81016 10.9982 7.67637 10.9982 8.94617V13.9995H13.9991V8.58333C13.9991 5.68196 12.5185 4.33198 10.544 4.33198C8.92503 4.33198 8.2142 5.27869 7.8193 5.92349H7.83934V4.55354H4.83828C4.87767 5.43988 4.83828 13.9993 4.83828 13.9993L4.83821 13.9995Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 1.26131C8.86905 1.26131 9.09043 1.26842 9.82855 1.30205C10.511 1.33323 10.8817 1.44725 11.1284 1.54312C11.4551 1.6701 11.6883 1.8218 11.9332 2.06675C12.1782 2.3117 12.3299 2.54488 12.4569 2.87159C12.5528 3.11828 12.6668 3.48895 12.6979 4.1714C12.7316 4.90957 12.7387 5.13095 12.7387 7C12.7387 8.86911 12.7316 9.09048 12.6979 9.8286C12.6668 10.5111 12.5528 10.8817 12.4569 11.1284C12.3299 11.4551 12.1782 11.6884 11.9332 11.9333C11.6883 12.1782 11.4551 12.33 11.1284 12.4569C10.8817 12.5528 10.511 12.6668 9.82855 12.6979C9.09054 12.7316 8.86916 12.7387 7 12.7387C5.13078 12.7387 4.90941 12.7316 4.1714 12.6979C3.4889 12.6668 3.11828 12.5528 2.87159 12.4569C2.54488 12.33 2.31164 12.1782 2.0667 11.9333C1.82175 11.6883 1.67005 11.4551 1.54312 11.1284C1.44725 10.8818 1.33317 10.5111 1.30205 9.8286C1.26837 9.09048 1.26126 8.86911 1.26126 7C1.26126 5.13095 1.26837 4.90957 1.30205 4.17145C1.33323 3.48895 1.44725 3.11828 1.54312 2.87159C1.67005 2.54488 1.82175 2.3117 2.0667 2.06675C2.3117 1.82175 2.54488 1.6701 2.87159 1.54312C3.11823 1.44725 3.4889 1.33323 4.1714 1.30205C4.90952 1.26842 5.13089 1.26131 7 1.26131V1.26131ZM7 0C5.0989 0 4.86052 0.00803906 4.11392 0.0421094C3.3688 0.076125 2.85994 0.194469 2.41473 0.3675C1.95437 0.546383 1.56401 0.78575 1.17485 1.17491C0.785695 1.56406 0.546383 1.95442 0.3675 2.41473C0.194414 2.85999 0.076125 3.36886 0.0421094 4.11392C0.00803906 4.86052 0 5.0989 0 7C0 8.9011 0.00803906 9.13948 0.0421094 9.88608C0.076125 10.6312 0.194414 11.1401 0.3675 11.5853C0.546328 12.0456 0.785695 12.436 1.17485 12.8251C1.56401 13.2143 1.95437 13.4536 2.41473 13.6325C2.85999 13.8056 3.3688 13.9239 4.11387 13.9579C4.86052 13.992 5.0989 14 7 14C8.9011 14 9.13948 13.992 9.88608 13.9579C10.6311 13.9239 11.14 13.8056 11.5852 13.6325C12.0456 13.4537 12.4359 13.2143 12.8251 12.8251C13.2143 12.436 13.4536 12.0456 13.6325 11.5853C13.8055 11.14 13.9239 10.6312 13.9579 9.88613C13.992 9.13948 14 8.9011 14 7C14 5.0989 13.992 4.86052 13.9579 4.11392C13.9239 3.36886 13.8055 2.85999 13.6325 2.41478C13.4536 1.95442 13.2143 1.56406 12.8251 1.17491C12.4359 0.78575 12.0456 0.546328 11.5853 0.3675C11.14 0.194469 10.6311 0.076125 9.88608 0.0421094C9.13948 0.00803906 8.9011 0 7 0ZM7 3.40539C5.01473 3.40539 3.40539 5.01484 3.40539 7C3.40539 8.98527 5.01473 10.5946 7 10.5946C8.98521 10.5946 10.5946 8.98527 10.5946 7C10.5946 5.01479 8.98521 3.40539 7 3.40539V3.40539ZM7 9.33335C5.71134 9.33335 4.66665 8.28866 4.66665 7C4.66665 5.71134 5.71134 4.66665 7 4.66665C8.28866 4.66665 9.33335 5.71134 9.33335 7C9.33335 8.28866 8.28866 9.33335 7 9.33335ZM11.5766 3.26337C11.5766 3.72734 11.2005 4.10337 10.7366 4.10337C10.2727 4.10337 9.89658 3.72734 9.89658 3.26337C9.89658 2.79945 10.2727 2.42337 10.7366 2.42337C11.2005 2.42337 11.5766 2.79945 11.5766 3.26337V3.26337Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                          >
                            <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5609 3.14844C12.5698 3.2728 12.5698 3.39719 12.5698 3.52154C12.5698 7.31467 9.68275 11.6852 4.40609 11.6852C2.78045 11.6852 1.27031 11.2144 0 10.3972C0.230973 10.4238 0.453031 10.4327 0.692891 10.4327C2.03424 10.4327 3.26903 9.97967 4.25507 9.20683C2.99365 9.18017 1.93654 8.35403 1.57232 7.21697C1.75 7.2436 1.92765 7.26138 2.11422 7.26138C2.37182 7.26138 2.62946 7.22583 2.86929 7.16368C1.55457 6.89716 0.568504 5.74235 0.568504 4.34768V4.31216C0.950469 4.52536 1.39467 4.65861 1.86545 4.67635C1.0926 4.16111 0.586277 3.28169 0.586277 2.28676C0.586277 1.75377 0.728383 1.26519 0.977129 0.838795C2.38957 2.57991 4.51268 3.71694 6.89336 3.84133C6.84895 3.62813 6.82229 3.40607 6.82229 3.18399C6.82229 1.60275 8.10149 0.314697 9.69158 0.314697C10.5177 0.314697 11.2639 0.661143 11.788 1.22079C12.4365 1.09643 13.0583 0.856568 13.6091 0.527897C13.3959 1.19415 12.9428 1.7538 12.3477 2.1091C12.9251 2.04695 13.4847 1.88702 13.9999 1.66496C13.6091 2.23346 13.1205 2.73979 12.5609 3.14844Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="Membership"
                title="Membership"
              >
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Current Plan
                      </h3>
                      <div className="flex gap-3 flex-col sm:flex-row">
                        <div>
                        <Button
                          radius="full"
                          className="bg-orangeprimary text-white text-[14px]"
                        >
                           Basic Plan
                        </Button>
                        </div>
                        <div>
                          <Button
                            radius="full"
                            className="bg-orangeprimary text-white text-[14px]"
                            >
                              Change membership
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-4 pt-6 flex-col sm:flex-row justify-center">
                        <div className="w-full max-w-[262px] bg-[#FFF] cursor-pointer rounded-[3px] shadow-customSec">
                          <div className="plan-name gap-2 items-center border-b border-[#F9F9F9] p-[20px] flex">
                            <div className="icon">
                              <img
                                src="https://legalkonnect.com/img/plan-icon-2.svg"
                                alt=""
                              />
                            </div>
                            <h3>Basic Plan</h3>
                          </div>
                          <ul className="pl-[30px] pt-[15px] pb-[15px] list-disc border-b border-[#F9F9F9]">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                          </ul>
                          <h3 className="box-title text-bluesecondary text-[16px] p-[20px] font-semibold">
                            Current Plan
                          </h3>
                        </div>
                        <div className="w-full max-w-[262px] bg-[#FFF] cursor-pointer rounded-[3px] shadow-customSec">
                          <div className="plan-name gap-2 items-center border-b border-[#F9F9F9] p-[20px] flex">
                            <div className="icon">
                              <img
                                src="https://legalkonnect.com/img/plan-icon-2.svg"
                                alt=""
                              />
                            </div>
                            <h3>Premium Plan</h3>
                          </div>
                          <ul className="pl-[30px] pt-[15px] pb-[15px] list-disc border-b border-[#F9F9F9]">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                          </ul>
                          <h3 className="box-title text-bluesecondary text-[16px] p-[20px] font-semibold">
                            $10 / month
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                className="w-full max-w-[900px]"
                key="Password & Security"
                title="Password & Security"
              >
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Password
                      </h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Current password
                          </label>
                          <input
                            type="password"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder=""
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            New password
                          </label>
                          <input
                            type="password"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder=""
                          />
                        </div>
                        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                          <label className="text-[#474040] text-base">
                            Confirm password
                          </label>
                          <input
                            type="password"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder=""
                          />
                        </div>
                        <div className="pt-4">
                          <Button
                            radius="full"
                            className="bg-orangeprimary text-white text-[14px]"
                            >
                              Change Password
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab className="w-full max-w-[900px]" key="API" title="API">
                <Card>
                  <CardBody>
                    <div className="sm:p-[20px]">
                      <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                        API
                      </h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2 pt-3 w-full">
                          <label className="text-[#474040] text-base">
                            API Token
                          </label>
                          <input
                            type="text"
                            className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                            placeholder="92yTNXs3J4T3Odmjqixll6zm93uaAiAa3PBwPr7IEQYSLY1ZgE7JF4xY8M39P55zRbiCgKyklSG75gSO"
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
