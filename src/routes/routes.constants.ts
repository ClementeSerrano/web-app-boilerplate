import { Route } from './routes.types';

export const ROUTE_PATHS: Record<Route, string> = {
  all: '*',
  home: '/',
  waitlistRegister: '/register',
};

export const ROUTE_NAMES: Record<string, string> = {
  [ROUTE_PATHS.home]: 'Home page',
  [ROUTE_PATHS.waitlistRegister]: 'Waitlist register page',
};
