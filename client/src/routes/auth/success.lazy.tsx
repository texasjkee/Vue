import SuccessRegistration from '@/components/SuccessRegistration/SuccessRegistration';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/success')({
  component: () => <SuccessRegistration />,
});
