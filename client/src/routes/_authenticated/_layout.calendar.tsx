import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout/calendar')({
  beforeLoad: () => ({ getTitle: () => 'Calendar' }),
  component: lazyRouteComponent(
    () => import('@/components/Calendar/CalendarContainer')
  ),
});
