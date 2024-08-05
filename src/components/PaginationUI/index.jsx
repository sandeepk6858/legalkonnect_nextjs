import Link from 'next/link';

const PaginationUi = ({ pagination, pathname, searchParams }) => {
    const {current_page, last_page } = pagination;

    const createPageLinks = () => {
        const links = [];

        for (let i = 1; i <= last_page; i++) {
            links.push(
                <Link
                    key={i}
                    href={{ pathname, query: { ...searchParams, page: i } }}
                    className={`px-4 py-2 border ${current_page === i ? 'border-blueprimary text-blueprimary' : 'border-transparent hover:border-blueprimary'}`}
                >
                    {i}
                </Link>
            );
        }

        return links;
    };

    return (
        <div className="flex justify-center space-x-2">
            {current_page > 1 && (
                <Link
                    href={{ pathname, query: { ...searchParams, page: current_page - 1 } }}
                    className="px-4 py-2 border border-transparent hover:border-blueprimary"
                >
                    Previous
                </Link>
            )}
            {createPageLinks()}
            {current_page < last_page && (
                <Link
                    href={{ pathname, query: { ...searchParams, page: current_page + 1 } }}
                    className="px-4 py-2 border border-transparent hover:border-blueprimary"
                >
                    Next
                </Link>
            )}
        </div>
    );
};

export default PaginationUi;
