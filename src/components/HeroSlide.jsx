export default function HeroSlide({ slide }) {
  const { imgSrc, title, topTitle, summary } = slide;
  return (
    <div className="flex flex-col relative flex-[0_0_100%] min-w-0">
      <img src={imgSrc} alt="title" />
      <div className="flex flex-col gap-9 absolute pt-52  text-light-text-color text-center px-10 items-center">
        <h5 className="text-h5">{topTitle}</h5>
        <h2 className="text-h2 text-center">{title}</h2>
        <p className="text-h4 text-light-text-gray-1 w-71.75">{summary}</p>
        <button className="bg-success-color text-h3 rounded-md px-10 py-3.75 mb-41 cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
