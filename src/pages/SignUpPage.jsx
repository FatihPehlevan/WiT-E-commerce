import { useForm } from 'react-hook-form';
import { getRoles } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import BouncingDots from '@/components/SignUpPage/BouncingDots';
import FieldError from '@/components/SignUpPage/FieldError';

export default function SignUpPage() {
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { role_id: '3' },
    mode: 'onChange',
    shouldUnregister: true,
  });

  const selectedRole = watch('role_id');

  const { data, isPending, error } = useQuery({
    queryKey: ['roles'],
    queryFn: getRoles,
    staleTime: Infinity,
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-h2 text-text-color text-center pt-10 pb-5">
        Create Your Account
      </h2>
      <div className="flex flex-col gap-4 px-10 py-4 lg:w-1/4 lg:mx-auto">
        <input
          {...register('name', {
            required: 'Please enter your name.',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long.',
            },
          })}
          className="form-field"
          placeholder="Name"
        />
        <FieldError message={errors.name?.message} />
        <input
          type="email"
          {...register('email', {
            required: 'Please enter your email address.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Please enter a valid email address',
            },
          })}
          className="form-field"
          placeholder="Email"
        />
        <FieldError message={errors.email?.message} />
        <input
          type="password"
          {...register('password', {
            required: 'Please enter a password.',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long.',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/,
              message:
                'Password must include an uppercase letter, a lowercase letter, a number, and a special character.',
            },
          })}
          className="form-field"
          placeholder="Password"
        />
        <FieldError message={errors.password?.message} />
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password.',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
          className="form-field"
          placeholder="Confirm Password"
        />
        <FieldError message={errors.confirmPassword?.message} />

        {selectedRole === '2' && (
          <div className="flex flex-col gap-4">
            <input
              {...register('store.name', {
                required: 'Please enter store name.',
                minLength: {
                  value: 3,
                  message: 'Store name must be at least 3 characters long.',
                },
              })}
              className="form-field"
              placeholder="Store Name"
            />
            <FieldError message={errors.store?.name?.message} />
            <input
              type="tel"
              {...register('store.phone', {
                required: 'Please enter store phone number.',
                pattern: {
                  value: /^(\+90|0)?[2-5]\d{9}$/,
                  message: 'Please enter a valid Türkiye phone number.',
                },
              })}
              className="form-field"
              placeholder="Store Phone"
            />
            <FieldError message={errors.store?.phone?.message} />
            <input
              type="text"
              {...register('store.tax_no', {
                required: 'Please enter tax number.',
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: 'Tax ID must match the format TXXXXVXXXXXX.',
                },
              })}
              className="form-field"
              placeholder="Tax Number"
            />
            <FieldError message={errors.store?.tax_no?.message} />
            <input
              type="text"
              {...register('store.bank_account', {
                required: 'Please enter IBAN.',
                pattern: {
                  value: /^TR\d{24}$/,
                  message: 'Please enter a valid IBAN.',
                },
              })}
              className="form-field"
              placeholder="Store IBAN"
            />
            <FieldError message={errors.store?.bank_account?.message} />
          </div>
        )}

        {isPending ? (
          <div className="form-field w-full cursor-not-allowed">
            Loading roles
            <BouncingDots />
          </div>
        ) : error ? (
          <select
            className="form-field w-full appearance-none text-alert-color cursor-not-allowed"
            disabled
          >
            <option>Error fetching roles...</option>
          </select>
        ) : (
          <div className="relative">
            <select
              {...register('role_id', { required: 'Please select a role.' })}
              className="form-field w-full appearance-none cursor-pointer"
            >
              {data.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-second-text-color">
              ▾
            </span>
          </div>
        )}

        <button
          disabled={!isValid}
          className="text-btn-text text-light-text-color bg-primary-color px-10 py-4 rounded-md cursor-pointer lg:w-2/3 lg:self-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
