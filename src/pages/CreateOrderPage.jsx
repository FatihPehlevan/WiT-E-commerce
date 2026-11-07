import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  calculateTotal,
  calculatePayable,
  setCart,
  setAddress,
  setReceiptAddress,
  setPayment,
} from '@/store/actions/shoppingCartActions';
import { createOrder } from '@/api/api';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [step, setStep] = useState('address');
  const [cvv, setCvv] = useState('');

  const isAddressReady =
    !!selectedAddress.id && (sameAsShipping || !!receiptAddress.id);
  const isPaymentReady = !!selectedCard.id && cvv.length === 3;

  const orderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      flushSync(() => navigate('/order-success', { replace: true }));
      dispatch(setCart(cart.filter((item) => !item.checked)));
      dispatch(setAddress({}));
      dispatch(setReceiptAddress({}));
      dispatch(setPayment({}));
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Siparişin alındı!');
    },
    onError: () => toast.error('Failed to create order'),
  });

  const handleOrder = () => {
    orderMutation.mutate({
      address_id: selectedAddress.id,
      order_date: new Date().toISOString().slice(0, 19),
      card_no: Number(selectedCard.card_no),
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: Number(cvv),
      price: Math.round(calculatePayable(total) * 100) / 100,
      products: cart
        .filter((item) => item.checked)
        .map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.name,
        })),
    });
  };

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
          onOrder={handleOrder}
          isOrdering={orderMutation.isPending}
        />
      </div>
    </div>
  );
}

export default CreateOrderPage;
