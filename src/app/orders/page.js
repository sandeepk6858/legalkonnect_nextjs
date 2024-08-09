import OrdersCard from "@/components/OrdersCard/OrdersCard";
import SearchSvg from "@/components/Icons/searchSvg";
import OrderSvg from "@/components/Icons/orderSvg";
import GlobalDropdownComponent from "@/components/globalDropdown";
import Link from "next/link";
import { getOrders } from "@/actions/orders";

const Orders = async ({ searchParams }) => {
    const curSection = searchParams.section || "active-contracts";
    const params = {
        // sortValue: searchParams.sort || 'date',
    };
    const data = await getOrders(params);
    
    return (
        <>
            <section className="bg-greytoolight w-full m-auto mb-6">
                <div className="max-w-[950px] px-4 mx-auto overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden">
                    <div className="w-full flex justify-between flex-nowrap">
                        <div className="py-3 pr-5  flex items-center text-base gap-2 font-semibold text-orangeprimary whitespace-nowrap border-r border-lightgrey ">
                            <OrderSvg width={"20px"} height={"20px"} className="fill-current text-orangeprimary" />
                            <h5>My Orders</h5>
                        </div>
                        <div className="ml-7 border-r border-lightgrey flex items-center">
                            <ul className="text-sm flex justify-center whitespace-nowrap">
                                <li className={`py-4 mr-7 ${(curSection === "active-contracts") ? "text-orangeprimary border-b-2  border-orangeprimary  hover:text-orangeprimary" : "hover:text-greysecondary"}`}>
                                    <Link href={{ query: { ...searchParams, section: 'active-contracts' } }}>
                                        Active contracts
                                    </Link>
                                </li>
                                <li className={`py-4 mr-7 ${curSection === "closed-contracts" ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary" : "hover:text-greysecondary"}`}>
                                    <Link href={{ query: { ...searchParams, section: 'closed-contracts' } }}>
                                        Closed contracts
                                    </Link>
                                </li>
                                <li className={`py-4  mr-7 ${curSection === "submitted-jobs" ? "text-orangeprimary border-b-2 border-orangeprimary hover:text-orangeprimary" : "hover:text-greysecondary"}`}>
                                    <Link href={{ query: { ...searchParams, section: 'submitted-jobs' } }}>
                                        Submitted Jobs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=" w-full flex  ml-7 gap-8" >
                            <div className="flex gap-2 py-3 align items-center ">
                                <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"} />
                                <input className="outline-none w-14 text-lg bg-greytoolight" placeholder="Search"></input>
                            </div>
                            <div className="flex items-center gap-x-2.5 py-5 lg:py-0  ">
                                <p className="text-sm font-normal text-blackcolor whitespace-nowrap">Sort by</p>
                                <GlobalDropdownComponent pathname="/orders" searchParams={searchParams} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {curSection === "active-contracts" &&
                <section className="px-6 flex justify-center flex-wrap">
                    {
                        (data?.data?.jobs?.active?.length > 0 || data?.data?.substituteAttorneys?.active?.length > 0) ? (
                            <>
                                {data?.data?.jobs?.active?.length > 0 &&
                                    data?.data?.jobs?.active.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                                {data?.data?.substituteAttorneys?.active?.length > 0 &&
                                    data?.data?.substituteAttorneys?.active.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                            </>
                        ) : (
                            <div>No item found</div>
                        )
                    }

                </section>
            }
            {curSection === "closed-contracts" &&
                <section className="px-6 flex justify-center flex-wrap">
                    {
                        (data?.data?.jobs?.closed?.length > 0 || data?.data?.substituteAttorneys?.closed?.length > 0) ? (
                            <>
                                {data?.data?.jobs?.closed?.length > 0 &&
                                    data?.data?.jobs?.closed.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                                {data?.data?.substituteAttorneys?.closed?.length > 0 &&
                                    data?.data?.substituteAttorneys?.closed.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                            </>
                        ) : (
                            <div>No item found</div>
                        )
                    }

                </section>}
            {curSection === "submitted-jobs" &&
                <section className="px-6 flex justify-center flex-wrap">
                    {
                        (data?.data?.jobs?.submitted?.length > 0 || data?.data?.substituteAttorneys?.submitted?.length > 0) ? (
                            <>
                                {data?.data?.jobs?.submitted?.length > 0 &&
                                    data?.data?.jobs?.submitted.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                                {data?.data?.substituteAttorneys?.submitted?.length > 0 &&
                                    data?.data?.substituteAttorneys?.submitted.map((item) => (
                                        item && <OrdersCard key={item.id} data={item} />
                                    ))
                                }
                            </>
                        ) : (
                            <div>No item found</div>
                        )
                    }

                </section>}
        </>
    )
}
export default Orders;  