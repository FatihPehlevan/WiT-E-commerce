import BestsellerProducts from '@/components/HomePage/BestsellerProducts';
import Carousel from '@/components/HomePage/Carousel';
import ClassicProductSlide from '@/components/HomePage/ClassicProductSlide';
import EditorsPick from '@/components/HomePage/EditorsPick';
import FeaturedPosts from '@/components/HomePage/FeaturedPosts';
import PartOfTheNeuralUniverse from '@/components/HomePage/PartOfTheNeuralUniverse';
import { classicProductsM, heroSlides } from '@/data/data';
import HeroSlide from '@/components/HomePage/HeroSlide';

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
