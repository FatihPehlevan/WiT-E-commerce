import { footerContent } from '@/data/data';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-18">
      <div className="bg-light-gray-1">
        <div className="flex flex-col gap-6 p-10 lg:flex-row lg:justify-between lg:items-center lg:max-w-360 lg:mx-auto lg:px-47">
          <h3 className="text-h3 text-text-color">Bandage</h3>
          <div className="flex gap-5 text-primary-color">
            <i className="iconify-[akar-icons--facebook-fill] size-6"></i>
            <i className="iconify-[akar-icons--instagram-fill] size-6"></i>
            <i className="iconify-[akar-icons--twitter-fill] size-6"></i>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7.5 px-10 lg:flex-row lg:items-start lg:px-47 lg:max-w-360 lg:w-full lg:mx-auto lg:justify-between">
        {footerContent.map((content, index) => (
          <div key={index} className="flex flex-col">
            <h5 className="text-h5 text-text-color pb-5">{content.title}</h5>
            {content.links.map((link, index) => (
              <Link
                className="pb-2.5 text-link text-second-text-color"
                key={index}
                to={link.to}
              >
                {link.name}{' '}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col">
          <h5 className="text-h5 text-text-color pb-5">Get in Touch</h5>
          <form className="flex w-full border-2 rounded-md border-[#e6e6e6]">
            <input
              className="bg-[#f9f9f9] flex-1 text-second-text-color text-form h-14 pl-5 placeholder:text-second-text-color"
              type="email"
              placeholder="Your Email"
            />
            <button className="text-light-text-color bg-primary-color text-form h-14 px-5.5">
              Subscribe
            </button>
          </form>
          <p className="text-form text-[14px] text-second-text-color pl-0.5">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
      <div className="bg-light-gray-1 py-6 ">
        <h6 className="text-h6 text-second-text-color text-center lg:text-left lg:max-w-360 lg:mx-auto lg:px-47">
          Made with Love by <br className="lg:hidden" /> Finland All Rights
          Reserved
        </h6>
      </div>
    </footer>
  );
}
