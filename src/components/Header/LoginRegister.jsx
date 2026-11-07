import { Link, useLocation, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';
import { setUser, clearFavorites } from '@/store/actions/clientActions';
import {
  setAddress,
  setReceiptAddress,
  setPayment,
} from '@/store/actions/shoppingCartActions';
import { setAuthToken } from '@/api/api';

export default function LoginRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.client.user);
  const handleLogout = () => {
    dispatch(setUser({}));
    setAuthToken(null);
    localStorage.removeItem('userToken');
    dispatch(setAddress({}));
    dispatch(setReceiptAddress({}));
    dispatch(setPayment({}));
    dispatch(clearFavorites());
    queryClient.removeQueries({ queryKey: ['addresses'] });
    queryClient.removeQueries({ queryKey: ['cards'] });
    queryClient.removeQueries({ queryKey: ['orders'] });

    navigate('/');
    toast.success('Logged out');
  };

  if (user.name)
    return (
      <div className="relative group flex flex-col items-center gap-4 lg:gap-0">
        <span className="flex gap-2 items-center cursor-pointer">
          <Gravatar email={user.email} className="rounded-full size-8" />
          {user.name}
          <i className="hidden lg:inline-block iconify-[lucide--chevron-down] size-4 transition-transform lg:group-hover:rotate-180" />
        </span>

        <div className="flex flex-col lg:hidden lg:group-hover:flex lg:absolute lg:top-full lg:right-0 lg:z-10 lg:pt-4">
          <div className="flex flex-col items-center gap-4 lg:items-stretch lg:gap-0 lg:min-w-44 lg:py-2 lg:rounded-md lg:border lg:border-light-gray-2 lg:bg-light-background-color lg:text-text-color lg:shadow-lg">
            <Link
              to="/orders"
              className="flex items-center gap-2 lg:px-4 lg:py-2 lg:hover:bg-light-gray-1 hover:text-primary-color"
            >
              <i className="iconify-[lucide--package] size-5 lg:size-4" />
              Siparişlerim
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 text-left cursor-pointer lg:px-4 lg:py-2 lg:hover:bg-light-gray-1 hover:text-danger-color"
            >
              <i className="iconify-[lucide--log-out] size-5 lg:size-4" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center gap-2">
      <Link
        to="/login"
        state={{ from: location }}
        className="flex gap-1 items-center justify-center"
      >
        <i className="iconify-[boxicons--user]"></i>Login
      </Link>
      <span>/</span>
      <Link to="/signup">Register</Link>
    </div>
  );
}
