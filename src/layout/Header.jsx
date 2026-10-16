import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '@/data/data.js';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="pt-10 max-w-6xl px-10 mx-auto">
      <div className="hidden lg:flex">Blue strip</div>
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
          <nav className="flex flex-col gap-7.5 pt-17 items-center lg:hidden">
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
    </header>
  );
}
