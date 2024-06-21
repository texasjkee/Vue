import { Link } from '@tanstack/react-router';
import { SideBarItemsList } from './model/items';

function NavMenu() {
  return (
    <nav className="hidden md:flex  justify-start flex-col gap-2">
      {SideBarItemsList.map((route, index) => {
        return (
          <Link
            key={index}
            activeProps={{
              className: 'bg-white shadow',
            }}
            className="font-normal rounded-full text-sm normal-case px-3 py-2.5 hover:text-primary hover:ease-in-out transition duration-150"
            to={route.path}
          >
            <div className="flex gap-2">
              {route.icon && <img src={route.icon} alt={route.text} />}
              {route.text}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
export default NavMenu;
