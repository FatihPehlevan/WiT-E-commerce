import { Routes, Route, Navigate, useLocation } from 'react-router';
import CreateOrderPage from '@/pages/CreateOrderPage';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import ContactPage from '@/pages/ContactPage';
import AboutUsPage from '@/pages/AboutUsPage';
import SignUpPage from '@/pages/SignUpPage';
import LoginPage from '@/pages/LoginPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage';
import { useSelector } from 'react-redux';
import { calculateTotal } from '@/store/actions/shoppingCartActions';

export default function PageContent() {
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.cart.cart);
  const total = calculateTotal(cart);
  const location = useLocation();
  const isLoggedIn = user.name || localStorage.getItem('userToken');
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route
        path="/shop/:gender/:categoryName/:categoryId"
        element={<ShopPage />}
      />
      <Route
        path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
        element={<ProductDetailsPage />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/shoppingCart" element={<ShoppingCartPage />} />
      <Route
        path="/create-order"
        element={
          isLoggedIn ? (
            total > 0 ? (
              <CreateOrderPage />
            ) : (
              <Navigate to="/shoppingCart" replace state={{ from: location }} />
            )
          ) : (
            <Navigate to="/login" replace state={{ from: location }} />
          )
        }
      />
    </Routes>
  );
}
