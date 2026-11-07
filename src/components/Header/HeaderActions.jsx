import LoginRegister from '@/components/Header/LoginRegister';
import Favorites from '@/components/Header/Favorites';
import CartDropdown from './CartDropdown';
import FavoritesDropdown from './FavoritesDropdown';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function HeaderActions({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.client.favorites);
  return (
    <div className="flex items-center gap-6 lg:text-primary-color lg:text-link">
      <span className="hidden lg:flex">
        <LoginRegister />
      </span>
      <button className="flex items-center justify-center">
        <i className="iconify-[lucide--search] size-6 lg:size-4" />
      </button>
      <div className="relative group">
        <button
          onClick={() => navigate('/shoppingCart')}
          aria-label={`Sepet, ${cart.length} ürün`}
          className="relative flex items-center justify-center cursor-pointer"
        >
          <i className="iconify-[lucide--shopping-cart] size-6 lg:size-4" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2.5 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-danger-color text-light-text-color text-[10px] font-bold leading-none">
              {cart.length}
            </span>
          )}
        </button>
        {cart.length !== 0 && <CartDropdown />}
      </div>

      <div className="relative group hidden lg:flex">
        <Favorites
          className="flex gap-1.25 items-center justify-center cursor-pointer"
          iconSize="size-4"
        />
        {favorites.length !== 0 && <FavoritesDropdown />}
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center lg:hidden"
      >
        <i className="iconify-[boxicons--menu-right] size-6" />
      </button>
    </div>
  );
}
