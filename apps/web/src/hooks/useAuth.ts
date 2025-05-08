import { useAuthStore } from '@/store/auth';
import { useShallow } from 'zustand/react/shallow';

export const useHeaderAuth = () =>
  useAuthStore(
    useShallow((s) => ({
      user: s.user,
      isAuthenticated: s.isAuthenticated,
      logout: s.logout,
    }))
  );

export const useAuthPermissions = () =>
  useAuthStore(
    useShallow((s) => ({
      isAuthenticated: s.isAuthenticated,
      isLoading: s.isLoading,
      hasPermission: s.hasPermission,
    }))
  );

export const useLogin = () => useAuthStore((state) => state.login);
export const useRegister = () => useAuthStore((state) => state.register);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useGetProfile = () => useAuthStore((state) => state.getProfile);
export const useCheckAuth = () => useAuthStore((state) => state.checkAuth);
export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);
export const useUser = () => useAuthStore((state) => state.user);
