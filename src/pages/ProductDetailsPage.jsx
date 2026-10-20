import Brands from '@/components/ShopPage/Brands';
import ProductCard from '@/components/HomePage/ProductCard';
import { productsM } from '@/data/data';

export default function ProductDetailsPage() {
  return (
    <section>
      <div className="py-12 bg-[#fafafa]">
        <h3 className="text-h3 text-text-color pb-12 text-center">
          BESTSELLER PRODUCTS
        </h3>
        <div className="flex flex-col gap-7.5 items-center lg:grid lg:grid-cols-4 lg:pb-0 lg:gap-y-15 lg:justify-between lg:max-w-275 lg:mx-auto *:nth-[n+5]:hidden lg:*:nth-[n+5]:flex">
          {productsM.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Brands />
    </section>
  );
}
