import { Link } from 'react-router';

export default function Topbar() {
  return (
    <div className="hidden lg:flex justify-between bg-dark-background-color text-light-text-color py-5 text-h6 px-9">
      <div className="flex gap-7.5 items-center ">
        <div className="flex items-center gap-1.5">
          <i className="iconify-[akar-icons--phone] size-4"></i>
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-1.5">
          <i className="iconify-[clarity--email-line] size-4"></i>
          <span>michelle.rivera@example.com</span>
        </div>
      </div>
      <span>Follow us and get a chance to win 80% off!</span>
      <div className="flex items-center gap-4">
        <span>Follow Us :</span>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--facebook-fill] size-4"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--youtube-fill] size-4"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--instagram-fill] size-4"></i>
        </Link>
        <Link className="cursor-pointer">
          <i className="iconify-[akar-icons--twitter-fill] size-4"></i>
        </Link>
      </div>
    </div>
  );
}
