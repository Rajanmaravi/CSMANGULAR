import { Component, OnInit } from '@angular/core';

import {Technology, Batch } from '../../../_dto/intern-dao.model';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';
import { AssessmentService } from '../assessment.service';
import { AssementDao, AssessmentJseDao } from '../../../_dto/assessment-dao.model';
import { data } from 'jquery';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrl: './create-assessment.component.css'
})
export class CreateAssessmentComponent implements OnInit {

  assessmentUser = {
    employeeCode:'',
    batchId:0,
    technologyId:0,
    assessmentId:0,
    assessmentDate:new Date,
    description:'',
  } 

  technologies: Technology[]=[];
  batches: Batch[]=[];
  assessment:AssementDao[]=[];
  jseUser:AssessmentJseDao[]=[];
  assessmentForm: FormGroup|any;

  constructor(
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private assessmentService:AssessmentService,
    private fb:FormBuilder,
  ){}

  ngOnInit(){
    this.getBatchData();
    this.TechnologyDetails();
    this.getAssessment();
  }

  validateAssessment() {
    this.assessmentForm = this.fb.group({
        batchId: ['', Validators.required],
        technologyId: ['',Validators.required],
        assessmentId: ['', Validators.required],
        assessmentDate:['', Validators.required,this.assessmentService.dateSelectedValidator()]
    });
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

  TechnologyDetails(){
    debugger
      this.technologyService.getTechnology().subscribe({
        next:(response) =>{
           console.log("technology data",response);
           this.technologies = response;
        }
      })
  }

  getAssessment(){
    this.assessmentService.getAssessment().subscribe({
      next:(response)=>{
        this.assessment = response;
      }
    })
  }

  onSelectionChange(): void {
    if (this.assessmentUser.batchId && this.assessmentUser.technologyId) {
      this.getJseAssessment(this.assessmentUser.batchId,this.assessmentUser.technologyId);
    }
  }

  getJseAssessment(batchId:any,technologyId:any){
    this.assessmentService.getJseAssessment(batchId,technologyId).subscribe({
      next:(response)=>{
        debugger
        console.log(response);
        this.jseUser = response;
        this.assessmentUser.description = response[0].description;
      }
    })
  }

  assessmentDetails(formData:any)
  {
     debugger;
      console.log("date is :::" , formData.assessmentDate);

    if(this.assessmentUser.batchId > 0
        && this.assessmentUser.technologyId>0
        && this.assessmentUser.assessmentId >0
      )
    {
        const formData = {
          batchId: this.assessmentUser.batchId,
          technologyId: this.assessmentUser.technologyId,
          assessmentId: this.assessmentUser.assessmentId,
          assessmentDate: this.assessmentUser.assessmentDate,
          description: this.assessmentUser.description,
          jseUser: this.jseUser // Include the dynamic JSE user data
        };
        this.assessmentService.addAssessment(formData).subscribe({
          next:(response)=>{
            console.log(response);
            console.log('Off boarding jse create successful', response);
            Swal.fire({
              icon: 'success',
              title: 'Assessment jse score card add successfully',
              text: 'Assessment jse score card has been added successfully!',
            });
            //this.router.navigate(['map/offboard']);
            
          },
          error: (error) => {
            console.error('Assessment jse score card registration failed', error);
          }
        })
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Please select Batch , Technology and Assessment',
        text: 'Please select Batch , Technology and Assessment!',
      });
    }
    
  }

}
