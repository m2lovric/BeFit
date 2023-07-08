import { Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

interface ProtectedRouteType {
  user: User | null;
  children: JSX.Element;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteType) => {
  if (!user) {
    console.log(user);
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
