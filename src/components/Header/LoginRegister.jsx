import { Link, useLocation, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';
import { setUser } from '@/store/actions/clientActions';
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
    queryClient.removeQueries({ queryKey: ['addresses'] });
    queryClient.removeQueries({ queryKey: ['cards'] });

    navigate('/');
    toast.success('Logged out');
  };

  if (user.name)
    return (
      <span className="flex gap-2 items-center justify-center">
        <Gravatar email={user.email} className="rounded-full size-8" />
        {user.name}
        <button
          type="button"
          onClick={handleLogout}
          aria-label="Logout"
          className="flex items-center cursor-pointer hover:text-danger-color"
        >
          <i className="iconify-[lucide--log-out] size-5" />
        </button>
      </span>
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
