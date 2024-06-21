import NavMenu from '../NavMenu/NavMenu';
import UserSettings from './SidePopUp';

function SideBar() {
  return (
    <div className="max-w-[15.5rem] px-2 pt-5 w-full gap-4 rounded-3xl bg-blueMoon h-full">
      <UserSettings userName="Sergiy" />
      <NavMenu />
    </div>
  );
}

export default SideBar;
