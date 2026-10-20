export default function Reviews({ reviews }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-h3 text-text-color">Reviews</h3>
        {reviews.map((review, index) => (
          <p key={index} className="text-paragraph text-second-text-color">
            {review}
          </p>
        ))}
      </div>
    </div>
  );
}
