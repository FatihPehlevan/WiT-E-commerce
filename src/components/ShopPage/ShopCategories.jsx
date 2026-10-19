import React from 'react';
import { shopCategories } from '@/data/data';

export default function ShopCategories() {
  return (
    <div className="py-6 px-10 bg-light-gray-1 lg:pt-0 lg:pb-12">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
        {shopCategories.map((category) => (
          <div key={category.id} className="relative">
            <img src={category.imgSrc} alt={category.name} className="w-full" />
            <div className="flex flex-col gap-3 absolute inset-0 justify-center items-center text-light-text-color">
              <h5 className="text-h5">{category.name}</h5>
              <p className="h-6">{category.piece} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
