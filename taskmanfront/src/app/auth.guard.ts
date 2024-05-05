import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const isUserLoggedInGuard = () => {
  const userToken = localStorage.getItem('token');
  return !!userToken
};