import { Link, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Gravatar from 'react-gravatar';

export default function LoginRegister() {
  const location = useLocation();
  const user = useSelector((state) => state.client.user);
  if (user.name)
    return (
      <span className="flex gap-2 items-center justify-center">
        {' '}
        <Gravatar email={user.email} className="rounded-full size-8" />{' '}
        {user.name}
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
