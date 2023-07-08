import { Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

interface ProtectedRouteType {
  user: User | null;
  children: JSX.Element;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteType) => {
  return user ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
