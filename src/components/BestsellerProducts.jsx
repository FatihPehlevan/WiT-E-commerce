import { productsM } from '@/data/data';
import ProductCard from '@/components/ProductCard';
export default function BestsellerProducts() {
  return (
    <div>
      {productsM.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
