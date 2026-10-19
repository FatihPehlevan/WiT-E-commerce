export default function Pagination() {
  return (
    <div className="px-10 py-12 lg:max-w-120 lg:mx-auto">
      <div className="flex flex-row justify-between text-center text-link border-2 border-muted-color rounded-md overflow-hidden divide-x-2 divide-muted-color shadow-md ">
        <button className="basis-2/7 bg-[#f3f3f3] py-6  text-muted-color cursor-pointer">
          First
        </button>
        <button className="basis-1/7 py-6 text-primary-color cursor-pointer">
          1
        </button>
        <button className="basis-1/7 py-6 bg-primary-color  text-white cursor-pointer">
          2
        </button>
        <button className="basis-1/7 py-6 text-primary-color cursor-pointer">
          3
        </button>
        <button className="basis-2/7 py-6 text-primary-color cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
