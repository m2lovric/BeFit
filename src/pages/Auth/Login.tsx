import { useState } from 'react';
import { handleSignIn } from './useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function handleForm(e: React.FormEvent) {
    e.preventDefault();
    handleSignIn(login.email, login.password);
    setLogin({ email: '', password: '' });
    navigate('/dashboard');
  }
  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={handleForm}
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
    </div>
  );
};

export default Login;
