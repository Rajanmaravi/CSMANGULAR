import { Component, OnInit } from '@angular/core';
import { Technology } from '../../../_dto/technology-dao.model';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TechnologyService } from '../technology.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-technology',
  templateUrl: './create-technology.component.html',
  styleUrl: './create-technology.component.css'
})
export class CreateTechnologyComponent  {

  createTechForm: FormGroup | undefined;
  
  technology: Technology = {
    id:0,
    isActive: true,
    loggedInUser: null,
    technologyName: ''
  };

  constructor(
    private fb: FormBuilder,
    private technologyService:TechnologyService,
    private router:Router
    ) {}

  ngOnInit() {
    this.createTechForm = this.fb.group({
      //technologyCode: ['', Validators.required],
      technologyName: ['', Validators.required],
    });
  }

  createTechnology() {
    debugger
    console.log("data", this.technology);
     this.technologyService.CreateTechnology(this.technology).subscribe({
      next: (response) => {
        console.log('Technology create successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Technology create successful',
          text: 'Technology has been created successfully!',
        });

        this.router.navigate(['map/technology']);
      },
      error: (error) => {
        console.error('Technology Registration failed', error);
      }
     })
  }

}
