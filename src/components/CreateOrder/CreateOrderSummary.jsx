import { useState } from 'react';
import {
  SHIPPING_FEE,
  DISCOUNT,
  calculatePayable,
} from '@/store/actions/shoppingCartActions';

function CreateOrderSummary({
  total,
  step,
  isStepReady,
  onContinue,
  onOrder,
  isOrdering,
}) {
  const [checked, setChecked] = useState(false);
  const isAddressStep = step === 'address';
  let roundedTotal = Math.round(total * 100) / 100 + 0;
  return (
    <div className="flex flex-col lg:shrink-0 gap-4 bg-light-gray-1 px-4 py-4 rounded-sm lg:min-w-60 lg:self-start">
      <h3 className="text-primary-color text-h5">ÖDENECEK TUTAR</h3>
      <span className="text-h3">
        {calculatePayable(total).toFixed(2)} TL
      </span>
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          onChange={() => {
            setChecked(!checked);
          }}
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
        onClick={isAddressStep ? onContinue : onOrder}
        className="flex items-center justify-center gap-3 py-2.5 rounded-md bg-primary-color text-btn-text text-light-text-color cursor-pointer hover:bg-hover-color disabled:bg-muted-color disabled:cursor-not-allowed"
        disabled={
          isAddressStep ? !isStepReady : !checked || !isStepReady || isOrdering
        }
      >
        {isAddressStep
          ? 'Kaydet ve Devam Et'
          : isOrdering
            ? 'Sipariş Veriliyor'
            : 'Siparişi Onayla'}
        {isOrdering && (
          <span className="size-5 rounded-full border-2 border-light-text-color border-t-transparent animate-spin" />
        )}
      </button>
      <div className="flex flex-col gap-2">
        <span className="text-text-color text-h6 flex justify-between">
          <span>Ürünler</span>
          <span>{roundedTotal.toFixed(2)} TL</span>
        </span>
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>Kargo</span>
            <span>{SHIPPING_FEE.toFixed(2)} TL</span>
          </span>
        )}
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>İndirim</span>
            <span className="text-secondary-color-1">-{DISCOUNT.toFixed(2)} TL</span>
          </span>
        )}
      </div>
    </div>
  );
}
export default CreateOrderSummary;
