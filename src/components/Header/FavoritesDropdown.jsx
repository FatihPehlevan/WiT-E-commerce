import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { toggleFavorite } from '@/store/actions/clientActions';
import { getProductUrl } from '@/utils/getProductUrl';

function FavoritesDropdown() {
  const favorites = useSelector((state) => state.client.favorites);
  const categories = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();

  return (
    <div className="absolute top-full right-0 w-96 z-10 hidden pt-4 lg:group-hover:block">
      <div className="flex flex-col bg-light-background-color border border-light-gray-2 rounded-md shadow-lg text-text-color">
        <span className="px-5 pt-4 pb-3 text-h6">
          Favorilerim ({favorites.length} ürün)
        </span>
        <div className="flex flex-col max-h-80 overflow-y-auto">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 px-5 py-4 border-t border-light-gray-2"
            >
              <Link
                to={getProductUrl(product, categories)}
                className="flex gap-4 flex-1 group/item"
              >
                <img
                  src={product.images[0].url}
                  alt=""
                  className="w-20 h-24 shrink-0 object-cover rounded-md border border-light-gray-2"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-paragraph text-text-color line-clamp-2 group-hover/item:text-primary-color">
                    {product.name}
                  </span>
                  <span className="text-h6 text-secondary-color-1">
                    $ {product.price}
                  </span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => dispatch(toggleFavorite(product))}
                aria-label={`Remove ${product.name} from favorites`}
                className="self-start cursor-pointer text-danger-color hover:opacity-70"
              >
                <i className="iconify-[mdi--heart] size-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesDropdown;
