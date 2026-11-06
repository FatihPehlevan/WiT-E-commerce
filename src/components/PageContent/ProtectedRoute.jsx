import { Navigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.client.user);
  const location = useLocation();
  const isLoggedIn = user.name || localStorage.getItem('userToken');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
