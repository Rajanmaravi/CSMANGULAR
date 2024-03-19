import { Component } from '@angular/core';
import { JseUserService } from '../jse-user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {JseUser, JseUserDetails, RA, Technology, Batch} from '../../../_dto/intern-dao.model';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';

@Component({
  selector: 'app-update-jse-user',
  templateUrl: './update-jse-user.component.html',
  styleUrl: './update-jse-user.component.css'
})
export class UpdateJseUserComponent {

  interForm: FormGroup | any ;
  technologies: Technology[]=[];
  batches: Batch[]=[];
  raList: RA[]=[];
  internUser: JseUser = {
    id: 0,
    isActive: true,
    loggedInUser: '',
    employeeCode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: '',
    batchId: 0,
    technologyId: 0
  };

  constructor(
    private jseUserService:JseUserService,
    private route:ActivatedRoute,
    private router:Router,
    private batchService:BatchService,
    private technologyService:TechnologyService
    ){}

  ngOnInit() {
    debugger
    this.getBatchData();
    this.TechnologyDetails();
    this.getRaData();
    this.route.queryParams.subscribe(params => {
      const jseData = params['jseUserData'];
      if (jseData) {
        console.log('Jse User Data:', jseData);
        const decodedData = decodeURIComponent(jseData);
        const actualData = JSON.parse(decodedData);
        this.internUser = actualData;
        console.log('Jse User Data:', actualData);
      }
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
      next:(response) =>{
         this.raList = response;
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

  updateIntern()
  {
    if (this.internUser) {
      console.log('Updating jse:', this.internUser);
       debugger;
      this.jseUserService.updateJseUserDetails(this.internUser).subscribe({
        next: (response) => {
          if(response ==="success"){
            console.log('Jse Details updated successfully:', response);
            Swal.fire({
              icon: 'success',
              title: 'Jse User update successful',
              text: 'Jse user details updated successfully!',
            });
  
            this.router.navigate(['map/intern']);
          }else{
            Swal.fire({
              icon: 'error', 
              title: 'Jse User Update Fail',
              text: 'Jse user details updated Fail!',
            });
            
          }             
        },
        error: (error: any) => {
          console.error('Error updating jse details:', error);
        }
      });
    } else {
      console.error('Jse user is undefined.');
    }
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
