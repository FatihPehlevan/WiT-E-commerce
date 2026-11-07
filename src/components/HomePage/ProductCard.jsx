import { Link } from 'react-router';
import Stars from '../ProductDetailsPage/Stars';
import { useSelector } from 'react-redux';
import { getProductUrl } from '@/utils/getProductUrl';

export default function ProductCard({ product }) {
  const categories = useSelector((state) => state.product.categories);
  const { images, name, price, rating, stock, sell_count } = product;
  return (
    <Link
      to={getProductUrl(product, categories)}
      className="flex flex-col gap-2.5 items-center"
    >
      <img
        src={images[0].url}
        alt={name}
        className="w-full aspect-3/4 object-cover hover:brightness-75 transition duration-300"
      />
      {/* className="lg:w-60 lg:h-106.75 lg:object-cover" */}
      <h5 className="text-h5 text-text-color pt-6">{name}</h5>
      <div className="flex flex-col gap-3 text-h5 items-center">
        <span className="text-second-text-color">${price}</span>{' '}
        <Stars rating={rating} />
        {stock > 0 && stock < 10 && (
          <span className="text-alert-color">Only {stock} left</span>
        )}
        {stock === 0 && <span>Out of stock</span>}
        <span className="text-second-text-color">{sell_count} sold</span>
      </div>
    </Link>
  );
}
