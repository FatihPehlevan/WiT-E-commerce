import Brands from '@/components/ShopPage/Brands';
import CategoryFilters from '@/components/ShopPage/CategoryFilters';
import ShopCategories from '@/components/ShopPage/ShopCategories';
import ShopHeader from '@/components/ShopPage/ShopHeader';
import Pagination from '@/components/ShopPage/Pagination';
import ShopPageProducts from '@/components/ShopPage/ShopPageProducts';

export default function ShopPage() {
  return (
    <section>
      <ShopHeader />
      <ShopCategories />
      <CategoryFilters />
      <ShopPageProducts />
      <Pagination />
      <Brands />
    </section>
  );
}
