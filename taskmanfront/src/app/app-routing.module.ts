import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginRoutes, LoginService } from './login'
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './login/components/signup.component';
import { isUserLoggedInGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...loginRoutes,
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      isUserLoggedInGuard
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
