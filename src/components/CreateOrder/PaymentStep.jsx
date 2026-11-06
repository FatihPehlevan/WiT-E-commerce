import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import CardItem from '@/components/CreateOrder/CardItem';
import NewCardForm from '@/components/CreateOrder/NewCardForm';
import InstallmentOptions from '@/components/CreateOrder/InstallmentOptions';
import { useCards } from '@/hooks/useCards';
import { deleteCard } from '@/api/api';
import {
  setPayment,
  calculatePayable,
} from '@/store/actions/shoppingCartActions';

function PaymentStep({ total }) {
  const { data: cards, isPending } = useCards();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.cart.payment);
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [installment, setInstallment] = useState(1);

  const openNewForm = () => {
    setEditingCard(null);
    setShowForm(true);
  };

  const openEditForm = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingCard(null);
    setShowForm(false);
  };

  const mutation = useMutation({
    mutationFn: deleteCard,
    onSuccess: (data, deletedId) => {
      if (selectedCard.id === deletedId) dispatch(setPayment({}));
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      toast.success('Card deleted');
    },
    onError: () => toast.error('Failed to delete'),
  });

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-h4">Kart Bilgileri</h3>
      {isPending && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards?.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            isSelected={selectedCard.id === card.id}
            onSelect={() => dispatch(setPayment(card))}
            onEdit={() => openEditForm(card)}
            onDelete={() => mutation.mutate(card.id)}
            isDeleting={mutation.isPending}
          />
        ))}
      </div>

      {selectedCard.id && (
        <InstallmentOptions
          amount={calculatePayable(total)}
          selected={installment}
          onSelect={setInstallment}
        />
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
          {showForm ? 'Vazgeç' : 'Yeni Kart Ekle'}
        </span>
      </button>
      {showForm && (
        <NewCardForm
          key={editingCard?.id ?? 'new'}
          card={editingCard}
          onSaved={closeForm}
        />
      )}
    </div>
  );
}

export default PaymentStep;
