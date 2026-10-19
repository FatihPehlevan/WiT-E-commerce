import { Routes, Route } from 'react-router';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}
