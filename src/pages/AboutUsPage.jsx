import Statistics from '@/components/AboutUs/Statistics';
import TeamPage from './TeamPage';
import Brands from '@/components/ShopPage/Brands';
import WorkWithUs from '@/components/AboutUs/WorkWithUs';

export default function AboutUsPage() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:max-w-275 lg:mx-auto lg:w-full">
        <div className="flex flex-col text-center items-center gap-10 pt-15 px-10 pb-5 lg:items-start lg:text-start lg:px-0 lg:max-w-100">
          <h2 className="text-h2 text-text-color">ABOUT US</h2>
          <p className="text-paragraph text-center text-second-text-color w-60 mx-auto lg:text-start lg:w-auto lg:mx-0">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="bg-primary-color text-btn-text text-light-text-color px-10 py-4 rounded-md cursor-pointer">
            Get Quote Now
          </button>
        </div>
        <img
          src="assets/about_us/backgroundM.png"
          alt=""
          className="lg:w-1/2"
        />
      </div>
      <div className="flex flex-col items-center px-10 gap-10 py-15 lg:flex-row lg:px-0 lg:max-w-275 lg:w-full lg:mx-auto lg:justify-between">
        <div className="flex flex-col items-center px-10 gap-5 text-center lg:items-start lg:text-start lg:px-0 lg:max-w-100">
          <p className="text-danger-color text-paragraph">Problem trying</p>
          <h3 className="text-h3 text-text-color">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="text-paragraph text-second-text-color text-center lg:text-start lg:max-w-125">
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
      <WorkWithUs />
    </section>
  );
}
