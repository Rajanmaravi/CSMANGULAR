import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  providers: [FormsModule],
})
export class ForgotPasswordComponent {


  forgotPasswordForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendResetLink() {
    // Handle the logic to send the reset link
    const email = this.forgotPasswordForm.get('email').value;
    console.log(`Reset link sent to ${email}`);
  }

}
