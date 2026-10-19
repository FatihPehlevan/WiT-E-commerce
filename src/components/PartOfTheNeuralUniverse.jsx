export default function PartOfTheNeuralUniverse() {
  return (
    <section className="flex flex-col pt-20 lg:flex-row-reverse lg:gap-27.5 lg:items-center lg:justify-center lg:pt-0">
      <div className="flex flex-col items-center px-10 pb-7 gap-8 text-center lg:text-left lg:items-start lg:px-0 lg:pt-5">
        <h5 className="text-h5 text-muted-text-color">SUMMER 2020</h5>
        <h2 className="text-h2 text-text-color">
          Part of the Neural <br className="hidden lg:inline" /> Universe
        </h2>
        <p className="text-h4 text-second-text-color w-60 lg:w-100 ">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col gap-6 text-btn-text lg:flex-row lg:gap-2.5">
          <button className=" bg-primary-text-color text-light-text-color px-10 py-4 rounded-md cursor-pointer">
            BUY NOW
          </button>
          <button className="border border-primary-color text-primary-text-color px-10 py-4 rounded-md cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="w-[95%] mx-auto lg:max-w-175 lg:mx-0"
        src="/assets/PartOfTheNeuralUniverse/neural.png"
        alt=""
      />
    </section>
  );
}
