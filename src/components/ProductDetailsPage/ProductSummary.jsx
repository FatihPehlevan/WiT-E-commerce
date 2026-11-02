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
      <div className="flex flex-col gap-5 px-10 py-12 lg:flex-row lg:max-w-275 lg:mx-auto lg:px-0 lg:gap-10 lg:py-0">
        <div className="flex flex-col gap-5 lg:w-1/2 lg:shrink-0 lg:pb-12">
          <Carousel>
            {images.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={img.url} alt="" className="block w-full" />
              </div>
            ))}
          </Carousel>
          <div className="flex gap-5 opacity-70">
            {images.map((img, index) => (
              <img key={index} src={img.url} alt="" className="block w-1/4" />
            ))}
          </div>
        </div>
        <ProductInfo product={data} />
      </div>
    </div>
  );
}
