import React from "react";
import Filter from "@/components/Filter/Filter";
import UserComponent from "@/components/UsersComponent";
import { getUserData } from "@/actions/UsersByRole/getuserdata";
import PaginationUi from "@/components/PaginationUI";

const Attorney = async ({searchParams}) => {

  const params = {
    role: "attorney",
  }
  const data = await getUserData(params);

  return (
    <>
      <Filter />
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <div className="flex flex-wrap lg:flex-nowrap gap-[20px] xl:gap-[30px]">
            {data?.data?.users ?
              data?.data?.users?.map((item) => (
                <UserComponent key={item.id} data={item} />
              ))
              :
              <div className="w-screen flex justify-center items-center">No item found</div>
            }
          </div>
        </div>
      </section>
      {data?.data?.pagination?.last_page > 1 && (
        <PaginationUi pagination={data.data.pagination} searchParams={searchParams} pathname={'/attorneys'} />
      )}
    </>
  );
};

export default Attorney;
