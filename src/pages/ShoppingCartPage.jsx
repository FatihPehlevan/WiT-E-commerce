import ShoppingCartHeader from '@/components/ShoppingCart/ShoppingCartHeader';
import ShoppingCartSummaryBox from '@/components/ShoppingCart/ShoppingCartSummaryBox';
import {
  changeIsChecked,
  changeCount,
  removeFromCart,
} from '@/store/actions/shoppingCartActions';
import { useDispatch, useSelector } from 'react-redux';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
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
            <div key={item.product.id} className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="includeInCart"
                name="includeInCart"
                checked={item.checked}
                onChange={() => dispatch(changeIsChecked(item.product.id))}
                className="size-4 accent-primary-color cursor-pointer"
              />
              <img
                src={item.product.images[0].url}
                className="w-24 h-32 shrink-0 object-cover rounded-md border border-light-gray-2"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-h5">{item.product.name}</p>
                <p className="text-paragraph">{item.product.description}</p>
                <p className="text-paragraph font-bold text-secondary-text-color-1">
                  {item.product.price} TL
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(changeCount(item.product.id, -1))}
                    className="p-2 text-btn-text bg-light-gray-1 cursor-pointer"
                  >
                    {item.count === 1 ? (
                      <i className="block iconify-[akar-icons--trash-can] size-6 lg:size-4" />
                    ) : (
                      <i className="block iconify-[akar-icons--minus] size-4" />
                    )}
                  </button>
                  <span className="text-btn-text px-2">{item.count}</span>
                  <button
                    onClick={() => dispatch(changeCount(item.product.id, 1))}
                    className="p-2 text-btn-text bg-light-gray-1 cursor-pointer"
                  >
                    <i className="block iconify-[akar-icons--plus] size-4" />
                  </button>
                  {item.count > 1 && (
                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="p-2 ml-4 text-alert-text-color bg-light-gray-1 cursor-pointer"
                    >
                      <i className="block iconify-[akar-icons--trash-can] size-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ShoppingCartSummaryBox total={total} />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
