import React from 'react';
import Stars from './Stars';
import ProductActions from './ProductActions';
const colorClasses = {
  primary: 'bg-primary-color',
  secondary: 'bg-secondary-color-1',
  alert: 'bg-alert-color',
  dark: 'bg-dark-background-color',
};
export default function ProductInfo({ product }) {
  const { title, rating, reviewCount, price, availability, summary, colors } =
    product;
  return (
    <div className="flex flex-col gap-5 lg:w-3/4 lg:pt-14">
      <div className="flex flex-col gap-2.5">
        <h4 className="text-text-color text-h4 font-bold">{title}</h4>
        <div className="flex items-center gap-2.5">
          <Stars rating={rating} />
          <span className="text-second-text-color text-h6">
            {reviewCount} Reviews
          </span>
        </div>
        <span className="text-h3 text-text-color">${price}</span>
        <span className="flex gap-1 text-h6">
          <span className=" text-second-text-color">Availability :</span>
          <span className="text-primary-color">{availability}</span>
        </span>
      </div>
      <p className="text-paragraph text-second-text-color">{summary}</p>
      <hr className="text-muted-color" />
      <div className="flex gap-2.5 pb-2.5">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-7.5 h-7.5 rounded-full ${colorClasses[color]}`}
          ></div>
        ))}
      </div>
      <ProductActions />
    </div>
  );
}
