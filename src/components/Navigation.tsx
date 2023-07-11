import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import SignOutBtn from './SignOutBtn';

interface NavigationType {
  user: User | null | undefined;
}

const Navigation = ({ user }: NavigationType) => {
  return (
    <nav className='flex justify-between w-1/3 items-center'>
      <h2 className='text-xl font-bold'>BeFit</h2>
      {user == null ? (
        <Link to='/login'>Sign In</Link>
      ) : (
        <>
          <Link to='/dashboard'>Dashboard</Link>
          <p>{user.email}</p>
          <SignOutBtn />
        </>
      )}
    </nav>
  );
};

export default Navigation;
