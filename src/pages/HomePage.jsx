import BestsellerProducts from '@/components/BestsellerProducts';
import Carousel from '@/components/Carousel';
import ClassicProductSlide from '@/components/ClassicProductSlide';
import EditorsPick from '@/components/EditorsPick';
import FeaturedPosts from '@/components/FeaturedPosts';
import PartOfTheNeuralUniverse from '@/components/PartOfTheNeuralUniverse';
import { classicProductsM } from '@/data/data';

export default function HomePage() {
  return (
    <main className="flex flex-col pt-5">
      <div className="">Hero section</div>

      <EditorsPick />
      <BestsellerProducts />

      <Carousel>
        {classicProductsM.map((product) => (
          <ClassicProductSlide key={product.id} product={product} />
        ))}
      </Carousel>

      <PartOfTheNeuralUniverse />

      <FeaturedPosts />
    </main>
  );
}
