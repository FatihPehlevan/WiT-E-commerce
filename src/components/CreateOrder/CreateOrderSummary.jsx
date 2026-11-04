const kargo = (49.9).toFixed(2);
const indirim = (19.9).toFixed(2);

function CreateOrderSummary({ total }) {
  let roundedTotal = Math.round(total * 100) / 100 + 0;
  return (
    <div className="flex flex-col shrink-0 gap-4 bg-light-gray-1 px-4 py-4 rounded-sm lg:min-w-60 lg:self-start">
      <h3 className="text-primary-color text-h5">ÖDENECEK TUTAR</h3>
      <span className="text-h3">
        {(total + Number(kargo) - Number(indirim)).toFixed(2)} TL
      </span>
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          className="cursor-pointer size-5 accent-primary-color"
        />
        <label
          htmlFor="agreement"
          className="cursor-pointer select-none lg:max-w-60 text-paragraph"
        >
          <span className="font-bold">Ön bilgilendirme formu</span>'nu ve
          <span className="font-bold"> Mesafeli satış sözleşmesi</span>'ni
          onaylıyorum.
        </label>
      </span>
      <button
        onClick={() => console.log('Order')}
        className="py-2.5 rounded-md bg-primary-color text-btn-text text-light-text-color cursor-pointer hover:bg-hover-color"
      >
        Siparişi Onayla
      </button>
      <div className="flex flex-col gap-2">
        <span className="text-text-color text-h6 flex justify-between">
          <span>Ürünler</span>
          <span>{roundedTotal.toFixed(2)} TL</span>
        </span>
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>Kargo</span>
            <span>{kargo} TL</span>
          </span>
        )}
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>İndirim</span>
            <span className="text-secondary-color-1">-{indirim} TL</span>
          </span>
        )}
      </div>
    </div>
  );
}
export default CreateOrderSummary;
