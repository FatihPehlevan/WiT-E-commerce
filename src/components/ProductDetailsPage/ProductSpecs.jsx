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
      <img src="/assets/single_product/alt1.jpg" alt="" />
      {activeTab === 'description' && <Description description={description} />}
      {activeTab === 'additionalInfo' && (
        <AdditionalInfo additionalInfo={additionalInfo} />
      )}
      {activeTab === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
}
