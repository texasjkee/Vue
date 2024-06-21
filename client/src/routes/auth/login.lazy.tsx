import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/login')({
  beforeLoad: () => ({ getTitle: () => 'Login' }),
  component: lazyRouteComponent(() => import('@/pages/LoginPage/LoginPage')),
});
