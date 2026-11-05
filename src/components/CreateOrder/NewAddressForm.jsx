import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FieldError from '@/components/SignUpPage/FieldError';
import { turkeyCities } from '@/data/data';
import { saveAddress } from '@/api/api';
import { setAddress } from '@/store/actions/shoppingCartActions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function NewAddressForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    shouldUnregister: true,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: saveAddress,
    onSuccess: (data) => {
      dispatch(setAddress(data));
      reset();
      toast.success('Address saved');
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
    onError: () => toast.error('Failed to save'),
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <form
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
        className="md:col-span-2 text-btn-text text-light-text-color bg-primary-color px-10 py-4 rounded-md lg:w-2/3 lg:mx-auto cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 disabled:bg-muted-color"
      >
        {mutation.isPending ? 'Saving' : 'Save Address'}
        {mutation.isPending && (
          <span className="size-5 rounded-full border-2 border-light-text-color border-t-transparent animate-spin" />
        )}
      </button>
    </form>
  );
}

export default NewAddressForm;
