import Carousel from '@/components/HomePage/Carousel';
import ProductInfo from './ProductInfo';
import { useProduct } from '@/hooks/useProduct';
import { useParams } from 'react-router';

export default function ProductSummary() {
  const { productId } = useParams();
  const { data, isPending } = useProduct(productId);
  if (isPending)
    return (
      <>
        <div className="size-12 mx-auto mt-10 rounded-full border-4 border-light-gray-2 border-t-primary-color animate-spin" />
        <p className="text-h4 text-second-text-color mt-4 text-center">
          Loading product...
        </p>
      </>
    );
  const { images } = data;

  return (
    <div className="bg-light-gray-1">
      <div className="flex flex-col gap-5 px-10 py-12 lg:grid lg:grid-cols-[1fr_2fr] lg:items-center lg:max-w-275 lg:mx-auto lg:px-0 lg:gap-x-10 lg:pt-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <Carousel>
            {images.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={img.url} alt="" className="block w-full" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex gap-5 opacity-70 lg:col-start-1 lg:row-start-2">
          {images.map((img, index) => (
            <img key={index} src={img.url} alt="" className="block w-1/4" />
          ))}
        </div>
        <div className="lg:col-start-2 lg:row-start-1">
          <ProductInfo product={data} />
        </div>
      </div>
    </div>
  );
}
