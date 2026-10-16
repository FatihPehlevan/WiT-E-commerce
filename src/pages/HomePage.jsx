import BestsellerProducts from '@/components/BestsellerProducts';
import EditorsPick from '@/components/EditorsPick';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <main className="flex flex-col pt-5">
      <div className="">Hero section</div>

      <EditorsPick />
      <BestsellerProducts />

      <div className="">Slider section</div>
      <div className="">Part of the Neural Universe</div>

      <FeaturedPosts />
    </main>
  );
}
