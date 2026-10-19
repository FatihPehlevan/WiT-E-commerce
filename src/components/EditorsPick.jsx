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
        <div className="flex flex-col pt-12">
          {editorsPickM.map((pick) => (
            <div
              key={pick.tag}
              className="flex relative mb-7.5 nth-3:mb-4 last:mb-0"
            >
              <img src={pick.src} alt="" />
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
