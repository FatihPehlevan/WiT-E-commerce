import ShopCategories from '@/components/ShopPage/ShopCategories';
import ShopHeader from '@/components/ShopPage/ShopHeader';

export default function ShopPage() {
  return (
    <section className="bg-light-gray-1">
      <ShopHeader />
      <ShopCategories />
    </section>
  );
}
