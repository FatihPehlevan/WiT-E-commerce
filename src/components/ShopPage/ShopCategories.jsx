import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function ShopCategories() {
  const categories = useSelector((state) => state.product.categories);
  const categoriesSorted = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <div className="py-6 px-10 bg-light-gray-1 lg:pt-0 lg:pb-12">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
        {categoriesSorted.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${category.code.split(':')[1]}/${category.id}`}
            className="relative aspect-3/4 lg:flex-1"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col gap-3 absolute inset-0 justify-center items-center text-light-text-color text-h5 bg-black/30 hover:bg-black/50 transition-colors duration-250 cursor-pointer">
              {category.gender === 'k' ? <p>Kadın</p> : <p>Erkek</p>}
              <h5>{category.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
