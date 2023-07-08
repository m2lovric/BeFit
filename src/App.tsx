import { auth } from './config/firebaseConfig.ts';
import Navigation from './components/Navigation.tsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import useUserStore from './store/userStore.ts';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Auth/Login.tsx';

function App() {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        useUserStore.setState({ user });
      }
    });
  }, []);

  return (
    <main className='p-10 w-full'>
      <Navigation user={user} />
      <h1 className='text-2xl font-bold text-gray-950'>BeFit</h1>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
