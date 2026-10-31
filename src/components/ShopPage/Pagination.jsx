import { useSearchParams } from 'react-router';

export default function Pagination({ total, page, limit }) {
  const [, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const start = Math.max(1, Math.min(page - 1, totalPages - 2));
  const pages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, i) => start + i,
  );

  const goToPage = (newPage) => {
    setSearchParams((prev) => {
      if (newPage === 1) {
        prev.delete('page');
        return prev;
      }
      prev.set('page', newPage);
      return prev;
    });
  };

  return (
    <div className="px-10 py-12 lg:max-w-120 lg:mx-auto">
      <div className="flex flex-row justify-between text-center text-link border-2 border-muted-color rounded-md overflow-hidden divide-x-2 divide-muted-color shadow-md ">
        <button
          onClick={() => goToPage(1)}
          disabled={page === 1}
          className="basis-2/7 py-6 text-primary-color cursor-pointer disabled:bg-[#f3f3f3] disabled:text-muted-color disabled:cursor-default"
        >
          First
        </button>
        {pages.map((n) => (
          <button
            key={n}
            onClick={() => goToPage(n)}
            className={`basis-1/7 py-6 cursor-pointer ${n === page ? 'bg-primary-color text-white' : 'text-primary-color'}`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="basis-2/7 py-6 text-primary-color cursor-pointer disabled:bg-[#f3f3f3] disabled:text-muted-color disabled:cursor-default"
        >
          Next
        </button>
      </div>
    </div>
  );
}
