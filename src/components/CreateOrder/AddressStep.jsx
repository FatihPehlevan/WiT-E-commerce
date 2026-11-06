import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import AddressCard from '@/components/CreateOrder/AddressCard';
import NewAddressForm from '@/components/CreateOrder/NewAddressForm';
import { useAddresses } from '@/hooks/useAddresses';
import { deleteAddress } from '@/api/api';
import {
  setAddress,
  setReceiptAddress,
} from '@/store/actions/shoppingCartActions';

function AddressStep({ sameAsShipping, setSameAsShipping }) {
  const { data: addresses, isPending } = useAddresses();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const selectedAddress = useSelector((state) => state.cart.address);
  const receiptAddress = useSelector((state) => state.cart.receiptAddress);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const openNewForm = () => {
    setEditingAddress(null);
    setShowForm(true);
  };

  const openEditForm = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingAddress(null);
    setShowForm(false);
  };

  const mutation = useMutation({
    mutationFn: deleteAddress,
    onSuccess: (data, deletedId) => {
      if (selectedAddress.id === deletedId) dispatch(setAddress({}));
      if (receiptAddress.id === deletedId) dispatch(setReceiptAddress({}));
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
      toast.success('Address deleted');
    },
    onError: () => toast.error('Failed to delete'),
  });

  const renderAddressList = (selected, setAction, radioName) => (
    <div className="flex flex-col gap-4">
      {isPending && <p>Loading...</p>}
      {addresses?.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          radioName={radioName}
          isSelected={selected.id === address.id}
          onSelect={() => dispatch(setAction(address))}
          onEdit={() => openEditForm(address)}
          onDelete={() => mutation.mutate(address.id)}
          isDeleting={mutation.isPending}
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-h4">Teslimat Adresim</h3>
      {renderAddressList(selectedAddress, setAddress, 'shipping')}

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={(e) => setSameAsShipping(e.target.checked)}
          className="size-5 accent-primary-color cursor-pointer"
        />
        <span>Faturamı aynı adrese gönder</span>
      </label>

      {!sameAsShipping && (
        <>
          <h3 className="text-h4">Fatura Adresim</h3>
          {renderAddressList(receiptAddress, setReceiptAddress, 'receipt')}
        </>
      )}

      <button
        type="button"
        onClick={showForm ? closeForm : openNewForm}
        className="flex flex-col items-center justify-center gap-1 py-5 rounded-lg border border-light-gray-2 bg-light-gray-1 cursor-pointer hover:border-primary-color"
      >
        <i
          className={`size-7 text-primary-color ${
            showForm ? 'iconify-[lucide--minus]' : 'iconify-[lucide--plus]'
          }`}
        />
        <span className="font-bold">
          {showForm ? 'Vazgeç' : 'Yeni Adres Ekle'}
        </span>
      </button>
      {showForm && (
        <NewAddressForm
          key={editingAddress?.id ?? 'new'}
          address={editingAddress}
          onSaved={closeForm}
        />
      )}
    </div>
  );
}

export default AddressStep;
