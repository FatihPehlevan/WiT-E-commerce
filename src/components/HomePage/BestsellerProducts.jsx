import BestsellerList from '@/components/HomePage/BestsellerList';

export default function BestsellerProducts() {
  return (
    <section className="pt-20 px-10">
      <div className="flex flex-col gap-2.5 text-center pb-12">
        <h4 className="text-h4 text-second-text-color">Featured Products</h4>
        <h3 className="text-h3 text-text-color">
          BESTSELLER <br className="lg:hidden" /> PRODUCTS
        </h3>
        <p className="text-paragraph text-second-text-color">
          Problems trying to resolve the <br className="lg:hidden" /> conflict
          between
        </p>
      </div>

      <BestsellerList className="flex flex-col gap-7.5 items-center lg:grid lg:grid-cols-[repeat(4,240px)] lg:justify-center pb-20 lg:gap-y-20" />
    </section>
  );
}
