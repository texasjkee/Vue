import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout/dashboard')({
  beforeLoad: () => ({ getTitle: () => 'Dashboard' }),
  component: lazyRouteComponent(
    () => import('@/components/Dashboard/Dashboard')
  ),
});
