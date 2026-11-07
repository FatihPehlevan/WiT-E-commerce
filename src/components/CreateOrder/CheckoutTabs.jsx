function CheckoutTabs({ step, setStep, selectedAddress, isAddressReady }) {
  const isAddressStep = step === 'address';

  return (
    <div className="grid grid-cols-2 rounded-lg border border-light-gray-2 overflow-hidden">
      <button
        type="button"
        onClick={() => setStep('address')}
        disabled={isAddressStep}
        className={`group flex flex-col gap-2 p-4 lg:p-5 text-left border-b-4 cursor-pointer disabled:cursor-default ${
          isAddressStep
            ? 'border-primary-color'
            : 'border-light-gray-2 bg-light-gray-1'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-2">
          <h3
            className={`text-h5 ${isAddressStep ? 'text-primary-color' : ''}`}
          >
            Adres Bilgileri
          </h3>
          {!isAddressStep && (
            <span className="underline font-bold text-paragraph group-hover:text-primary-color">
              Değiştir
            </span>
          )}
        </div>
        {isAddressStep ? (
          <p className="hidden lg:block text-paragraph text-second-text-color">
            Teslimat ve fatura adresini seçin.
          </p>
        ) : (
          <>
            <span className="font-bold">{selectedAddress.title}</span>
            <p className="hidden lg:block text-paragraph text-second-text-color">
              {selectedAddress.address} {selectedAddress.neighborhood}{' '}
              {selectedAddress.district}/{selectedAddress.city}
            </p>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={() => setStep('payment')}
        disabled={!isAddressReady}
        className={`flex flex-col gap-2 p-4 lg:p-5 text-left border-b-4 border-l border-l-light-gray-2 cursor-pointer disabled:cursor-not-allowed ${
          isAddressStep
            ? 'border-b-light-gray-2 bg-light-gray-1'
            : 'border-b-primary-color'
        }`}
      >
        <h3
          className={`text-h5 ${isAddressStep ? '' : 'text-primary-color'}`}
        >
          Ödeme Seçenekleri
        </h3>
        <p className="hidden lg:block text-paragraph text-second-text-color">
          Banka/Kredi Kartı ile ödemenizi güvenle yapabilirsiniz.
        </p>
      </button>
    </div>
  );
}

export default CheckoutTabs;
