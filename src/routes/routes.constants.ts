import { Route } from './routes.types';

export const ROUTE_PATHS: Record<Route, string> = {
  all: '*',
  accountsManager: '/accounts/manage',
  addAccount: 'accounts/add',
  createAccount: 'accounts/create',
  home: '/',
};
