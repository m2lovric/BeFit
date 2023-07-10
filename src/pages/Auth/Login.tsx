import { useState } from 'react';
import { signIn, signUp } from './useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [signup, setSignUp] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    signIn(login.email, login.password);
    setLogin({ email: '', password: '' });
    navigate('/dashboard');
  }

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    signUp(signup.email, signup.password);
    setSignUp({ email: '', password: '' });
    navigate('/dashboard');
  }
  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={handleSignIn}
        className='flex flex-col justify-between w-1/5'
      >
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          value={login.email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          value={login.password}
        />
        <button type='submit'>Sign In</button>
      </form>

      <p>or create new account</p>

      <form
        onSubmit={handleSignUp}
        className='flex flex-col justify-between w-1/5'
      >
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setSignUp({ ...signup, email: e.target.value })}
          value={signup.email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setSignUp({ ...signup, password: e.target.value })}
          value={signup.password}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
