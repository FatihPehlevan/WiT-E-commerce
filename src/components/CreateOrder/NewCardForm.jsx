import { useForm } from 'react-hook-form';
import { useRef, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FieldError from '@/components/SignUpPage/FieldError';
import { saveCard, updateCard } from '@/api/api';
import { setPayment } from '@/store/actions/shoppingCartActions';

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

function NewCardForm({ card, onSaved }) {
  const isEditing = !!card;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: card ?? {},
  });

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: isEditing ? updateCard : saveCard,
    onSuccess: (data, payload) => {
      dispatch(setPayment(isEditing ? payload : data));
      toast.success(isEditing ? 'Card updated' : 'Card saved');
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      onSaved();
    },
    onError: () =>
      toast.error(isEditing ? 'Failed to update' : 'Failed to save'),
  });

  const onSubmit = (formData) => {
    const payload = {
      card_no: formData.card_no,
      expire_month: Number(formData.expire_month),
      expire_year: Number(formData.expire_year),
      name_on_card: formData.name_on_card,
    };
    mutation.mutate(isEditing ? { ...payload, id: card.id } : payload);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="md:col-span-2">
        <input
          {...register('name_on_card', {
            required: 'Please enter the name on the card.',
          })}
          className="form-field w-full"
          placeholder="Name on Card"
        />
        <FieldError message={errors.name_on_card?.message} />
      </div>
      <div className="md:col-span-2">
        <input
          {...register('card_no', {
            required: 'Please enter the card number.',
            pattern: {
              value: /^\d{16}$/,
              message: 'Card number must be 16 digits.',
            },
          })}
          inputMode="numeric"
          maxLength={16}
          className="form-field w-full tracking-wider"
          placeholder="Card Number"
        />
        <FieldError message={errors.card_no?.message} />
      </div>
      <div>
        <div className="relative">
          <select
            {...register('expire_month', {
              required: 'Please select a month.',
              validate: (month) =>
                Number(getValues('expire_year')) !== currentYear ||
                Number(month) >= currentMonth ||
                'This card has expired.',
            })}
            defaultValue=""
            className="form-field w-full appearance-none cursor-pointer pr-10"
          >
            <option value="" disabled>
              Month
            </option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-second-text-color">
            ▾
          </span>
        </div>
        <FieldError message={errors.expire_month?.message} />
      </div>
      <div>
        <div className="relative">
          <select
            {...register('expire_year', {
              required: 'Please select a year.',
              deps: ['expire_month'],
            })}
            defaultValue=""
            className="form-field w-full appearance-none cursor-pointer pr-10"
          >
            <option value="" disabled>
              Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-second-text-color">
            ▾
          </span>
        </div>
        <FieldError message={errors.expire_year?.message} />
      </div>
      <button
        disabled={!isValid || mutation.isPending}
        className="md:col-span-2 text-btn-text text-light-text-color bg-primary-color hover:bg-hover-color px-10 py-4 rounded-md lg:w-2/3 lg:mx-auto cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 disabled:bg-muted-color"
      >
        {mutation.isPending
          ? isEditing
            ? 'Updating'
            : 'Saving'
          : isEditing
            ? 'Update Card'
            : 'Save Card'}
        {mutation.isPending && (
          <span className="size-5 rounded-full border-2 border-light-text-color border-t-transparent animate-spin" />
        )}
      </button>
    </form>
  );
}

export default NewCardForm;
