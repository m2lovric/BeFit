import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import useUserStore from '../store/userStore';

const SignOutBtn = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
      navigate('/login');
      useUserStore.setState({ user: null });
    });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutBtn;
