import ProductCard from '@/components/HomePage/ProductCard';
import { useShopProducts } from '@/hooks/useShopProducts';
import Pagination from './Pagination';

export default function ShopPageProducts() {
  const { data, isPending, error, page, limit } = useShopProducts();
  const products = data?.products ?? [];

  if (isPending)
    return (
      <>
        <div className="size-12 mx-auto mt-10 rounded-full border-4 border-light-gray-2 border-t-primary-color animate-spin" />
        <p className="text-h4 text-second-text-color mt-4 text-center">
          Loading products...
        </p>
      </>
    );
  if (error)
    return (
      <p className="text-alert-color text-h3 w-full text-center pt-10">
        Error loading products
      </p>
    );
  if (products.length === 0)
    return (
      <p className="text-alert-color text-h3 w-full text-center pt-10">
        No products in this category
      </p>
    );

  return (
    <>
      <div className="flex flex-col gap-7.5 pt-12 px-10 lg:px-0 items-center lg:items-start lg:grid lg:grid-cols-4 lg:pb-0 lg:gap-y-15  lg:justify-between lg:max-w-275 lg:mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination total={data?.total} page={page} limit={limit} />
    </>
  );
}
