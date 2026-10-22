import React from 'react';
import { Link } from 'react-router';

export default function ContactPage() {
  return (
    <section className="flex flex-col py-28 px-16 gap-7.5 items-center lg:w-155 lg:mx-auto">
      <h2 className="text-h2 text-center text-text-color">
        Get answers to all of your questions.
      </h2>
      <p className="text-h4 text-center text-second-text-color">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </p>
      <button className="bg-primary-color text-btn-text text-light-text-color px-10 py-4 rounded-md cursor-pointer">
        CONTACT OUR COMPANY
      </button>
      <div className="flex w-full text-muted-color gap-9 justify-center">
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--twitter-fill] size-7.5"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[ant-design--facebook-filled] size-7.5"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--instagram-fill] size-7.5"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--linkedin-box-fill] size-7.5"></i>
        </Link>
      </div>
    </section>
  );
}
