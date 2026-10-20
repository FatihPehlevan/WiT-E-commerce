export default function Stars({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2;

  const getStarClass = (index) => {
    const remaining = roundedRating - index;
    if (remaining >= 1) return 'iconify-[bi--star-fill]';
    if (remaining === 0.5) return 'iconify-[bi--star-half]';
    return 'iconify-[bi--star]';
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <i key={index} className={`${getStarClass(index)} text-[#F3CD03]`}></i>
      ))}
    </div>
  );
}
