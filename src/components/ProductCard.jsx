const colorClasses = {
  primary: 'bg-primary-color',
  secondary: 'bg-secondary-color-1',
  alert: 'bg-alert-color',
  dark: 'bg-dark-background-color',
};

export default function ProductCard({ product }) {
  const { src, title, subTitle, price, salePrice, colors } = product;
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <img src={src} alt="" />
      <h5 className="text-h5 text-text-color pt-6">{title}</h5>
      <h6 className="text-link text-second-text-color">{subTitle}</h6>
      <div className="flex gap-1.5 text-h5">
        <span className="text-second-text-color">${price}</span>{' '}
        <span className="text-secondary-color-1">${salePrice} </span>
      </div>
      <div className="flex gap-1.5 pb-9">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${colorClasses[color]}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
