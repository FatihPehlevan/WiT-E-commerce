import { useSelector } from 'react-redux';

export default function Favorites({ className = '', iconSize = 'size-4' }) {
  const favoriteCount = useSelector((state) => state.client.favorites.length);

  return (
    <button className={className}>
      <i className={`iconify-[akar-icons--heart] ${iconSize}`}></i>
      <span className="text-small">{favoriteCount}</span>
    </button>
  );
}
