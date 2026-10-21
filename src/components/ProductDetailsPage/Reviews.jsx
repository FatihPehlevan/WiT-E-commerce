export default function Reviews({ reviews }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-h3 text-text-color">Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <i className="iconify-[akar-icons--chevron-right] text-muted-text-color"></i>
            <p className="text-paragraph text-second-text-color">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
