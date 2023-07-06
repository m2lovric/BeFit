import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/login'>Sign In</Link>
    </nav>
  );
};

export default Navigation;
