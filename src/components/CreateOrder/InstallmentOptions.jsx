const installmentCounts = [1, 3, 6, 9];

function InstallmentOptions({ amount, selected, onSelect }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-h4">Taksit Seçenekleri</h3>
        <p className="text-paragraph text-second-text-color">
          Kartınıza uygun taksit seçeneğini seçiniz.
        </p>
      </div>
      <div className="flex flex-col rounded-lg border border-light-gray-2 overflow-hidden">
        <div className="grid grid-cols-2 px-5 py-3 bg-light-gray-1 font-bold">
          <span>Taksit Sayısı</span>
          <span>Aylık Ödeme</span>
        </div>
        {installmentCounts.map((count) => (
          <label
            key={count}
            className={`grid grid-cols-2 items-center px-5 py-3 border-t border-light-gray-2 cursor-pointer hover:bg-light-gray-1 ${
              selected === count ? 'text-primary-color font-bold' : ''
            }`}
          >
            <span className="flex items-center gap-2">
              <input
                type="radio"
                name="installment"
                checked={selected === count}
                onChange={() => onSelect(count)}
                className="size-5 accent-primary-color cursor-pointer"
              />
              {count === 1 ? 'Tek Çekim' : `${count} Taksit`}
            </span>
            <span>{(amount / count).toFixed(2)} TL</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default InstallmentOptions;
