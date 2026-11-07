import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/actions/shoppingCartActions';
import { toggleFavorite } from '@/store/actions/clientActions';
import { toast } from 'react-toastify';

export default function ProductActions({ product }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.client.favorites.some((favorite) => favorite.id === product.id),
  );
  const countInCart = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.product.id === product.id)?.count ??
      0,
  );

  const handleAddingToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
    toast.success(
      isFavorite
        ? `${product.name} removed from favorites`
        : `${product.name} added to favorites`,
    );
  };
  return (
    <div className="flex gap-2.5 items-center justify-between lg:justify-start lg:gap-5">
      <button className="bg-primary-color text-light-text-color px-5 py-2.5 rounded-md text-h6">
        Select Options
      </button>
      <div className="flex gap-2.5">
        <button
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
          className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer"
        >
          <i
            className={
              isFavorite
                ? 'iconify-[mdi--heart] text-danger-color size-5'
                : 'iconify-[akar-icons--heart] text-text-color size-5'
            }
          ></i>
        </button>
        <button
          onClick={handleAddingToCart}
          aria-label={
            countInCart > 0
              ? `Add to cart, ${countInCart} in cart`
              : 'Add to cart'
          }
          className="relative size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer"
        >
          <i
            className={
              countInCart > 0
                ? 'iconify-[mdi--cart] text-primary-color size-5'
                : 'iconify-[lucide--shopping-cart] text-text-color size-5'
            }
          ></i>
          {countInCart > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-primary-color text-light-text-color text-[10px] font-bold leading-none">
              {countInCart}
            </span>
          )}
        </button>
        <button className="size-10 rounded-full border border-muted-color bg-white flex items-center justify-center cursor-pointer">
          <i className="iconify-[akar-icons--eye-open] text-text-color size-5"></i>
        </button>
      </div>
    </div>
  );
}
