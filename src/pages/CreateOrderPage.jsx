import { useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateTotal } from '@/store/actions/shoppingCartActions';
import AddressStep from '@/components/CreateOrder/AddressStep';
import CheckoutTabs from '@/components/CreateOrder/CheckoutTabs';
import CreateOrderSummary from '@/components/CreateOrder/CreateOrderSummary';
import PaymentStep from '@/components/CreateOrder/PaymentStep';

function CreateOrderPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = calculateTotal(cart);
  const selectedAddress = useSelector((state) => state.cart.address);
  const receiptAddress = useSelector((state) => state.cart.receiptAddress);
  const selectedCard = useSelector((state) => state.cart.payment);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [step, setStep] = useState('address');
  const [cvv, setCvv] = useState('');

  const isAddressReady =
    !!selectedAddress.id && (sameAsShipping || !!receiptAddress.id);
  const isPaymentReady = !!selectedCard.id && cvv.length === 3;

  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:justify-between lg:max-w-275 lg:mx-auto">
      <div className="flex w-full justify-between py-6">
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <CheckoutTabs
            step={step}
            setStep={setStep}
            selectedAddress={selectedAddress}
            isAddressReady={isAddressReady}
          />

          {step === 'address' ? (
            <AddressStep
              sameAsShipping={sameAsShipping}
              setSameAsShipping={setSameAsShipping}
            />
          ) : (
            <PaymentStep total={total} cvv={cvv} setCvv={setCvv} />
          )}
        </div>
        <CreateOrderSummary
          total={total}
          step={step}
          isStepReady={step === 'address' ? isAddressReady : isPaymentReady}
          onContinue={() => setStep('payment')}
        />
      </div>
    </div>
  );
}

export default CreateOrderPage;
