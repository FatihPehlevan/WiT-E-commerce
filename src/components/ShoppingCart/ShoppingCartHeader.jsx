import { useDispatch } from 'react-redux';
import { emptyCart } from '@/store/actions/shoppingCartActions';

function ShoppingCartHeader({ cart }) {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full justify-between items-center gap-4 border-b border-[#e5e5e5] pb-6">
      <h3 className="text-h5">
        Sepetim{' '}
        <span className="text-second-text-color">({cart.length} ürün)</span>
      </h3>
      <button
        onClick={() => dispatch(emptyCart())}
        aria-label="Ürünleri sil"
        className="cursor-pointer"
      >
        <span className="flex items-center gap-2 text-alert-color text-h5">
          <span className="hidden sm:inline">Ürünleri sil</span>
          <i className="iconify-[akar-icons--trash-can] size-6 lg:size-4" />
        </span>
      </button>
    </div>
  );
}

export default ShoppingCartHeader;
