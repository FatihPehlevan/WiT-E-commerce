const colorClasses = {
  green: 'bg-secondary-color-1',
  blue: 'bg-primary-color',
  orange: 'bg-alert-color',
  lightGreen: 'bg-success-color',
  lightBlue: 'bg-blue-button',
  lightOrange: 'bg-orange-button',
};

export default function ClassicProductSlide({ product }) {
  const { color, btnColor, topTitle, title, summary, price, imgSrc } = product;
  return (
    <div
      className={`${colorClasses[color]} flex flex-col  pt-52 flex-[0_0_100%] min-w-0`}
    >
      <div className="flex flex-col gap-9 text-center items-center text-light-text-color px-10">
        <h4 className="text-h4">{topTitle}</h4>
        <h2 className="text-h2">{title}</h2>
        <p className="text-h4 w-71.75">{summary}</p>
        <span className="text-h3 ">${price}</span>
      </div>
      <button
        className={`${colorClasses[btnColor]} text-btn-text text-light-text-color px-10 py-3.75 mt-5 mb-7.5 w-max rounded-md mx-auto cursor-pointer`}
      >
        ADD TO CART
      </button>
      <img src={imgSrc} alt="" />
    </div>
  );
}
