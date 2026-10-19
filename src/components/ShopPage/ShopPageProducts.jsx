import ProductCard from '@/components/HomePage/ProductCard';
import { productsM } from '@/data/data';

export default function ShopPageProducts() {
  return (
    <div className="flex flex-col gap-7.5 pt-12 items-center lg:grid lg:grid-cols-4 lg:pb-0 lg:gap-y-15  lg:justify-between lg:max-w-275 lg:mx-auto *:nth-[n+5]:hidden lg:*:nth-[n+5]:flex">
      {productsM.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
