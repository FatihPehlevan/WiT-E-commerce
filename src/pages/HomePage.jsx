import BestsellerProducts from '@/components/BestsellerProducts';
import Carousel from '@/components/Carousel';
import ClassicProductSlide from '@/components/ClassicProductSlide';
import EditorsPick from '@/components/EditorsPick';
import FeaturedPosts from '@/components/FeaturedPosts';
import PartOfTheNeuralUniverse from '@/components/PartOfTheNeuralUniverse';
import { classicProductsM, heroSlides } from '@/data/data';
import HeroSlide from '@/components/HeroSlide';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Carousel>
        {heroSlides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </Carousel>

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
