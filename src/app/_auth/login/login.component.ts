import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public invalidLogin: boolean = false;
  captcha: string;
  loginForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authService:AuthService
    ) {
      this.captcha = this.authService.generateRandomAlphanumeric();
    }

  ngOnInit()
   {

      this.captcha;
    // Initialize the form group
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

    login() {
      debugger;
      const formData = this.loginForm.value;
    
      this.authService.UserLogin(formData).subscribe({
        next: (response) => {
          debugger;
          console.log('Login successful', response);
          const token = (<any>response).token;
          const refreshToken = (<any>response).refreshToken;
          const hoursOfExpiry = (<any>response).dateOfExpiry;
          const dayRefreshTokenExpiryTime = (<any>response).refreshTokenExpiryTime;
          const userRole = (<any>response).userRole;
          this.invalidLogin = false;

          this.authService.setToken(token, refreshToken, dayRefreshTokenExpiryTime, hoursOfExpiry,userRole)

          this.router.navigate(["admin"]);

        },
        error: (error) => {
          console.error('Login failed', error);
          if (error.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your username and password.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'An error occurred during login. Please try again.',
            });
          }
        },
      });
    }

    refreshCaptcha() {
      this.captcha = this.authService.generateRandomAlphanumeric();
    }
    

}
