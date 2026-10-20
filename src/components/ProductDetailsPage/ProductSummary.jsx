import Carousel from '@/components/HomePage/Carousel';
import ProductInfo from './ProductInfo';
import { singleProduct } from '@/data/data';

const colorClasses = {
  primary: 'bg-primary-color',
  secondary: 'bg-secondary-color-1',
  alert: 'bg-alert-color',
  dark: 'bg-dark-background-color',
};

export default function ProductSummary() {
  const { imgSrcs } = singleProduct;
  return (
    <div className="bg-light-gray-1">
      <div className="flex flex-col gap-5 px-10 py-12 lg:flex-row lg:max-w-275 lg:mx-auto lg:px-0 lg:gap-10 lg:py-0">
        <div className="flex flex-col gap-5 lg:w-1/2 lg:shrink-0 lg:pb-12">
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
        <ProductInfo product={singleProduct} />
      </div>
    </div>
  );
}
