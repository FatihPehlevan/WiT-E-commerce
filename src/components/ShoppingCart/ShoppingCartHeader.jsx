function ShoppingCartHeader({ cart }) {
  return (
    <div className="flex w-full justify-between border-b border-[#e5e5e5] pb-6">
      <h3 className="text-h5">
        Sepetim{' '}
        <span className="text-second-text-color">({cart.length} ürün)</span>
      </h3>
      <button className="cursor-pointer">
        <span className="flex items-center gap-2 text-alert-color text-h5">
          <span>Ürünleri sil</span>
          <i className="iconify-[akar-icons--trash-can] size-6 lg:size-4" />
        </span>
      </button>
    </div>
  );
}

export default ShoppingCartHeader;
