import { Link, useLocation } from 'react-router';

export default function LoginRegister() {
  const location = useLocation();
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
