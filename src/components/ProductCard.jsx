const colorClasses = {
  primary: 'bg-primary-color',
  secondary: 'bg-secondary-color-1',
  alert: 'bg-alert-color',
  dark: 'bg-dark-background-color',
};

export default function ProductCard({ product }) {
  const { src, title, subTitle, price, salePrice, colors } = product;
  return (
    <div>
      <img src={src} alt="" />
      <h5 className="text-h5 text-text-color">{title}</h5>
      <h6 className="text-link text-second-text-color">{subTitle}</h6>
      <span>{price}</span> <span>{salePrice} </span>
      <div className="flex gap-1.5">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${colorClasses[color]}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
