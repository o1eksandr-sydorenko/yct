import { useIsAuthenticated } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ROUTES } from '@/constants';

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ROUTES.DASHBOARD.HOME);
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};
