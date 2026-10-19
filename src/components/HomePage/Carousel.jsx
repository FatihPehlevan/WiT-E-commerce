import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel({ children, chevronClass }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y touch-pinch-zoom">
          {children}
        </div>
        <div
          // if you want to manipulate chevrons' position based on slide needs, you can send a prop and use that value here. ex. "top-[600px]"
          className={`absolute ${chevronClass ?? 'top-1/2 -translate-y-1/2'} left-0 w-full`}
        >
          <div className="flex justify-between px-3 lg:px-10">
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
