import { AppRoutes, RoutePath } from '@/common/const/appRoutes';
import dashboardIcon from '@/assets/dashbord_icon.svg';
import calendarIcon from '@/assets/calendar.svg';
import letterIcon from '@/assets/letter.svg';
import moneyIcon from '@/assets/Money.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  icon?: string;
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.Dashboard,
    text: AppRoutes.DASHBOARD,
    icon: dashboardIcon,
  },
  { path: RoutePath.Calendar, text: AppRoutes.CALENDAR, icon: calendarIcon },
  { path: RoutePath.Payment, text: AppRoutes.PAYMENT, icon: moneyIcon },
  { path: RoutePath.Profile, text: AppRoutes.PROFILE, icon: letterIcon },
];
