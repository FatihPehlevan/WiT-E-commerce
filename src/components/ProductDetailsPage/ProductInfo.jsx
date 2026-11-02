import React from 'react';
import Stars from './Stars';
import ProductActions from './ProductActions';
const reviewCount = 4;

const setAvailability = (stock) => {
  let availability;
  if (stock <= 0) availability = 'Out of Stock';
  else if (stock < 10) availability = `Only ${stock} left`;
  else availability = 'In Stock';
  return availability;
};

export default function ProductInfo({ product }) {
  const { name, rating, price, stock, description } = product;
  const availability = setAvailability(stock);
  return (
    <div className="flex flex-col gap-5 lg:w-3/4 lg:pt-14">
      <div className="flex flex-col gap-2.5">
        <h4 className="text-text-color text-h4 font-bold">{name}</h4>
        <div className="flex items-center gap-2.5">
          <Stars rating={rating} />
          <span className="text-second-text-color text-h6">
            {reviewCount} Reviews
          </span>
        </div>
        <span className="text-h3 text-text-color">${price}</span>
        <span
          className={`${stock > 0 && stock < 10 ? 'text-alert-color' : 'text-primary-color'} text-h6`}
        >
          {availability}
        </span>
      </div>
      <p className="text-paragraph text-second-text-color">{description}</p>
      <hr className="text-muted-color" />
      <ProductActions product={product} />
    </div>
  );
}
