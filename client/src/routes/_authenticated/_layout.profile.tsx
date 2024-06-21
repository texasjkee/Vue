import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout/profile')({
  beforeLoad: () => ({ getTitle: () => 'Profile' }),
  component: lazyRouteComponent(() => import('@/components/Profile/Profile')),
});
