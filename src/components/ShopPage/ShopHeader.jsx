export default function ShopHeader() {
  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto ">
      <h3 className="text-h3 py-6">Shop</h3>
      <div className="py-2.5 flex flex-row gap-4 items-center">
        <span className="text-link">Home</span>
        <i className="iconify-[akar-icons--chevron-right] text-muted-text-color"></i>
        <span className="text-second-text-color text-h6">Shop</span>
      </div>
    </div>
  );
}
