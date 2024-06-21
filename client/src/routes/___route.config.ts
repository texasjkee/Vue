import { routeTree } from '@/routeTree.gen';
import { createRouter } from '@tanstack/react-router';

export const router = createRouter({
  routeTree,
  context: { authentication: undefined!, getTitle: undefined! },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
