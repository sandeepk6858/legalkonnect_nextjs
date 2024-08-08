'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Filter = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const params = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        setFilters(params);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = () => {
        const params = new URLSearchParams(filters);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <input
                type="text"
                name="search"
                value={filters.search || ''}
                onChange={handleFilterChange}
                placeholder="Search"
            />
            <select name="sort" value={filters.sort || 'date'} onChange={handleFilterChange}>
                <option value="date">Date</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
            </select>
            {/* Add other filters similarly */}
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filter;
