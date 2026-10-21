import React from 'react';
export function ProductSpecsHeader({ activeTab, setActiveTab, reviewCount }) {
  return (
    <div className="flex flex-col gap-2.5 justify-between text-link text-second-text-color lg:w-full lg:flex-row lg:max-w-275 lg:mx-auto">
      <button
        className={` ${activeTab === 'description' ? 'text-text-color underline underline-offset-2' : ''}`}
        onClick={() => setActiveTab('description')}
      >
        Description
      </button>
      <button
        className={` ${activeTab === 'additionalInfo' ? 'text-text-color underline underline-offset-2' : ''}`}
        onClick={() => setActiveTab('additionalInfo')}
      >
        Additional Information
      </button>
      <button
        className={` ${activeTab === 'reviews' ? 'text-text-color underline underline-offset-2' : ''}`}
        onClick={() => setActiveTab('reviews')}
      >
        Reviews <span className="text-secondary-color-1">({reviewCount})</span>
      </button>
    </div>
  );
}
