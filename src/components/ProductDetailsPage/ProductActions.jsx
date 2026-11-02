import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/actions/shoppingCartActions';
import { toast } from 'react-toastify';

export default function ProductActions({ product }) {
  const dispatch = useDispatch();
  const handleAddingToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div className="flex gap-2.5 items-center justify-between lg:justify-start lg:gap-5">
      <button className="bg-primary-color text-light-text-color px-5 py-2.5 rounded-md text-h6">
        Select Options
      </button>
      <div className="flex gap-2.5">
        <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer">
          <i className="iconify-[akar-icons--heart] text-text-color size-5"></i>
        </button>
        <button
          onClick={handleAddingToCart}
          className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer"
        >
          <i className="iconify-[lucide--shopping-cart] text-text-color size-5"></i>
        </button>
        <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer">
          <i className="iconify-[akar-icons--eye-open] text-text-color size-5"></i>
        </button>
      </div>
    </div>
  );
}
