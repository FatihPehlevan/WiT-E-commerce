import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y touch-pinch-zoom">
          {children}
        </div>
        <div className="absolute top-[45.7%] left-0 w-full">
          <div className="flex justify-between px-6">
            <button className="embla__prev" onClick={scrollPrev}>
              <i className="iconify-[akar-icons--chevron-left] size-14 text-light-text-color"></i>
            </button>
            <button className="embla__next" onClick={scrollNext}>
              <i className="iconify-[akar-icons--chevron-right] size-14 text-light-text-color"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
