import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './services/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { SignupComponent } from './login/components/signup.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { LoginComponent } from './login';
import { StoreModule } from '@ngrx/store';
import { tokenReducer } from './token.reducer'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ message: tokenReducer })
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
