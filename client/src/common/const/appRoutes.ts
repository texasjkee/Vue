export enum AppRoutes {
  PROFILE = 'Profile',
  DASHBOARD = 'Dashboard',
  CALENDAR = 'Calendar',
  PAYMENT = 'Payment',
  LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.DASHBOARD]: '/dashboard',
  [AppRoutes.PAYMENT]: '/payment',
  [AppRoutes.LOGIN]: 'auth/login',

  // [AppRoutes.NOT_FOUND]: "*",
};
