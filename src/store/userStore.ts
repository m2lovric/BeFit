import { create } from 'zustand';
import { User } from 'firebase/auth';

interface UserState {
  user: null | User;
  setUser: (user: null | User) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
