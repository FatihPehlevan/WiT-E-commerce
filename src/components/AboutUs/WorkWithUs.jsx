export default function WorkWithUs() {
  return (
    <div className="flex flex-col bg-hover-color text-light-text-color px-10 py-20  text-center lg:text-left lg:flex-row lg:p-0 lg:justify-between">
      <div className="flex flex-col gap-6 items-center lg:self-center lg:items-start lg:ml-[calc((100%-1100px)/2)]">
        <h5 className="text-h5">WORK WITH US</h5>
        <h2 className="text-h2">Now Let's Grow Yours</h2>
        <p className="text-paragraph lg:w-120">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{' '}
        </p>
        <button className="border border-white text-btn-text px-10 py-4 rounded-md">
          Button
        </button>
      </div>
      <img
        src="/assets/about_us/lets_grow_yours_image.png"
        alt=""
        className="hidden lg:block"
      />
    </div>
  );
}
