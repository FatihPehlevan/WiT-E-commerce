import { useSelector } from 'react-redux';
import { calculateTotal } from '@/store/actions/shoppingCartActions';
import CreateOrderSummary from '@/components/CreateOrder/CreateOrderSummary';

function CreateOrderPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = calculateTotal(cart);

  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:justify-between lg:max-w-275 lg:mx-auto">
      <div className="flex w-full justify-between py-6">
        <div>Order Details</div>
        <CreateOrderSummary total={total} />
      </div>
    </div>
  );
}

export default CreateOrderPage;
