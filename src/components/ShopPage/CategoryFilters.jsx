import { useSearchParams } from 'react-router';
import { useState } from 'react';

export default function CategoryFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('filter') ?? '');
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchParams((searchParams) => {
      if (!value) {
        searchParams.delete('sort');
        return searchParams;
      }
      searchParams.set('sort', value);
      return searchParams;
    });
  };
  const handleFilter = () => {
    setSearchParams((searchParams) => {
      if (!filter) {
        searchParams.delete('filter');
        return searchParams;
      }
      searchParams.set('filter', filter);
      return searchParams;
    });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    if (!value) {
      setSearchParams((prev) => {
        prev.delete('filter');
        return prev;
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-white gap-6 py-6 lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto lg:pt-12 lg:pb-0">
      <span className="text-h6 text-second-text-color">
        Showing all 25 results
      </span>
      {/* <div className="flex gap-4 items-center">
        <span className="text-h6 text-second-text-color">Views: </span>
        <div className="border border-light-gray-2 rounded-md p-4">
          <i className="block iconify-[bi--grid-fill] text-text-color"></i>
        </div>
        <div className="border border-light-gray-2 rounded-md p-4">
          <i className="block iconify-[codicon--checklist-compact] text-text-color"></i>
        </div>
      </div> */}
      <div className="flex gap-4">
        <div className="relative">
          <select
            value={searchParams.get('sort') ?? ''}
            onChange={handleChange}
            className="form-field w-full appearance-none cursor-pointer"
          >
            <option value="">Popularity</option>
            <option value="price:asc">Price Ascending</option>
            <option value="price:desc">Price Descending</option>
            <option value="rating:asc">Rating Ascending</option>
            <option value="rating:desc">Rating Descending</option>
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-second-text-color">
            ▾
          </span>
        </div>
        <input
          value={filter}
          onChange={handleInputChange}
          className="form-field"
          placeholder="Search"
        />
        <button
          onClick={handleFilter}
          className="bg-primary-color text-light-text-color text-h6 px-7 rounded-md cursor-pointer"
        >
          Filter
        </button>
      </div>
    </div>
  );
}
