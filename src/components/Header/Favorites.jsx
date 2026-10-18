export default function Favorites({ className = '', iconSize = 'size-4' }) {
  return (
    <button className={className}>
      <i className={`iconify-[akar-icons--heart] ${iconSize}`}></i>
      <span className="text-small">1</span>
    </button>
  );
}
