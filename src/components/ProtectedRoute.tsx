import { Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

interface ProtectedRouteType {
  user: User | null;
  children: JSX.Element;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteType) => {
  if (!user) {
    return <Navigate to='/home' replace />;
  }

  return children;
};

export default ProtectedRoute;
