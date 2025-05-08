import { useAuthPermissions } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ROUTES } from '@/constants';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
}

export const ProtectedRoute = ({
  children,
  requiredPermissions = [],
}: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, hasPermission } = useAuthPermissions();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(ROUTES.AUTH.LOGIN);
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (requiredPermissions.length > 0) {
    const hasRequiredPermissions = requiredPermissions.every(hasPermission);

    if (!hasRequiredPermissions) {
      return <div>Access Denied</div>;
    }
  }

  return <>{children}</>;
};
