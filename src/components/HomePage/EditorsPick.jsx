import { editorsPickM } from '@/data/data';

export default function EditorsPick() {
  return (
    <section className="bg-[#fafafa] py-20">
      <div className="flex flex-col px-10 items-center">
        <h3 className="text-h3 text-text-color pb-2.5">EDITOR'S PICK</h3>
        <p className="text-paragraph text-second-text-color text-center">
          Problems trying to resolve <br className="lg:hidden" /> the conflict
          between
        </p>
        <div className="flex flex-col pt-12 lg:grid lg:grid-cols-[510px_240px_240px] lg:grid-rows-[242px_242px] lg:gap-x-7.5 lg:gap-y-4">
          {editorsPickM.map((pick) => (
            <div
              key={pick.tag}
              className="flex relative mb-7.5 nth-3:mb-4 last:mb-0 lg:mb-0 lg:nth-3:mb-0 lg:first:row-span-2 lg:nth-2:row-span-2"
            >
              <picture className="lg:w-full lg:h-full">
                {pick.desktopSrc && (
                  <source media="(min-width: 1024px)" srcSet={pick.desktopSrc} />
                )}
                <img
                  src={pick.src}
                  alt=""
                  className="lg:w-full lg:h-full lg:object-cover"
                />
              </picture>
              <span className="text-text-color text-h5 absolute bg-light-background-color px-6 min-w-32 py-3 bottom-4.5 left-4.5 text-center">
                {pick.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
