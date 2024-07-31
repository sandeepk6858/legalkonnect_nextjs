
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const Home = async () => {
  // Fetch session from the server

  return (
    <>
      <section className=" bg_overlay  body-font bg-[url('https://legalkonnect.com/storage/uploads/pages/a474d50e-b4cd-43ce-8bac-9ee3db5fa1d9.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="container px-5 py-[60px] md:py-[80px] mx-auto overlay_con">
          <div className="flex flex-col text-left w-full mb-[20px]">
            <h1 className="md:text-4xl text-2xl font-[600] title-font text-[#fff] sm:leading-[34px] md:leading-[44px] mb-[30px] max-w-[525px]">
              A Smarter Way to Buy and Sell
              Legal Services
            </h1>
            <p className="lg:w-2/3 leading-[22px] text-[#fff]  font-[18px] ">
              LegalKonnect leverages smart technology to put access to lawyers,
              legal professionals, and a wealth of legal information right at
              your fingertips. Discover how our fair bidding system helps
              lawyers and their clients today.
            </p>

            <Button
              href="/register"
              as={Link}
              color="primary"
              className="text-white w-[150px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
            >
              Get Started
            </Button>
          </div>
          <div className="flex flex-wrap -m-4 text-center mt-[40px] mpad">
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/find-attorney-legal-support" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("bakeel-1.png")} />
                  Find an attorney
                  <div className="tooltip_dropdown_new">Here, you can find an attorney.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/substitute-attorneys" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("attorney-1.png")} />
                  Substitute Attorney
                  <div className="tooltip_dropdown_new">Here, you can find a substitute attorney.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/jobs" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("legal_jobs-1.png")} />
                  Legal Jobs
                  <div className="tooltip_dropdown_new">Here, you can post and search for legal jobs.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/substitute-attorneys-jobs" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("legal_jobs-1.png")} />
                  Substitute Attorney Jobs
                  <div className="tooltip_dropdown_new">Here, you can request and search for substitute attorney jobs.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/motions" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("legal_docs-1.png")} />
                  Legal Docs
                  <div className="tooltip_dropdown_new">Here, you can post and search for legal docs</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/transcripts" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("transcripts%20(2).png")} />
                  Transcripts
                  <div className="tooltip_dropdown_new">Here, you can post and search for legal transcripts.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/forum" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("question_forum-1.png")} />
                  Questions Forum
                  <div className="tooltip_dropdown_new">Here, you can post your legal question and offer a reward for the best answer.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/paralegal-support" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img className="h-[52px]" src={imageURL("Icons.png")} />
                  Paralegal/ Support
                  <div className="tooltip_dropdown_new">Here, you can search for paralegals and other legal support service providers.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/experts" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img className="!w-[31px]" src={imageURL("expert.png")} />
                  Experts
                  <div className="tooltip_dropdown_new">Here, you can search for experts.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px] xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/process-servers" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("process_servers-1.png")} />
                  Process Servers
                  <div className="tooltip_dropdown_new">Here, you can search for process servers.</div>
                </Link>
              </div>
            </div>
            <div className="p-[10px]  xl:w-1/6 sm:w-1/3 w-2/4">
              <div className="border-2 box_item border-gray-200 px-0 py-0 rounded-lg grid justify-items-center relative">
                <Link href="/court-reporters" className="text-[16px] capitalize text-[#fff] flex-col flex justify-center gap-2 link_tooltip">
                  <img src={imageURL("Captions.png")} />
                  Court Reporters
                  <div className="tooltip_dropdown_new">Here, you can search for court reporters.</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-[60px] md:pt-[80px] mx-auto flex flex-wrap">
          <div className="flex flex-wrap">
            <div className="md:p-4 sm:p-1 md:mb-[0px] mb-[15px] lg:w-1/3 md:w-full sm:mx-[0px] md:mx-[0]">
              <div className="flex border-2 rounded-lg h-full border-gray-200 border-opacity-50 sm:p-4 p-[20px] md:p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-4 xl:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0">
                  <img src="https://legalkonnect.com/storage/uploads/pages/9131a843-783d-44f9-a6ba-712bb0d6797f.svg" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Connect with Skilled Lawyers Instantly</h2>
                  <p className="leading-relaxed text-base text-grey">All of the lawyers and legal services listed on the LegalKonnect database have been verified and peer-reviewed. Sourcing qualified, trusted legal assistance has never been easier.</p>
                </div>
              </div>
            </div>
            <div className="md:p-4 sm:p-1 md:mb-[0px] mb-[15px] lg:w-1/3 md:w-full">
              <div className="flex border-2 rounded-lg h-full border-gray-200 border-opacity-50 sm:p-4 p-[20px] md:p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-4 xl:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0">
                  <img src="https://legalkonnect.com/storage/uploads/pages/9087761c-2028-43df-b5b2-fa677ab009d9.svg" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Safe, Secure Online Payments</h2>
                  <p className="leading-relaxed text-base text-grey">Payments made through LegalKonnect are held in escrow until the completion of the task in question. Your personal and financial data is always kept encrypted and secure.</p>
                </div>
              </div>
            </div>
            <div className="md:p-4 sm:p-1 lg:w-1/3 md:w-full">
              <div className="flex border-2 rounded-lg h-full border-gray-200 border-opacity-50 sm:p-4 p-[20px] md:p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-4 xl:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0">
                  <img src="https://legalkonnect.com/storage/uploads/pages/d1a4c5c4-b99c-487c-bece-35bbd8dbb2a5.svg" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Put Smart Technology to Work for You</h2>
                  <p className="leading-relaxed text-base text-grey">The legal industry has been slow to adapt to technology. We want to change that. LegalKonnect uses smart tech to improve legal access and lower the associated costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-[60px] md:pt-[80px] mx-auto">
          <div className="flex flex-col text-center w-full mb-[40px]">
            <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Access legal services with the click of a button</h2>
            <p className="leading-relaxed text-base text-grey">We offer clients, lawyers, and other legal service professionals a one-stop solution for hiring, networking, <br />outsourcing, and more. Discover how we can help you today.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-left shadow-md  p-[20px] md:p-[30px] bg-[#f8f8fa]">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://legalkonnect.com/storage/uploads/pages/c02e5c7e-2849-4b8f-b932-1af6d36d6240.jpg" />
                <div className="w-full">
                  <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Find Legal Services</h2>
                  <p className="leading-relaxed text-base text-grey mb-[40px]">Connecting with practicing attorneys, lawyers, and legal services professionals has never been more accessible. With a comprehensive, coast-to-coast network of legal professionals from across the country, LegalKonnect uses technology to bring the industry together like never before. Consult with specialists, hire paralegals, and do so much more, all within minutes, from anywhere. Create a profile to start hiring and networking now.</p>
                  {/* <Link href="/login" type="button" className="text-white  bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Find Legal Services</Link> */}
                  <Button
                    href="/attorneys"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Find Legal Services
                  </Button>
                </div>

              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-left shadow-md  p-[20px] md:p-[30px] bg-[#f8f8fa]">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://legalkonnect.com/storage/uploads/pages/ff51ee13-f024-45b7-b177-a2d8a1280e1f.jpg" />
                <div className="w-full">
                  <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Post Contract Jobs</h2>
                  <p className="leading-relaxed text-base text-grey mb-[40px]">Searching for a lawyer used to be a stressful, time-consuming task, but those days are over. When you join LegalKonnect, you can post job requests to our marketplace and watch as legal experts come to you with their bid. The attorneys and lawyers on our platform have all been peer-reviewed and thoroughly vetted, with a profile highlighting their area of expertise. Finding qualified legal help online has never been easier.</p>
                  {/* <Link href="/login" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Post a Job Now</Link> */}
                  <Button
                    href="/jobs/create"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Post a Job Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-left shadow-md  p-[20px] md:p-[30px] bg-[#f8f8fa]">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://legalkonnect.com/storage/uploads/pages/3f9f881c-763a-4d64-ad8e-6f0d310b4f4b.jpg" />
                <div className="w-full">
                  <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Hire Substitute Lawyer</h2>
                  <p className="leading-relaxed text-base text-grey mb-[40px]">Overbooked yourself for the coming week? Not to worry. LegalKonnect has a substitute lawyer hiring section that makes finding a suitable, local submit the specifics of the case, and we’ll connect you to a list of qualified substitutes. This unique feature is similar to our main marketplace but has been streamlined to emphasize speed, so you get the substitute you need fast. replacement simple.</p>
                  {/* <Link href="/login" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Find Substitute</Link> */}
                  <Button
                    href="/substitute-attorneys"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Find Substitute
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-left shadow-md  p-[20px] md:p-[30px] bg-[#f8f8fa]">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://legalkonnect.com/storage/uploads/pages/28fa1c1d-67c9-4dc1-902c-a93fa0be0b56.jpg" />
                <div className="w-full">
                  <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Get Expert Advice</h2>
                  <p className="leading-relaxed text-base text-grey mb-[40px]">Our innovative legal forum is one of the many ways we are democratizing the legal industry. Central to that is the unique bounty-based voting system, where legal professionals are rewarded financially for answering user questions. This method pays legal professionals for their time, while greatly reducing the cost of expert opinions and insights for private citizens.</p>
                  {/* <Link href="/login" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Visit Forum</Link> */}
                  <Button
                    href="/forum"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Visit Forum
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-left shadow-md  p-[20px] md:p-[30px] bg-[#f8f8fa]">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://legalkonnect.com/storage/uploads/pages/28f5042c-9ee0-4fe9-a884-7a40b5a65346.jpg" />
                <div className="w-full">
                  <h2 className="text-[16px] leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Download Court Transcripts</h2>
                  <p className="leading-relaxed text-base text-grey mb-[40px]">The smart technology that we use to connect clients and lawyers can also be used to connect legal professionals to past court transcripts, petitions, legal research, and more. Have something worth sharing? Get paid for posting legal documents to the marketplace and bid on downloadable content posted by other lawyers.</p>
                  {/* <Link href="/login" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">View Documents</Link> */}
                  <Button
                    href="/motions"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    View Documents
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 ">
              <div className="h-full text-center flex-col items-center flex justify-items-center shadow-md  p-[20px] md:p-[30px] bg-[url('https://legalkonnect.com/storage/uploads/pages/a474d50e-b4cd-43ce-8bac-9ee3db5fa1d9.jpg')] bg-cover bg-no-repeat bg-center relative discenter">
                <div className="w-full overlay_card  items-center flex justify-items-center flex-col">
                  <h2 className="text-[24px] leading-[35px] font-[600] mb-[10px] mt-[10px] text-[#fff] text-center">A LEGAL SERVICES MARKETPLACE FOR THE DIGITAL AGE</h2>
                  <p className="leading-relaxed text-base mb-[40px] text-[#fff] text-center">LegalKonnect makes finding the exact legal service you require easier and faster by leveraging smart technology. Ready to take advantage?</p>
                  {/* <Link href="/register" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Register Now</Link> */}
                  <Button
                    href="/register"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px] mb-[20px]"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-[60px] md:py-[80px] mx-auto">
          <div className="flex flex-col text-center w-full mb-[40px]">
            <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">How the Marketplace Works</h2>
            <p className="leading-relaxed text-base text-grey">LegalKonnect uses data analytics and a tech-powered bidding system that connects lawyers and legal<br /> professionals with the people looking to hire them. Watch the video below to learn more.</p>
          </div>
          <div className="bg-video mb-[50px]">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="https://legalkonnect.com/storage/uploads/pages/0a01612c-0331-49f2-b116-2debb8035f6a.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full gap-[0px] md:gap-[30px] pdd-b sm:pb-[15px] md:pb[15] lg:pb-[0px] xl:pb[0] flex xl:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg">
                <div className="flex-grow sm:pl-8 p-[20px]">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0 "><img src="https://legalkonnect.com/storage/uploads/pages/92705214-b689-4ccb-a70b-7f3c840ad445.svg" /></div>
                  <div className="flex-grow mt-[20px] px-[15px] md:px-[0]">
                    <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Step 1 - Choose Your Category</h2>
                    <p className="leading-relaxed text-base text-grey">Select the type of lawyer or legal professional you are looking for, as well as the type of job. LegalKonnect uses this info to connect your job posting to the right legal professionals.</p>
                  </div>
                </div>
                <img alt="team" className="flex-shrink-0 m-wid object-cover object-center" src="https://legalkonnect.com/storage/uploads/pages/c1e6d176-da51-48a3-bdd8-d85b573fb8b0.jpg" />
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full gap-[0px] md:gap-[30px] pdd-b sm:pb-[15px] md:pb[15] lg:pb-[0px] xl:pb[0] flex xl:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg">
                <div className="flex-grow sm:pl-8 p-[20px]">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0 "><img src="https://legalkonnect.com/storage/uploads/pages/c0d14278-6b70-4ecd-a811-c4ce8bcee786.svg" /></div>
                  <div className="flex-grow mt-[20px] px-[15px] md:px-[0]">
                    <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Step 2 - Describe Your Task</h2>
                    <p className="leading-relaxed text-base text-grey">Give specific details on the scope of work required. This will help legal professionals within your desired category find jobs that match their skill set, expertise, and professional work history.</p>
                  </div>
                </div>
                <img alt="team" className="flex-shrink-0 m-wid object-cover object-center sm:mb-0" src="https://legalkonnect.com/storage/uploads/pages/81c013eb-5394-4171-a9d6-3fa0c97d8d6c.jpg" />
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full gap-[0px] md:gap-[30px] pdd-b sm:pb-[15px] md:pb[15] lg:pb-[0px] xl:pb[0] flex xl:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left shadow-lg">
                <div className="flex-grow sm:pl-8 p-[20px]">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full bg-[#eaf1fd] text-[#1359C3] flex-shrink-0 "><img src="https://legalkonnect.com/storage/uploads/pages/d20761c3-b962-47b0-b045-935c9767ef30.svg" /></div>
                  <div className="flex-grow mt-[20px] px-[15px] md:px-[0]">
                    <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Step 3 - Connect with (and Hire) Lawyers</h2>
                    <p className="leading-relaxed text-base text-grey">Once your job is posted, lawyers who fit your required parameters will be able to view the requirements and send you bids. You can then view profiles and ratings before deciding on a lawyer and paying through our secure online system.</p>
                  </div>
                </div>
                <img alt="team" className="flex-shrink-0 m-wid object-cover object-center sm:mb-0" src="https://legalkonnect.com/storage/uploads/pages/b4592a9f-9d9f-4269-8f9b-52a739ff21c7.jpg" />
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full text-center flex-col items-center flex justify-items-center shadow-md  p-[20px] md:p-[30px] bg-[url('https://legalkonnect.com/storage/uploads/pages/421b42fe-47a2-4f16-9309-38945fd9a933.jpg')] bg-cover bg-no-repeat bg-center relative discenter">
                <div className="w-full overlay_card items-center flex justify-items-center flex-col">
                  <h2 className="text-[24px] leading-[35px] font-[600] mb-[10px] mt-[10px] text-[#fff] text-center px-[20px]">It’s that simple.</h2>
                  <p className="leading-relaxed text-base mb-[30px] text-[#fff] text-center">The days of running around town searching for the right lawyer are over. Post your first job to connect with a pool of qualified lawyers in your region today</p>
                  {/* <Link href="/register" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Get Started</Link> */}
                  <Button
                    href="/register"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px] mb-[20px]"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pb-[60px] md:pb-[80px] mx-auto">
          <div className="flex flex-col text-center w-full mb-[40px]">
            <h2 className="text-blueprimary text-[18px] title-font font-[600] mb-3 leading-[22px]">Join our growing online community today.</h2>
            <p className="leading-relaxed text-base text-grey">LegalKonnect is powered by the strength of our members. Sign up today to join the team.</p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-[30px] w-[100%]">
            <div className=" md:w-1/2 flex flex-col items-start shadow-lg">
              <div className="h-[200px] w-[100%] mb-[20px] text-center flex-col items-center flex justify-items-center px-[15px] bg-[url('https://legalkonnect.com/storage/uploads/pages/421b42fe-47a2-4f16-9309-38945fd9a933.jpg')] bg-cover bg-no-repeat bg-center relative discenter ">
                <div className="w-full overlay_card items-center flex justify-items-center flex-col">
                  <h2 className="text-[24px] leading-[35px] font-[600] mb-[30px] text-[#fff] text-center px-[20px]">Hire a Lawyer Today</h2>
                  {/* <Link href="/register" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Register as Client</Link> */}
                  <Button
                    href="/register"
                    as={Link}
                    color="primary"
                    className="text-white w-[200px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Register as Client
                  </Button>
                </div>
              </div>
              <div className="list px-[20px] md:px-[30px] mx-[30px]">
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Let the Lawyers Come to You</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Rather than calling multiple law offices for a quote, you can watch as suitable applicants reach out to you with competitive bids.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">View Profiles & Ratings</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Lawyer profiles are all verified and peer-reviewed, with testimonials and ratings from past clients.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Pay Securely Online</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Our equitable online payment system ensures accurate billing and smooth transactions.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Get Your Questions Answered by Pros in the Forum</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Our unique bounty-based forum rewards qualified pros for answering questions correctly.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Save Hours of Time</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">LegalKonnect makes the search for suitable legal representation quicker and easier than ever.</p>
              </div>
            </div>

            <div className=" md:w-1/2 flex flex-col items-start shadow-lg">
              <div className="h-[200px] w-[100%] mb-[20px] text-center flex-col items-center flex justify-items-center px-[15px] bg-[url('https://legalkonnect.com/storage/uploads/pages/421b42fe-47a2-4f16-9309-38945fd9a933.jpg')] bg-cover bg-no-repeat bg-center relative discenter ">
                <div className="w-full overlay_card items-center flex justify-items-center flex-col">
                  <h2 className="text-[24px] leading-[35px] font-[600] mb-[30px] text-[#fff] text-center px-[20px]">Connect with New Clients</h2>
                  {/* <Link href="/register" type="button" className="text-white w-[150px] bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[14px] sm:text-[18px]">Register as Legal Professional</Link> */}
                  <Button
                    href="/register"
                    as={Link}
                    color="primary"
                    className="text-white w-[280px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Register as Legal Professional
                  </Button>
                </div>
              </div>
              <div className="list px-[20px] md:px-[30px] mx-[30px]">
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Find the Cases You Want</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Instead of dealing with everyone that walks through your door, you can choose the specific cases you want to bid on.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Highlight Your Expertise</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Create a lawyer profile that highlights your unique skills, abilities, and areas of expertise.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Stress-Free Billing</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Forget about chasing down clients for pay. Our secure online escrow system makes payment easy</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Network with Legal Professionals</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Hire paralegals, find substitute lawyers, and bid on downloadable court transcripts, all in one place.</p>
                <h3 className="text-[16px] with_doth3 leading-[19px] text-blueprimary font-[600] mb-[10px] mt-[10px]">Outsource Legal Research</h3>
                <p className="leading-relaxed text-base text-grey mb-[20px]">Need a trained lawyer or paralegal to handle some routine tasks for a low price? We’ve got you covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
