import Brands from '@/components/ShopPage/Brands';
import ProductCard from '@/components/HomePage/ProductCard';
import { productsM, singleProduct } from '@/data/data';
import ProductSummary from '@/components/ProductDetailsPage/ProductSummary';
import ProductSpecs from '@/components/ProductDetailsPage/ProductSpecs';
import InnerHeader from '@/components/Header/InnerHeader';

export default function ProductDetailsPage() {
  return (
    <section>
      <InnerHeader title="Product Details" />
      <ProductSummary product={singleProduct} />
      <ProductSpecs />
      {/* Bestseller Products Section */}
      <div className="py-12 bg-light-gray-1">
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
