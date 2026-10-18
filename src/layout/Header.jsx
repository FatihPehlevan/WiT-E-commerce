import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '@/data/data.js';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      {/* blue strip */}
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
          <i className="iconify-[akar-icons--facebook-fill] size-4"></i>
          <i className="iconify-[akar-icons--youtube-fill] size-4"></i>
          <i className="iconify-[akar-icons--instagram-fill] size-4"></i>
          <i className="iconify-[akar-icons--twitter-fill] size-4"></i>
        </div>
      </div>

      <div className="py-9 px-9 mx-auto lg:py-6">
        <div className="flex justify-between text-text-color">
          <span className="text-h3">Bandage</span>
          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center">
              <i className="iconify-[lucide--search] size-6" />
            </button>
            <button className="flex items-center justify-center">
              <i className="iconify-[lucide--shopping-cart] size-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center"
            >
              <i className="iconify-[boxicons--menu-right] size-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <>
            <nav className="flex flex-col gap-7.5 pt-17 items-center lg:flex lg:flex-row">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-mobile-menu ${isActive ? 'text-text-color' : 'text-second-text-color'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-7.5 pt-7.5 text-primary-color text-mobile-menu">
              <div className="flex justify-center gap-2">
                <button className="flex gap-1 items-center justify-center">
                  <i className="iconify-[boxicons--user]"></i>Login
                </button>
                <span>/</span>
                <button>Register</button>
              </div>
              <button className="flex gap-1.25 items-center justify-center">
                <i className="iconify-[akar-icons--heart]"></i>
                <span className="text-small">1</span>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
