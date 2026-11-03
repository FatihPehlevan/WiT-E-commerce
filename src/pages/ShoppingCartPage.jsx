import { useSelector } from 'react-redux';
import ShoppingCartHeader from '@/components/ShoppingCart/ShoppingCartHeader';
import ShoppingCartSummaryBox from '@/components/ShoppingCart/ShoppingCartSummaryBox';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:justify-between lg:max-w-275 lg:mx-auto">
      <ShoppingCartHeader cart={cart} />
      <div className="flex w-full justify-between py-6">
        <div></div>
        <ShoppingCartSummaryBox total={total} />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
