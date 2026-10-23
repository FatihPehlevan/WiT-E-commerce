import Statistics from '@/components/AboutUs/Statistics';
import TeamPage from './TeamPage';
import Brands from '@/components/ShopPage/Brands';

export default function AboutUsPage() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col text-center items-center gap-10 pt-15 px-10 pb-5">
        <h2 className="text-h2 text-text-color">ABOUT US</h2>
        <p className="text-paragraph text-center text-second-text-color w-60 lg:max-w-150 mx-auto">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <button className="bg-primary-color text-btn-text text-light-text-color px-10 py-4 rounded-md cursor-pointer">
          Get Quote Now
        </button>
      </div>
      <img src="assets/about_us/backgroundM.png" alt="" />
      <div className="flex flex-col items-center px-10 gap-10 py-15">
        <div className="flex flex-col items-center px-10 gap-5 text-center">
          <p className="text-danger-color text-paragraph">Problem trying</p>
          <h3 className="text-h3 text-text-color">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="text-paragraph text-second-text-color text-center">
          Problems trying to resolve the conflict between the two major
          realmstext of Classical physics: Newtonian mechanics{' '}
        </p>
      </div>

      <Statistics />
      <TeamPage />
      <div className="flex flex-col gap-10 bg-light-text-gray-1 px-10 items-center text-center pt-20">
        <h2 className="text-text-color text-h2">Big Companies Are Here</h2>
        <p className="text-paragraph text-second-text-color lg:w-120">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
      </div>
      <Brands />
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="assets/about_us/video_thumb_desktop.png"
        />
        <img
          src="assets/about_us/video_thumb_mobile.png"
          alt=""
          className="px-10 py-20 lg:mx-auto lg:max-w-275 lg:w-full"
        />
      </picture>
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
    </section>
  );
}
