import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FieldError from '@/components/SignUpPage/FieldError';
import { login } from '@/api/api';
import { setUser } from '@/store/actions/clientActions';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      role_id: '3',
      email: 'customer@commerce.com',
      password: '123456',
    },
    mode: 'onChange',
    shouldUnregister: true,
  });

  const [userToken, setUserToken] = useLocalStorage('userToken', null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data, formData) => {
      dispatch(setUser(data));
      if (formData.rememberMe) setUserToken(data.token);
      else localStorage.removeItem('userToken');
      navigate(from, { replace: true });
      toast.success('Logged in');
    },
    onError: (err) => {
      toast.error('No such user');
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-h2 text-text-color text-center pt-10 pb-5">Login</h2>
      <div className="flex flex-col gap-4 px-10 py-4 lg:w-1/4 lg:mx-auto">
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
          })}
          className="form-field"
          placeholder="Password"
        />
        <FieldError message={errors.password?.message} />
        <label
          htmlFor="rememberMe"
          className="flex items-center gap-2 w-fit text-form text-second-text-color cursor-pointer select-none"
        >
          <input
            type="checkbox"
            id="rememberMe"
            {...register('rememberMe')}
            className="size-4 accent-primary-color cursor-pointer"
          />
          Remember me
        </label>
        <button
          disabled={!isValid || mutation.isPending}
          className="text-btn-text text-light-text-color bg-primary-color px-10 py-4 rounded-md cursor-pointer lg:w-2/3 lg:self-center disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {mutation.isPending ? 'Logging in' : 'Log in'}
          {mutation.isPending && (
            <span className="size-5 rounded-full border-2 border-light-text-color border-t-transparent animate-spin" />
          )}
        </button>
      </div>
    </form>
  );
}

export default LoginPage;
