import { Component, OnInit } from '@angular/core';
import {JseUser, Technology, Batch, RA, CreateJseUser} from '../../../_dto/intern-dao.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JseUserService } from '../jse-user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';

@Component({
  selector: 'app-create-jse-user',
  templateUrl: './create-jse-user.component.html',
  styleUrl: './create-jse-user.component.css'
})
export class CreateJseUserComponent implements OnInit {

  interForm: FormGroup | any ;
  technologies: Technology[]=[];
  batches: Batch[]=[];
  raList: RA[]=[];
  internUser: CreateJseUser = {
    isActive: true,
    loggedInUser: '',
    employeeCode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: '',
    // raCode: '',
    // raEmail: '',
    pmCode: '',
    pmEmail: '',
    location: '',
    projectName: '',
    batchId: 0,
    technologyId: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private jseUserService:JseUserService,
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private router:Router
    ) {}

    ngOnInit() {

      this.getBatchData();
      this.TechnologyDetails();
      this.getRaData();
      this.interForm = this.formBuilder.group({
        employeeCode: ['', Validators.required],
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        raCode: ['',Validators.required],
        raEmail: ['', [Validators.required, Validators.email]],
        pmCode: ['',Validators.required],
        pmEmail: ['', Validators.email],
        location: ['',Validators.required],
        projectName: ['', Validators.required],
        batchId: ['', Validators.required],
        technologyId: ['', Validators.required],
      });
    }
  
    getBatchData() {
      this.batchService.getBatchList().subscribe({
        next: (response) => {
          this.batches = response; 
        },
        error: (error) => {
          console.error('Error fetching batch data:', error);
        }
      });
    }

    getRaData(){
      this.batchService.getRaList().subscribe({
        next:(Response) =>{
           this.raList = Response;
        },
        error: (error) =>{
          console.error('Error fetching ra data:',error);
        }
      })
    }

    TechnologyDetails(){
      debugger
        this.technologyService.getTechnology().subscribe({
          next:(response) =>{
             console.log("technology data",response);
             this.technologies = response;
          }
        })
    }

  registerIntern() {
    debugger;
   
    this.jseUserService.CreateIntern(this.internUser).subscribe({
      next: (response) => {
        console.log('Intern create successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Intern created successfully',
          text: 'Intern has been created successfully!',
        });

        this.router.navigate(['/intern']);
      },
      error: (error) => {
        console.error('Intern Registration failed', error);
      }
    })
  }

  // updateRaEmail(): void
  // {
  //   const selectedRA = this.raList.find(ra => ra.raCode === this.internUser.raCode);
  //   if (selectedRA) {
  //       this.internUser.raEmail = selectedRA.raEmail;
  //   } else {
  //       this.internUser.raEmail = ''; 
  //   }
  // }  

}
