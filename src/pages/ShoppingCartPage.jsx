import ShoppingCartHeader from '@/components/ShoppingCart/ShoppingCartHeader';
import ShoppingCartSummaryBox from '@/components/ShoppingCart/ShoppingCartSummaryBox';
import ItemCard from '@/components/ShoppingCart/ItemCard';
import { useSelector } from 'react-redux';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  if (cart.length === 0)
    return (
      <div className="flex flex-col gap-4 items-center lg:py-20">
        <i className="iconify-[lucide--shopping-cart] text-second-text-color size-6 lg:size-10" />
        <p className="text-center text-h3">Şu an sepetin boş</p>
      </div>
    );
  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:justify-between lg:max-w-275 lg:mx-auto">
      <ShoppingCartHeader cart={cart} />
      <div className="flex w-full justify-between py-6">
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <ItemCard key={item.product.id} item={item} />
          ))}
        </div>
        <ShoppingCartSummaryBox total={total} />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
