import ProfileSettings from '@/components/UserSettings/ProfileSettings';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/settings')({
  component: () => <ProfileSettings />,
});
