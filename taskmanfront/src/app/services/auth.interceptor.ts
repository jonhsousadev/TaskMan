import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('adsasdsad')
  const userToken = localStorage.getItem('token');
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`)
  })
  
  return next(modifiedReq);
};