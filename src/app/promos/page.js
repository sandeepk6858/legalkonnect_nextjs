"use client";
import { useState } from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import Slider from "react-slick";

const promos = () => {
  const [activeTab, setActiveTab] = useState("step1");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "step1":
        return (
          <div className="px-[0px] xl:px-[100px]">
            <div className="text-gray-600 body-font">
              <div className="container px-[10px]  py-[30px] md:py-[30px] mx-auto">
                <div className=" max-w-[1200px] mx-auto bg-darkcoffie text-white promos_slick">
                  <Slider {...settings}>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px] mt-[30px]">
                  <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">
                    Find an Attorney
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>

                  <div className="bg-blueprimary mt-[20px]">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-[340px] h-[450px] py-[50px] px-[15px] mx-auto object-cover object-center"
                      src="https://legalkonnect.com/storage/uploads/HtcqEidnT7Vm103bxcFefXekQsOVzMwuDzA1oiFy.png"
                    />
                  </div>

                  <div className="px-[20px]">
                    <div className=" text-center mt-[20px] mb-[30px]">
                      <h3 className="text-[16px] leading-[21px] font-[700] mb-[5px]">
                        Expires On
                      </h3>
                      <p className="text-[18px] leading-[22px] font-[600] text-bluesecondary mb-[10px]">
                        2021-12-26 | 23:59:59
                      </p>
                    </div>

                    <ul className="list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>test is best it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "step2":
        return (
          <div className="px-[0px] xl:px-[100px]">
            <div className="text-gray-600 body-font">
              <div className="container px-[10px]  py-[30px] md:py-[30px] mx-auto">
                <div className=" max-w-[1200px] mx-auto bg-darkcoffie text-white promos_slick">
                  <Slider {...settings}>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px] mt-[30px]">
                  <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">
                    Legal Jobs
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>

                  <div className="bg-blueprimary mt-[20px]">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg  w-[500px] h-[500px] py-[50px] px-[15px] mx-auto object-cover object-center"
                      src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                    />
                  </div>

                  <div className="px-[20px]">
                    <div className=" text-center mt-[20px] mb-[30px]">
                      <h3 className="text-[16px] leading-[21px] font-[700] mb-[5px]">
                        Expires On
                      </h3>
                      <p className="text-[18px] leading-[22px] font-[600] text-bluesecondary mb-[10px]">
                        2021-12-26 | 23:59:59
                      </p>
                    </div>

                    <ul className="list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>test is best it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "step3":
        return (
          <div className="px-[0px] xl:px-[100px]">
            <div className="text-gray-600 body-font">
              <div className="container px-[10px]  py-[30px] md:py-[30px] mx-auto">
                <div className=" max-w-[1200px] mx-auto bg-darkcoffie text-white promos_slick">
                  <Slider {...settings}>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px] mt-[30px]">
                  <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">
                    Substitute Attorney
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>

                  <div className="bg-blueprimary mt-[20px]">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-[500px] h-[500px] py-[50px] px-[15px] mx-auto object-cover object-center"
                      src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                    />
                  </div>

                  <div className="px-[20px]">
                    <div className=" text-center mt-[20px] mb-[30px]">
                      <h3 className="text-[16px] leading-[21px] font-[700] mb-[5px]">
                        Expires On
                      </h3>
                      <p className="text-[18px] leading-[22px] font-[600] text-bluesecondary mb-[10px]">
                        2021-12-26 | 23:59:59
                      </p>
                    </div>

                    <ul className="list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>test is best it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "step4":
        return (
          <div className="px-[0px] xl:px-[100px]">
            <div className="text-gray-600 body-font">
              <div className="container px-[10px]  py-[30px] md:py-[30px] mx-auto">
                <div className=" max-w-[1200px] mx-auto bg-darkcoffie text-white promos_slick">
                  <Slider {...settings}>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px] mt-[30px]">
                  <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">
                    Transcript
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>

                  <div className="bg-blueprimary mt-[20px]">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg  w-[500px] h-[500px] py-[50px] px-[15px] mx-auto object-cover object-center"
                      src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                    />
                  </div>

                  <div className="px-[20px]">
                    <div className=" text-center mt-[20px] mb-[30px]">
                      <h3 className="text-[16px] leading-[21px] font-[700] mb-[5px]">
                        Expires On
                      </h3>
                      <p className="text-[18px] leading-[22px] font-[600] text-bluesecondary mb-[10px]">
                        2021-12-26 | 23:59:59
                      </p>
                    </div>

                    <ul className="list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>test is best it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "step5":
        return (
            <div className="px-[0px] xl:px-[100px]">
            <div className="text-gray-600 body-font">
              <div className="container px-[10px]  py-[30px] md:py-[30px] mx-auto">
                <div className=" max-w-[1200px] mx-auto bg-darkcoffie text-white promos_slick">
                  <Slider {...settings}>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className=" !flex gap-[20px] md:gap-[50px] pr-[0px] md:pr-[15px] flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/3">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center imgwid"
                          src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col justify-center textslide">
                        <h2 className="text-[24px] font-[700] text-white leading-[24px] mb-[10px]">
                          2% cachback
                        </h2>
                        <p className="text-[16px] leading-[24px] font-[400] text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px] mt-[30px]">
                  <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">
                  Motion
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>

                  <div className="bg-blueprimary mt-[20px]">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-[500px] h-[500px] py-[50px] px-[15px] mx-auto object-cover object-center"
                      src="https://media.istockphoto.com/photos/sunset-over-himalayas-picture-id182410005?b=1&k=20&m=182410005&s=170667a&w=0&h=bDqwTSitx0xxcX0gP05cfMqoIJnzanhZGuFES9-jRRA="
                    />
                  </div>

                  <div className="px-[20px]">
                    <div className=" text-center mt-[20px] mb-[30px]">
                      <h3 className="text-[16px] leading-[21px] font-[700] mb-[5px]">
                        Expires On
                      </h3>
                      <p className="text-[18px] leading-[22px] font-[600] text-bluesecondary mb-[10px]">
                        2021-12-26 | 23:59:59
                      </p>
                    </div>

                    <ul className="list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is</li>
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>test is best it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] pt-[60px] md:pt-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className=" px-[10px] py-[0px] md:py-[0px] mx-auto flex flex-wrap flex-col">
          <div className="flex flex-wrap justify-start px-[0px] xl:px-[100px] gap-[0px] sm:gap-[0px] md:gap-[0px] lg:gap-[40px] w-[100%] p-[15px] bg-gray-100">
            <div className=" flex overflow-auto tabs_div pl-[52px]">
              <button
                className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start text-[16px] font-medium inline-flex items-center leading-none text-bluesecondary`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 mr-3 text-orangeprimary"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <b>Promos</b>{" "}
              </button>
              <div className="flex mx-auto">
                <button
                  onClick={() => setActiveTab("step1")}
                  className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${
                    activeTab === "step1"
                      ? "bg-gray-100 border-bluesecondary text-bluesecondary"
                      : "border-gray-200 hover:text-gray-900"
                  } tracking-wider`}
                >
                  {" "}
                  Find an Attorney{" "}
                </button>
                <button
                  onClick={() => setActiveTab("step2")}
                  className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${
                    activeTab === "step2"
                      ? "bg-gray-100 border-bluesecondary text-bluesecondary"
                      : "border-gray-200 hover:text-gray-900"
                  } tracking-wider`}
                >
                  {" "}
                  Legal Jobs
                </button>
                <button
                  onClick={() => setActiveTab("step3")}
                  className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${
                    activeTab === "step3"
                      ? "bg-gray-100 border-bluesecondary text-bluesecondary"
                      : "border-gray-200 hover:text-gray-900"
                  } tracking-wider`}
                >
                  {" "}
                  Substitute Attorney
                </button>
                <button
                  onClick={() => setActiveTab("step4")}
                  className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${
                    activeTab === "step4"
                      ? "bg-gray-100 border-bluesecondary text-bluesecondary"
                      : "border-gray-200 hover:text-gray-900"
                  } tracking-wider`}
                >
                  {" "}
                  Transcript
                </button>
                <button
                  onClick={() => setActiveTab("step5")}
                  className={`px-6 py-3 w-1/2 sm:w-auto justify-center whitespace-nowrap sm:justify-start border-b-2 text-[14px]font-medium inline-flex items-center leading-none ${
                    activeTab === "step5"
                      ? "bg-gray-100 border-bluesecondary text-bluesecondary"
                      : "border-gray-200 hover:text-gray-900"
                  } tracking-wider`}
                >
                  {" "}
                  Motion{" "}
                </button>
              </div>
            </div>
            {/* <div className='flex gap-[30px] button_tabs_right'>

            <Button
              href="/contact-support"
              as={Link}
              color="primary"
              className="bg-orangeprimary rounded-[30px] text-[#fff] px-6 py-3 sm:w-auto justify-center sm:justify-start text-[14px] font-medium inline-flex items-center leading-none w-[160px] h-[44px]"
            >
              Contact Support
            </Button>
         </div> */}
          </div>
          <div className="p-2 mb-[10px] md:p-4 w-full">{renderContent()}</div>
        </div>
      </section>
      {/* <section className="text-blackcolor body-font overflow-hidden">
        <div className="container pb-[40px] md:pb-[50px] mx-auto max-w-[1200px]">
          <h3 className="text-[18px] leading-[22px] text-bluesecondary font-[600] mb-[10px]">Find an Attorney</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

          <div className="bg-blueprimary mt-[20px]">
          <img alt="team" className="flex-shrink-0 rounded-lg w-[340px] h-[450px] py-[50px] px-[15px] mx-auto object-cover object-center" src="https://legalkonnect.com/storage/uploads/HtcqEidnT7Vm103bxcFefXekQsOVzMwuDzA1oiFy.png" />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default promos;
