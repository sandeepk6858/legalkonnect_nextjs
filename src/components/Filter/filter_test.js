import { useRouter } from 'next/router';
import { useState } from 'react';

const Filter = () => {
    const router = useRouter();
    const [filters, setFilters] = useState(router.query);

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = () => {
        router.push({
            pathname: router.pathname,
            query: filters,
        });
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