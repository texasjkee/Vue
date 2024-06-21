import { useEffect } from 'react';
import { Outlet, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import SideBar from '@/components/SideBar/SideBar';

function LayOut() {
  const router = useRouter();

  useEffect(() => {
    const matchWithTitle = [...router.state.matches]
      .reverse()
      .find((d) => d.context.getTitle);

    const title = matchWithTitle?.context.getTitle() || 'Work space';
    document.title = title;
  }, [router.state.matches]);

  return (
    <>
      <div className="flex gap-2  h-full ">
        <SideBar />
        <div className=" flex p-2 flex-col flex-1 rounded-3xl bg-blueMoon">
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </div>
    </>
  );
}

export default LayOut;
