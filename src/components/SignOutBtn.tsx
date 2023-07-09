import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import useUserStore from '../store/userStore';
import { redirect } from 'react-router-dom';

const SignOutBtn = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
      useUserStore.setState({ user: null });
      redirect('/login');
    });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutBtn;
