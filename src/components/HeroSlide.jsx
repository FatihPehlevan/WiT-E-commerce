export default function HeroSlide({ slide }) {
  const { imgSrcM, imgSrcD, title, topTitle, summary } = slide;
  return (
    <div className="flex flex-col relative flex-[0_0_100%] min-w-0">
      <picture>
        <source media="(min-width: 1024px)" srcSet={imgSrcD} />
        <img
          src={imgSrcM}
          alt={title}
          className="block w-full lg:h-179 lg:object-cover lg:object-top"
        />
      </picture>
      <div className="flex flex-col gap-9 absolute pt-47  text-light-text-color text-center px-10 items-center lg:text-left lg:items-start lg:pl-49.5 lg:pt-52">
        <h5 className="text-h5">{topTitle}</h5>
        <h2 className="text-h2 lg:text-h1">{title}</h2>
        <p className="text-h4 text-light-text-gray-1 w-71.75 lg:w-96">
          {summary}
        </p>
        <button className="bg-success-color text-h3 rounded-md px-10 py-3.75 mb-41 cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
