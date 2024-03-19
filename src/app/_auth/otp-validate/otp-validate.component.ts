import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { OTPDaoModel } from '../../_dto/user-dao.model';

@Component({
  selector: 'app-otp-validate',
  templateUrl: './otp-validate.component.html',
  styleUrl: './otp-validate.component.css'
})
export class OtpValidateComponent {

  public invalidLogin: boolean = false;
  captcha: string;
  otpEmpCodeForm: FormGroup | any;
  otpEmailForm: FormGroup|any;
  otpValidateForm: FormGroup|any;
  empCode:string|any;
  empEmail:string|any;
  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authService:AuthService
    ) {
      this.captcha = this.authService.generateRandomAlphanumeric();
    }

  ngOnInit()
   {

     // this.captcha;
    // Initialize the form group
      this.otpEmpCodeForm = this.formBuilder.group({
        userName: ['', Validators.required],
      });

      this.otpEmailForm = this.formBuilder.group({
        email: ['', Validators.required],
      });

      this.otpValidateForm = this.formBuilder.group({
        otp: ['', Validators.required],
      });

    }

    otpByUseName() {
      debugger;
      const formData = this.otpEmpCodeForm.value;
    
      this.authService.sendOtp(formData).subscribe({
        next: (response) => {
          debugger;
          localStorage.setItem('empCode', response.employeeCode);
          localStorage.setItem('empEmail', response.email);
          console.log('OTP successful send to your email', response);
          Swal.fire({
            icon: 'success',
            title: 'OTP send successful',
            text: 'OTP successfull send to your email!',
          });
          //this.router.navigate(["login"]);

        },
        error: (error) => {
          console.error('OTP send failed', error);
          if (error.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your UserId .',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'OTP Failed',
              text: 'An error occurred during OTP. Please try again.',
            });
          }
        },
      });
    }

    otpByEmail() {
      debugger;
      const formData = this.otpEmailForm.value;
    
      this.authService.sendOtp(formData).subscribe({
        next: (response) => {
          debugger;
          localStorage.setItem('empCode', response.employeeCode);
          localStorage.setItem('empEmail', response.email);
          console.log('OTP successful send to your email', response);
          Swal.fire({
            icon: 'success',
            title: 'OTP send successful',
            text: 'OTP successfull send to your email!',
          });
          //this.router.navigate(["login"]);

        },
        error: (error) => {
          console.error('OTP send failed', error);
          if (error.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your UserId .',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'OTP Failed',
              text: 'An error occurred during OTP. Please try again.',
            });
          }
        },
      });
    }

    validateOtp(){
      const formData = this.otpValidateForm.value;
      const OTP =this.otpValidateForm.get('otp').value
       this.empCode = localStorage.getItem('empCode');
       this.empEmail = localStorage.getItem('empEmail');
      let post: OTPDaoModel = {
        employeeCode: this.empCode,
        email:this.empEmail,
        otp:OTP,
        password:'',
        otpExpiration:new Date()
      }

      this.authService.validateUserOtp(post).subscribe({
        next: (response) => {
          debugger;
          console.log('OTP validate successful', response);                
          localStorage.setItem('empCode', response.employeeCode);
          localStorage.setItem('empEmail', response.email);
          Swal.fire({
            icon: 'success',
            title: 'OTP validate successful',
            text: 'OTP validation successfully!',
          });
          this.router.navigate(["password"]);

        },
        error: (error) => {
          console.error('OTP validation failed', error);
          if (error.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your OTP .',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'OTP Failed',
              text: 'An error occurred during OTP. Please try again.',
            });
          }
        },
      });
    }

}
