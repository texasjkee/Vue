import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/layout/layouta')({
  component: () => <div>Hello /layout/layouta!</div>,
});
