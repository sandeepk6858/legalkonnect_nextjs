import { getForums } from "@/actions/forum/forumData";
import ForumCard from "@/components/forumcard";
import ChatQuestionMarkSvg from '@/components/Icons/chatQuestionMark'
import PaginationUi from "@/components/PaginationUI";
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";

const ForumPage = async ({ searchParams }) => {

    const params = {
        sort: searchParams.sort,
        page: searchParams.page,
    }
    const forum = await getForums(params);
    const currentSort = searchParams?.sort || 'new';

    // console.log(forum);

    return (
        <>
            <div className="bg-lightgrey my-4 ">
                <Navbar className="max-w-[1140px] mx-auto bg-transparent">
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem isActive className="leading-[3]" >
                            <div className="text-base font-semibold flex gap-x-2" aria-current="page" >
                                <ChatQuestionMarkSvg iconColor={`white`} width={`20px`} height={`21px`} />
                                Forum
                            </div>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem
                            isActive
                            className={`leading-[3] ${currentSort === 'new' ? 'border-b-2 border-blueprimary text-blueprimary' : 'border-b-2 border-transparent hover:border-blueprimary'}`}
                        >

                            <Link href={{ pathname: '/forum', query: {...searchParams, sort: 'new' } }}
                                className="text-sm font-normal hover:text-blueprimary" aria-current="page">
                                New
                            </Link>
                        </NavbarItem>
                        <NavbarItem
                            className={`border-b-2 ${currentSort === 'popular' ? 'border-blueprimary text-blueprimary' : 'border-transparent hover:border-blueprimary'} leading-[3]`}
                        >
                            <Link href={{ pathname: '/forum', query: { ...searchParams, sort: 'popular' } }}
                                className="text-sm font-normal hover:text-blueprimary" color="foreground">
                                Popular
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button as={Link} className="bg-orangeprimary hover:bg-hovergray text-white rounded-3xl" href="#" variant="flat">
                                Ask Question
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
            <div className="w-full lg:my-10 xl:px-2 my-5 md:px-5 flex flex-wrap justify-evenly gap-4 ">
                {forum?.data?.forums?.length > 0 ? forum.data.forums.map((item) => (
                    item && <ForumCard key={item.id} data={item} />
                ))
                    :
                    <div>No item found</div>
                }
            </div>
            {forum?.data?.pagination?.last_page > 1 && (
                <PaginationUi pagination={forum.data.pagination} searchParams={searchParams} pathname={'/forum'}/>
            )}
        </>
    )
}
export default ForumPage;