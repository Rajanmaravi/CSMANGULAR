import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDaoModel } from '../../_dto/user-dao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup |any;
  errorMessage: string | undefined;

  constructor(
     private formBuilder: FormBuilder,
     private authService:AuthService,
     private router:Router
     ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
    
      employeeCode: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      password: ['',Validators.required]
      //userRole: ['User'],

    });
  }

  register() {
    console.log("Register called");
    const formData = this.registrationForm.value;


    this.authService.RegisterUser(formData).subscribe(
      (response) => {
        console.log('Registration successful', response);
         Swal.fire({
           icon: 'success',
           title: 'Registration successful',
           text: 'Your account has been registered successfully!',
         });
         this.registrationForm.reset();
         this.router.navigate(['login']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }

}
