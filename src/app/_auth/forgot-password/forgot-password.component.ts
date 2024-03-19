import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OTPDaoModel } from '../../_dto/user-dao.model';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  providers: [FormsModule],
})
export class ForgotPasswordComponent {


  forgotPasswordForm: FormGroup | any;
  empEmail:string|any;
  empCode:string|any;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
    ) {}

  ngOnInit() {
    // Initialize the form group
    // this.forgotPasswordForm = this.formBuilder.group({
    //   password: ['', [Validators.required]],
    //   conformPassword: ['', [Validators.required]],
    // });

    this.initForm();
    this.empCode = localStorage.getItem('empCode');
    this.empEmail = localStorage.getItem('empEmail');

  }

  initForm(): void {
    this.forgotPasswordForm = this.fb.group({
      password: ['', Validators.required],
      conformPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const conformPassword = control.get('conformPassword')?.value;

    if (password !== conformPassword) {
        return { 'passwordMismatch': true };
    }

    return null;
}


  sendResetLink(){
    debugger;
    const password = this.forgotPasswordForm.get('password').value;
    const conformPassword = this.forgotPasswordForm.get('conformPassword').value;
     this.empCode = localStorage.getItem('empCode');
     this.empEmail = localStorage.getItem('empEmail');
    let post: OTPDaoModel = {
      employeeCode: this.empCode,
      email:this.empEmail,
      otp:'',
      password:password,
      otpExpiration:new Date()
    }

    this.authService.changeUserPassword(post).subscribe({
      next: (response) => {
        debugger;
        console.log('OTP validate successful', response);                
        localStorage.removeItem('empCode');
        localStorage.removeItem('empEmail');
        Swal.fire({
          icon: 'success',
          title: 'Password change successful',
          text: 'Password has been changed successfully!',
        });
        this.router.navigate(["login"]);

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
