
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/components/login/login.component';
import { HomeComponent } from './public/components/home/home.component';
import { RegisterComponent } from './public/components/register/register.component';
import { MyProfileComponent } from './public/components/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent }, 
  {path:'my-profile', component:MyProfileComponent} ,
  
  { path: '**', redirectTo: '' }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }