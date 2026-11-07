import { useSelector } from 'react-redux';
import ProductCard from '@/components/HomePage/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { FETCH_STATES } from '@/store/actions/productActions';

export default function BestsellerList({ className }) {
  const { data, isPending, isError } = useProducts(
    undefined,
    'sell_count:desc',
    undefined,
    8,
    0,
  );
  const categoriesFetchState = useSelector(
    (state) => state.product.categoriesFetchState,
  );

  if (isError || categoriesFetchState === FETCH_STATES.FAILED)
    return (
      <p className="text-alert-color text-h4 text-center py-10">
        Error loading products
      </p>
    );

  if (isPending || categoriesFetchState !== FETCH_STATES.FETCHED)
    return (
      <div className="flex flex-col items-center py-10">
        <div className="size-12 rounded-full border-4 border-light-gray-2 border-t-primary-color animate-spin" />
        <p className="text-h4 text-second-text-color mt-4 text-center">
          Loading products...
        </p>
      </div>
    );

  return (
    <div className={className}>
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
