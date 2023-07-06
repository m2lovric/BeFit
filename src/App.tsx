import { auth } from './config/firebaseConfig.ts';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Home from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Auth/Login.tsx';
import Navigation from './components/Navigation.tsx';

function App() {
  const user = auth.currentUser;
  return (
    <>
      <Navigation />
      <h1>BeFit</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
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
    </>
  );
}

export default App;
