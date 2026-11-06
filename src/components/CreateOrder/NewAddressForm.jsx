import { useForm } from 'react-hook-form';
import { useRef, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FieldError from '@/components/SignUpPage/FieldError';
import { turkeyCities } from '@/data/data';
import { saveAddress, updateAddress } from '@/api/api';
import { setAddress } from '@/store/actions/shoppingCartActions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function NewAddressForm({ address, onSaved }) {
  const isEditing = !!address;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: address ?? {},
  });

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: isEditing ? updateAddress : saveAddress,
    onSuccess: (data, payload) => {
      dispatch(setAddress(isEditing ? payload : data));
      reset();
      toast.success(isEditing ? 'Address updated' : 'Address saved');
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
      onSaved?.();
    },
    onError: () =>
      toast.error(isEditing ? 'Failed to update' : 'Failed to save'),
  });

  const onSubmit = (formData) => {
    mutation.mutate(isEditing ? { ...formData, id: address.id } : formData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="md:col-span-2">
        <input
          {...register('title', {
            required: 'Please enter a title.',
          })}
          className="form-field w-full"
          placeholder="Address Title"
        />
        <FieldError message={errors.title?.message} />
      </div>
      <div>
        <input
          {...register('name', {
            required: 'Please enter a name.',
          })}
          className="form-field w-full"
          placeholder="Name"
        />
        <FieldError message={errors.name?.message} />
      </div>
      <div>
        <input
          {...register('surname', {
            required: 'Please enter a surname.',
          })}
          className="form-field w-full"
          placeholder="Surname"
        />
        <FieldError message={errors.surname?.message} />
      </div>
      <div className="md:col-span-2">
        <input
          {...register('phone', {
            required: 'Please enter a phone.',
          })}
          className="form-field w-full"
          placeholder="Phone"
        />
        <FieldError message={errors.phone?.message} />
      </div>
      <div>
        <div className="relative">
          <select
            {...register('city', {
              required: 'Please select a city.',
            })}
            defaultValue=""
            className="form-field w-full appearance-none cursor-pointer pr-10"
          >
            <option value="" disabled>
              City
            </option>
            {turkeyCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-second-text-color">
            ▾
          </span>
        </div>
        <FieldError message={errors.city?.message} />
      </div>
      <div>
        <input
          {...register('district', {
            required: 'Please enter a district.',
          })}
          className="form-field w-full"
          placeholder="District"
        />
        <FieldError message={errors.district?.message} />
      </div>
      <div className="md:col-span-2">
        <input
          {...register('neighborhood', {
            required: 'Please enter a neighborhood.',
          })}
          className="form-field w-full"
          placeholder="Neighborhood"
        />
        <FieldError message={errors.neighborhood?.message} />
      </div>
      <div className="md:col-span-2">
        <textarea
          {...register('address', {
            required: 'Please enter an address.',
          })}
          rows={3}
          className="form-field w-full resize-none"
          placeholder="Address"
        />
        <FieldError message={errors.address?.message} />
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
            ? 'Update Address'
            : 'Save Address'}
        {mutation.isPending && (
          <span className="size-5 rounded-full border-2 border-light-text-color border-t-transparent animate-spin" />
        )}
      </button>
    </form>
  );
}

export default NewAddressForm;
