export default function CategoryFilters() {
  return (
    <div className="flex flex-col items-center bg-white gap-6 py-6 lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
      <span className="text-h6 text-second-text-color">
        Showing all 12 results
      </span>
      <div className="flex gap-4 items-center">
        <span className="text-h6 text-second-text-color">Views: </span>
        <div className="border border-light-gray-2 rounded-md p-4">
          <i className="block iconify-[bi--grid-fill] text-text-color"></i>
        </div>
        <div className="border border-light-gray-2 rounded-md p-4">
          <i className="block iconify-[codicon--checklist-compact] text-text-color"></i>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1.5 items-center border border-[#ddd] rounded-md bg-[#f9f9f9] px-5 py-2">
          <span className="text-form text-second-text-color">Popularity</span>
          <i className="iconify-[akar-icons--chevron-down]"></i>
        </div>
        <button className="bg-primary-color text-light-text-color text-h6 px-7 rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
}
