import { useSelector, useDispatch } from 'react-redux';
import {
  calculateTotal,
  setAddress,
} from '@/store/actions/shoppingCartActions';
import AddressCard from '@/components/CreateOrder/AddressCard';
import CreateOrderSummary from '@/components/CreateOrder/CreateOrderSummary';
import NewAddressForm from '@/components/CreateOrder/NewAddressForm';
import { useAddresses } from '@/hooks/useAddresses';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAddress } from '@/api/api';
import { toast } from 'react-toastify';

function CreateOrderPage() {
  const cart = useSelector((state) => state.cart.cart);
  const total = calculateTotal(cart);
  const { data: addresses, isPending } = useAddresses();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const selectedAddress = useSelector((state) => state.cart.address);

  const mutation = useMutation({
    mutationFn: deleteAddress,
    onSuccess: (data, deletedId) => {
      if (selectedAddress?.id === deletedId) dispatch(setAddress({}));
      toast.success('Address deleted');
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
    onError: () => toast.error('Failed to delete'),
  });

  return (
    <div className="py-6 text-text-color flex flex-col items-center lg:justify-between lg:max-w-275 lg:mx-auto">
      <div className="flex w-full justify-between py-6">
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <h3 className="text-h4">Teslimat Adresim</h3>
          <div>
            <div className="flex flex-col gap-4">
              {isPending && <p>Loading...</p>}
              {addresses?.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  isSelected={selectedAddress?.id === address.id}
                  onSelect={() => dispatch(setAddress(address))}
                  onEdit={() => {}}
                />
              ))}
            </div>
          </div>
          <button
            className="cursor-pointer border p-4 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!addresses?.length || mutation.isPending}
            onClick={() => mutation.mutate(addresses[0].id)}
          >
            adres sil
          </button>
          <NewAddressForm />
        </div>
        <CreateOrderSummary total={total} />
      </div>
    </div>
  );
}

export default CreateOrderPage;
