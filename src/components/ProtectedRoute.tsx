import { Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

interface ProtectedRouteType {
  user: User | null;
  children: JSX.Element;
  redirectPath?: string;
}

const ProtectedRoute = ({
  user,
  children,
  redirectPath = '/login',
}: ProtectedRouteType) => {
  return user ? children : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
