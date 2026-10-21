import { Description } from './Description';
import { ProductSpecsHeader } from './ProductSpecsHeader';
import { useState } from 'react';
import { singleProduct } from '@/data/data';
import AdditionalInfo from './AdditionalInfo';
import Reviews from './Reviews';

export default function ProductSpecs() {
  const [activeTab, setActiveTab] = useState('description');
  const { description, additionalInfo, reviews, reviewCount } = singleProduct;
  return (
    <div className="flex flex-col gap-10 px-10 py-10">
      <ProductSpecsHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        reviewCount={reviewCount}
      />
      <div className="flex flex-col gap-10 lg:flex-row lg:max-w-275 lg:w-full lg:mx-auto">
        <img
          src="/assets/single_product/alt1.jpg"
          alt=""
          className="lg:w-1/2 lg:shrink-0"
        />
        {activeTab === 'description' && (
          <Description description={description} />
        )}
        {activeTab === 'additionalInfo' && (
          <AdditionalInfo additionalInfo={additionalInfo} />
        )}
        {activeTab === 'reviews' && <Reviews reviews={reviews} />}
      </div>
    </div>
  );
}
