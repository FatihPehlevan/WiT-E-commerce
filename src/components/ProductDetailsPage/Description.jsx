import React from 'react';
export function Description({ description }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-h3 text-text-color">About This Product</h3>
        <p className="text-paragraph text-second-text-color">{description}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-h3 text-text-color">Features</h3>
          <p className="text-paragraph text-second-text-color">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-h3 text-text-color">What's Included</h3>
          <p className="text-paragraph text-second-text-color">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </div>
  );
}
