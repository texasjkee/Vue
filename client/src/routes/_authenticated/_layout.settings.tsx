import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout/settings')({
  beforeLoad: () => ({ getTitle: () => 'Settings' }),
  component: lazyRouteComponent(
    () => import('@/components/UserSettings/UserSettings')
  ),
});
