import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {JseUser, Technology, Batch, RA, JseUserDetails} from '../../../_dto/intern-dao.model';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';
import { JseUserService } from '../../jse-user/jse-user.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { MapInternRaService } from '../map-intern-ra.service';

@Component({
  selector: 'app-create-map-ra-intern',
  templateUrl: './create-map-ra-intern.component.html',
  styleUrl: './create-map-ra-intern.component.css'
})
export class CreateMapRaInternComponent implements OnInit {

  interForm: FormGroup | any ;
  technologies: Technology[]=[];
  batches: Batch[]=[];
  raList: RA[]=[];
  employeeOptions:JseUserDetails[]=[];

  constructor(
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private jseUserService: JseUserService,
    private mapRaInternService : MapInternRaService,
    private router:Router
  ){}
 
  internUser = {
    employeeCode:'',
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    mobile:'',
    raCode:'',
    internUser:'',
    raEmail:'',
    pmCode:'',
    projectName:'',
    batchId:0,
    technologyId:0,
  } 
  formBuilder: any;

  ngOnInit() {

    this.getBatchData();
    this.TechnologyDetails();
    this.getRaData();
    this.getJseUser();
    this.interForm = this.formBuilder.group({
      employeeCode: ['', Validators.required],
      firstName: ['',Validators.required],
      middleName:[''],
      lastName: ['',Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      raCode: ['',Validators.required],
      raEmail: ['', [Validators.required, Validators.email]],   
      batchId: ['', Validators.required],
      technologyId: ['', Validators.required],
    });
  }

  mapRaInternDetails(){
    debugger
    console.log(this.internUser);
     this.mapRaInternService.MapRAIntern(this.internUser).subscribe({
       next:(response)=>{
         console.log(response);
         console.log('Intern create successful', response);
         Swal.fire({
           icon: 'success',
           title: 'Map RA Intern successfully',
           text: 'Map RA Intern has been successfully!',
         });
         this.router.navigate(['map/mapra']);
       },
       error: (error) => {
         console.error('Intern Registration failed', error);
       }
     })
  }

  getBatchData() {
    this.batchService.getBatchList().subscribe({
      next: (response) => {
        console.log("batch data:",response)
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

  getJseUser()
  {
     this.jseUserService.getJseUser().subscribe({
      next:(response)=>{
        console.log('data::', response);
        this.employeeOptions = response;
      }
     })
  }


updateRaEmail(): void
{
  const selectedRA = this.raList.find(ra => ra.raCode === this.internUser.raCode);
  if (selectedRA) {
      this.internUser.raEmail = selectedRA.raEmail;
  } else {
      this.internUser.raEmail = ''; 
  }
}  

updateEmpDetails():void{
  const selectEmp = this.employeeOptions.find(emp => emp.employeeCode === this.internUser.employeeCode);
  if(selectEmp){
    this.internUser.firstName = selectEmp.firstName;
    this.internUser.middleName = selectEmp.middleName;
    this.internUser.lastName = selectEmp.lastName;
    this.internUser.email = selectEmp.email;
    this.internUser.mobile = selectEmp.mobile;
    this.internUser.batchId =selectEmp.batchId;
    this.internUser.technologyId = selectEmp.technologyId;
  } 
  else{
    this.internUser.firstName = '';
    this.internUser.middleName = '';
    this.internUser.lastName = '';
  }
}

}
