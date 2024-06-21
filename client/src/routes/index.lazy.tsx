import LoginPage from '@/pages/LoginPage/LoginPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => <LoginPage />,
});
