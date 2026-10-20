import Carousel from '@/components/HomePage/Carousel';
import Stars from './Stars';

const colorClasses = {
  primary: 'bg-primary-color',
  secondary: 'bg-secondary-color-1',
  alert: 'bg-alert-color',
  dark: 'bg-dark-background-color',
};

export default function ProductSummary({ product }) {
  const {
    imgSrcs,
    title,
    rating,
    reviewCount,
    price,
    availability,
    summary,
    colors,
  } = product;
  return (
    <div className="bg-light-gray-1">
      <div className="flex flex-col gap-5 px-10 py-12 lg:flex-row lg:max-w-275 lg:mx-auto lg:px-0 lg:gap-10">
        <div className="flex flex-col gap-5 lg:w-1/2 lg:shrink-0">
          <Carousel>
            {imgSrcs.map((src, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={src} alt="" className="block w-full" />
              </div>
            ))}
          </Carousel>
          <div className="flex gap-5 opacity-70">
            {imgSrcs.map((src, index) => (
              <img key={index} src={src} alt="" className="block w-1/4" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-3/4 lg:pt-14">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-text-color text-h4 font-bold">{title}</h4>
            <div className="flex items-center gap-2.5">
              <Stars rating={rating} />
              <span className="text-second-text-color text-h6">
                {reviewCount} Reviews
              </span>
            </div>
            <span className="text-h3 text-text-color">${price}</span>
            <span className="flex gap-1 text-h6">
              <span className=" text-second-text-color">Availability :</span>
              <span className="text-primary-color">{availability}</span>
            </span>
          </div>
          <p className="text-paragraph text-second-text-color">{summary}</p>
          <hr className="text-muted-color" />
          <div className="flex gap-2.5 pb-2.5">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-7.5 h-7.5 rounded-full ${colorClasses[color]}`}
              ></div>
            ))}
          </div>
          <div className="flex gap-2.5 items-center justify-between">
            <button className="bg-primary-color text-light-text-color px-5 py-2.5 rounded-md text-h6">
              Select Options
            </button>
            <div className="flex gap-2.5">
              <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center">
                <i className="iconify-[akar-icons--heart] text-text-color size-5"></i>
              </button>
              <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center">
                <i className="iconify-[lucide--shopping-cart] text-text-color size-5"></i>
              </button>
              <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center">
                <i className="iconify-[akar-icons--eye-open] text-text-color size-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
