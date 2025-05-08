import { create } from 'zustand';
import api from '@/clients/api';
import {
  LoginDto,
  RegisterDto,
  ProfileDto,
} from '@your-crypto-tracker/api-client';

interface AuthState {
  user: ProfileDto | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  getProfile: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,

  login: async (data: LoginDto) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.auth.authControllerLogin(data);
      localStorage.setItem('accessToken', response.data.accessToken);
      await get().getProfile();
    } catch (error: unknown) {
      set({ error: error instanceof Error ? error.message : 'Login failed' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (data: RegisterDto) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.auth.authControllerRegister(data);
      localStorage.setItem('accessToken', response.data.accessToken);
      await get().getProfile();
    } catch (error: unknown) {
      set({
        error: error instanceof Error ? error.message : 'Registration failed',
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      await get().getProfile();
    }
  },

  getProfile: async () => {
    try {
      const response = await api.profile.profileControllerGetProfile();
      set({
        user: response.data,
        isAuthenticated: true,
        error: null,
      });
    } catch (error: unknown) {
      set({
        error: error instanceof Error ? error.message : 'Failed to get profile',
        isAuthenticated: false,
        user: null,
      });
      localStorage.removeItem('accessToken');
      throw error;
    }
  },

  hasPermission: (permission: string): boolean => {
    if (!get().user?.permissions) return false;

    return get().user?.permissions.includes(permission) || false;
  },
}));
