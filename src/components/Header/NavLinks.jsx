import { NavLink } from 'react-router';
import { navLinks } from '@/data/data.js';
import ShopDropdown from '@/components/Header/ShopDropdown';

export default function NavLinks({ className = '', chevronClass = '' }) {
  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <div key={link.to} className="relative group">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? 'text-text-color' : 'text-second-text-color'}`
            }
          >
            {link.label}
            {link.hasDropdown && (
              <i
                className={`iconify-[akar-icons--chevron-down] size-4 ${chevronClass}`}
              ></i>
            )}
          </NavLink>
          {link.hasDropdown && <ShopDropdown />}
        </div>
      ))}
    </nav>
  );
}
