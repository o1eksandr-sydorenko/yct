import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LoginDto,
  RegisterDto,
  ProfileDto,
} from '@your-crypto-tracker/api-client';
import api from '@/clients/api';
import { ROUTES } from '@/constants';

interface AuthContextType {
  user: ProfileDto | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ProfileDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        setUser(null);

        return;
      }

      const response = await api.profile.profileControllerGetProfile();

      console.log(response.data);

      setUser(response.data);
    } catch (error) {
      setUser(null);
      localStorage.removeItem('accessToken');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data: LoginDto) => {
    const response = await api.auth.authControllerLogin(data);
    localStorage.setItem('accessToken', response.data.accessToken);
    await checkAuth();
    router.push(ROUTES.DASHBOARD.HOME);
  };

  const register = async (data: RegisterDto) => {
    const response = await api.auth.authControllerRegister(data);
    console.log({ status: 'register', response: response.data });
    localStorage.setItem('accessToken', response.data.accessToken);
    await checkAuth();
    router.push(ROUTES.DASHBOARD.HOME);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    router.push(ROUTES.AUTH.LOGIN);
  };

  const hasPermission = (permission: string): boolean => {
    if (!user?.permissions) return false;

    return user.permissions.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
