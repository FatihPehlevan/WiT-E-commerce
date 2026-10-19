import Brands from '@/components/ShopPage/Brands';
import CategoryFilters from '@/components/ShopPage/CategoryFilters';
import ShopCategories from '@/components/ShopPage/ShopCategories';
import ShopHeader from '@/components/ShopPage/ShopHeader';
import Pagination from '@/components/ShopPage/Pagination';

export default function ShopPage() {
  return (
    <section>
      <ShopHeader />
      <ShopCategories />
      <CategoryFilters />
      <Pagination />
      <Brands />
    </section>
  );
}
