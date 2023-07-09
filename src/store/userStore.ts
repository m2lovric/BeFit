import { create } from 'zustand';
import { User } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

interface UserState {
  user: null | User;
  setUser: (user: null | User) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: auth.currentUser,
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
