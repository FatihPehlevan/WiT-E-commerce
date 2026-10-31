import Brands from '@/components/ShopPage/Brands';
import CategoryFilters from '@/components/ShopPage/CategoryFilters';
import ShopCategories from '@/components/ShopPage/ShopCategories';
import ShopHeader from '@/components/Header/InnerHeader';
import ShopPageProducts from '@/components/ShopPage/ShopPageProducts';

export default function ShopPage() {
  return (
    <section>
      <ShopHeader title="Shop" />
      <ShopCategories />
      <CategoryFilters />
      <ShopPageProducts />
      <Brands />
    </section>
  );
}
