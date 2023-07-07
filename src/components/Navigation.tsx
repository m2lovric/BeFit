import { Link } from 'react-router-dom';
import { User, signOut } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

interface NavigationType {
  user: User | null;
}

const Navigation = ({ user }: NavigationType) => {
  return (
    <nav className='flex justify-between w-1/4 items-center'>
      <h2 className='text-xl font-bold'>BeFit</h2>
      {user == null ? (
        <Link to='/login'>Sign In</Link>
      ) : (
        <>
          <Link to='/dashboard'>Dashboard</Link>
          <p>{user.email}</p>
          <button onClick={() => signOut(auth)}>Sign out</button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
