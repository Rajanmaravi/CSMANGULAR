import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Aspect } from '../../../_dto/base-dao.model';
import {  UserFeedback } from '../../../_dto/reporting-dao.model';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-ra-feedback',
  templateUrl: './create-ra-feedback.component.html',
  styleUrl: './create-ra-feedback.component.css'
})
export class CreateRaFeedbackComponent implements OnInit {

  raFeedbackForm: FormGroup | any;
  raFeedbackUserData ={
       id:0,
       employeeCode :'',
       raCode:'',
       raName:'',
	     projectName:'',
       isActive:false,
	     isDeleted:false,
       createdOn:new Date,
       modifiedOn:new Date,
       createdBy:'',
       modifiedBy:'',
       loggedInUser:'',
       empFullName:'',
  };
  aspects: Aspect[] = [];
  aspectErrors: { [key: number]: boolean } = {};

  aspectRatings: { [key: number]: number } = {};
  employeeCode: string = '';
  isLogger: string = '';
  raCode:string = '';
 

  constructor(
    private feedbackService:FeedbackService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ){}

  ngOnInit() {
    this.getAspects();
    this.route.params.subscribe(params => {
      const employeeCode = params['EmployeeCode'];
      // If not found in params, try query params
      if (!employeeCode) {
        this.route.queryParams.subscribe(queryParams => {
          let Code = queryParams['EmployeeCode'];
          console.log('Code:', Code);
          this.getInternDetails(Code)
        });
      }
    });

  }

  initForm() {
    this.raFeedbackForm = this.fb.group({
      fullName: ['', Validators.required],
      employeeCode: ['', Validators.required],
      // Other form controls...
    });
  }

  getInternDetails(empCode:any){
    this.feedbackService.GetMapRAJseUserCode(empCode).subscribe({
      next:(response) =>{
        console.log("data::::::", response)
         this.raFeedbackUserData = response;
      }
     })
  }

  createRaFeedback(formData: any){
    debugger;
    console.log("formData",formData)
    
    this.employeeCode = formData.employeeCode || '';
    let userCode : string | null = localStorage.getItem('userCode');

    const feedbackData = new UserFeedback({
      employeeCode: formData.employeeCode,
      raCode:formData.raCode,
      isLogger: userCode || '',
      aspectRatings: {},
    });
    
    for (let i = 1; i <= 15; i++) {
      const aspectRating = formData[i] || 0;
      feedbackData.aspectRatings[i] = aspectRating;
    }
    
    this.feedbackService.createRAFeedback(feedbackData).subscribe({
      next:(response) =>{
         console.log(response);
         if (response === 'success') {
          // Show success message
          Swal.fire({
            icon: 'success',
            title: 'Feedback successful',
            text: 'The feedback has been created successfully!',
          }).then(() => {
            // Reload the page or fetch data again
            this.router.navigate(['feedback/view']);
          });
        } else {
          // Handle other responses if needed
          console.error('Unexpected response:', response);
          Swal.fire({
            icon: 'error',
            title: 'Feedback Creation failed',
            text: 'Unexpected response from the server.',
          });
        }
      }
    })

  }
  getAspects(){
    this.feedbackService.getAspects().subscribe(aspects => {
      debugger
      console.log(aspects);
      this.aspects = aspects;
      console.log(this.aspects);
    });
  }

}
