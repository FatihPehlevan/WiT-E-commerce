import { useState } from 'react';
import Topbar from '@/components/Header/Topbar';
import HeaderActions from '@/components/Header/HeaderActions';
import NavLinks from '@/components/Header/NavLinks';
import LoginRegister from '@/components/Header/LoginRegister';
import Favorites from '@/components/Header/Favorites';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <Topbar />
      <div className="py-9 px-9 lg:py-6">
        <div className="flex justify-between text-text-color">
          <div className="flex lg:gap-28.25 lg:items-center">
            <span className="text-h3">Bandage</span>
            <NavLinks className="hidden lg:flex lg:flex-row gap-4 lg:text-link items-center" />
          </div>
          <HeaderActions
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
        {isMenuOpen && (
          <>
            <NavLinks
              className="flex flex-col gap-7.5 pt-17 items-center text-mobile-menu lg:hidden"
              chevronClass="hidden"
            />
            <div className="flex flex-col gap-7.5 pt-7.5 text-primary-color text-mobile-menu lg:hidden">
              <LoginRegister />
              <Favorites
                className="flex gap-1.25 items-center justify-center"
                iconSize="size-7"
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
