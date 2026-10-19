export default function Post({ post }) {
  const { src, tags, title, summary, date, commentsNumber } = post;
  return (
    <div className="flex flex-col shadow-md">
      <div className="relative">
        <img src={src} alt="" className="w-full" />
        <h6 className="text-h6 text-light-text-color absolute top-5 left-5 bg-danger-color py-1 px-3 rounded-md">
          NEW
        </h6>
      </div>
      <div className="flex flex-col gap-2.5 px-6 pt-6 pb-9">
        <div className="flex gap-4 ">
          {tags.map((tag) => (
            <span className="first:text-disabled-element-color" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-h4 text-text-color">{title}</h4>
        <p className="text-paragraph text-second-text-color">{summary}</p>
        <div className="flex justify-between text-small text-second-text-color pt-4 ">
          <span className="flex items-center gap-1.25">
            <i className="iconify-[boxicons--alarm] text-primary-text-color size-4"></i>
            {date}
          </span>
          <span className="flex item-center gap-1.25">
            <i className="iconify-[mdi--chart-areaspline-variant] text-secondary-color-1 size-4"></i>
            {commentsNumber} comments
          </span>
        </div>
        <span className="flex gap-2.5 items-center pt-4">
          <span className="text-h6 text-second-text-color">Learn More</span>
          <span className="iconify-[akar-icons--chevron-right] text-primary-text-color"></span>
        </span>
      </div>
    </div>
  );
}
