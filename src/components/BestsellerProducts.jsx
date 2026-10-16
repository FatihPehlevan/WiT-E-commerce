import { productsM } from '@/data/data';
import ProductCard from '@/components/ProductCard';
export default function BestsellerProducts() {
  return (
    <section className="pt-20 px-10">
      <div className="flex flex-col gap-2.5 text-center pb-12">
        <h4 className="text-h4 text-second-text-color">Featured Products</h4>
        <h3 className="text-h3 text-text-color">
          BESTSELLER <br /> PRODUCTS
        </h3>
        <p className="text-paragraph text-second-text-color">
          Problems trying to resolve the <br /> conflict between
        </p>
      </div>

      <div className="flex flex-col gap-7.5 items-center">
        {productsM.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
