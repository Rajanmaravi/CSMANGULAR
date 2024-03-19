import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OtpValidateComponent } from './otp-validate/otp-validate.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component: RegistrationComponent },
  {path:'login', component:LoginComponent},
  {path:'otp' , component:OtpValidateComponent},
  {path:'password', component:ForgotPasswordComponent},
  {path:'logout' , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
