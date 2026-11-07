import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import slugify from 'slugify';
import { FETCH_STATES } from '@/store/actions/productActions';

export default function ShopCategories() {
  const categories = useSelector((state) => state.product.categories);
  const fetchState = useSelector(
    (state) => state.product.categoriesFetchState,
  );
  const categoriesSorted = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  if (fetchState === FETCH_STATES.FAILED)
    return (
      <div className="py-6 px-10 bg-light-gray-1 lg:pt-0 lg:pb-12">
        <p className="text-alert-color text-h4 text-center py-10">
          Error loading categories
        </p>
      </div>
    );

  if (fetchState !== FETCH_STATES.FETCHED)
    return (
      <div className="flex flex-col items-center py-6 px-10 bg-light-gray-1 lg:pt-0 lg:pb-12">
        <div className="size-12 mt-10 rounded-full border-4 border-light-gray-2 border-t-primary-color animate-spin" />
        <p className="text-h4 text-second-text-color mt-4 text-center">
          Loading categories...
        </p>
      </div>
    );

  return (
    <div className="py-6 px-10 bg-light-gray-1 lg:pt-0 lg:pb-12">
      <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
        {categoriesSorted.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${slugify(category.title, { lower: true })}/${category.id}`}
            className="relative lg:flex-1 max-lg:last:odd:col-span-2 max-lg:last:odd:justify-self-center max-lg:last:odd:w-[calc(50%-0.625rem)]"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full aspect-3/4 object-cover"
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
