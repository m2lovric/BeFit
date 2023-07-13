import { auth } from './config/firebaseConfig.ts';
import Navigation from './components/Navigation.tsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import useUserStore from './store/userStore.ts';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Auth/Login.tsx';
import NewWorkout from './pages/NewWorkout.tsx';
import NewExercise from './pages/NewExercise.tsx';

function App() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        useUserStore.setState({ user });
        navigate('/dashboard');
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
        <Route
          path='/new'
          element={
            <ProtectedRoute user={user}>
              <NewWorkout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/new-exercise'
          element={
            <ProtectedRoute user={user}>
              <NewExercise />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
