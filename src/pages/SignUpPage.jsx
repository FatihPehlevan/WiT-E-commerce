import { useForm } from 'react-hook-form';
import { getRoles } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export default function SignUpPage() {
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { role: '3' }, mode: 'onChange' });

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
      <div className="flex flex-col gap-4 px-10 py-10 lg:w-1/4 lg:mx-auto">
        <input
          {...register('name', {
            required: 'Please enter your name.',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long.',
            },
          })}
          className="border border-input-border px-5 py-2.5 rounded-md bg-form-bg placeholder:text-second-text-color text-second-text-color text-form"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-alert-color text-small">{errors.name.message}</p>
        )}
        <input
          type="email"
          {...register('email', {
            required: 'Please enter your email address.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Please enter a valid email address',
            },
          })}
          className="border border-input-border px-5 py-2.5 rounded-md bg-form-bg placeholder:text-second-text-color text-second-text-color text-form"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-alert-color text-small">{errors.email.message}</p>
        )}
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
          className="border border-input-border px-5 py-2.5 rounded-md bg-form-bg placeholder:text-second-text-color text-second-text-color text-form"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-alert-color text-small">
            {errors.password.message}
          </p>
        )}
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password.',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
          className="border border-input-border px-5 py-2.5 rounded-md bg-form-bg placeholder:text-second-text-color text-second-text-color text-form"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <p className="text-alert-color text-small">
            {errors.confirmPassword.message}
          </p>
        )}

        {isPending ? (
          <div className="w-full border border-input-border px-5 py-2.5 rounded-md bg-form-bg text-second-text-color text-form cursor-not-allowed">
            Loading roles
            <span className="text-2xl leading-none">
              <span className="inline-block animate-bounce ">.</span>
              <span className="inline-block animate-bounce [animation-delay:150ms]">
                .
              </span>
              <span className="inline-block animate-bounce [animation-delay:300ms] ">
                .
              </span>
            </span>
          </div>
        ) : error ? (
          <select
            className="w-full appearance-none border border-input-border px-5 py-2.5 rounded-md bg-form-bg text-alert-color text-form cursor-not-allowed"
            disabled
          >
            <option>Error fetching roles...</option>
          </select>
        ) : (
          <div className="relative">
            <select
              {...register('role', { required: 'Please select a role.' })}
              className="w-full appearance-none border border-input-border px-5 py-2.5 rounded-md bg-form-bg text-second-text-color text-form cursor-pointer"
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
        {errors.role && (
          <p className="text-alert-color text-small">{errors.role.message}</p>
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
