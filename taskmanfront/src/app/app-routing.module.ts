import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginRoutes, LoginService } from './login'
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './login/components/signup.component';
import { isUserLoggedInGuard } from './auth.guard';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

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
    path: 'create',
    component: CreateTaskComponent,
    canActivate: [
      isUserLoggedInGuard
    ]
  },
  {
    path: 'edit/:id',
    component: EditTaskComponent,
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
