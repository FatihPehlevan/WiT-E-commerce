import LoginRegister from '@/components/Header/LoginRegister';
import Favorites from '@/components/Header/Favorites';
import CartDropdown from './CartDropdown';
export default function HeaderActions({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="flex items-center gap-6 lg:text-primary-color lg:text-link">
      <span className="hidden lg:flex">
        <LoginRegister />
      </span>
      <button className="flex items-center justify-center">
        <i className="iconify-[lucide--search] size-6 lg:size-4" />
      </button>
      <div className="relative group">
        <button className="flex items-center justify-center cursor-pointer">
          <i className="iconify-[lucide--shopping-cart] size-6 lg:size-4" />
        </button>
        <CartDropdown />
      </div>

      <Favorites
        className="hidden lg:flex gap-1.25 items-center justify-center"
        iconSize="size-4"
      />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center lg:hidden"
      >
        <i className="iconify-[boxicons--menu-right] size-6" />
      </button>
    </div>
  );
}
