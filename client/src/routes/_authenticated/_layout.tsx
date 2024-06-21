import LayOut from '@/layOut/LayOut';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout')({
  component: () => <LayOut />,
});
