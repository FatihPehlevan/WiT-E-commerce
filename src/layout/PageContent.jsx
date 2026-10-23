import { Routes, Route } from 'react-router';
import TeamPage from '@/pages/TeamPage';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import ContactPage from '@/pages/ContactPage';
import AboutUsPage from '@/pages/AboutUsPage';

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}
