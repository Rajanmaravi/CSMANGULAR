import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
  providers: [FormsModule],
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup|any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group with validation
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordsMatchValidator });
  }

  resetPassword() {
    // Handle the reset password logic here
    const formData = this.resetPasswordForm.value;
    console.log(formData);
  }

  passwordsMatchValidator(formGroup: FormGroup<any>) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    return newPassword === confirmPassword ? null : { passwordsNotMatch: true };
  }
  
  

}
