import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aspect } from '../../_dto/base-dao.model';
import { FeedbackService } from '../../admin/feedback/feedback.service';
import { UserFeedback } from '../../_dto/reporting-dao.model';
import { RaFeedbackService } from '../ra-feedback.service';
import { JseList } from '../../_dto/intern-dao.model';
import $ from 'jquery';
import { UserFeedbackDao } from '../../_dto/feedback-dao.model';

@Component({
  selector: 'app-edit-ra-feedback',
  templateUrl: './edit-ra-feedback.component.html',
  styleUrl: './edit-ra-feedback.component.css'
})
export class EditRaFeedbackComponent implements OnInit {

  raFeedbackForm: FormGroup | any;
  feedbackList: UserFeedbackDao[] = [];
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
       reviewerComments:'',
  };
  aspects: Aspect[] = [];
  aspectErrors: { [key: number]: boolean } = {};

  aspectRatings: { [key: number]: number } = {};
  selectedRatings: { [key: number]: number } = {};
  employeeCode: string = '';
  isLogger: string = '';
  raCode:string = '';
  reviewerComments?: string; 

  jseList: JseList[]=[];
 

  contentRows: any[] = [{ id: 0 }];

  constructor(
    private feedbackService:FeedbackService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private rafeedbackService:RaFeedbackService
    ){}

  ngOnInit() {


    this.route.queryParams.subscribe(params => {
      const feedbackData = params['feedbackData'];
      if (feedbackData) {
        console.log('Technology Data:', feedbackData);
        const decodedData = decodeURIComponent(feedbackData);
        const actualData = JSON.parse(decodedData);
        let Racode = actualData.raCode;
        let empCode = actualData.employeeCode;
        console.log('feedback Data:', actualData);
        this.getInternDetailsByRaCode(Racode);
        this.getInternDetails(empCode);
      }
    });


    // this.route.params.subscribe(params => {
    //   const employeeCode = params['RaCode'];
    //   if (!employeeCode) {
    //     this.route.queryParams.subscribe(queryParams => {
    //       let Code = queryParams['RaCode'];
    //       console.log('Code:', Code);
    //       Code = 'CSMRA003';
    //       this.getInternDetailsByRaCode(Code);
    //     });
    //   }
    // });

  }

  initForm() {
    this.raFeedbackForm = this.fb.group({
      fullName: ['', Validators.required],
      employeeCode: ['', Validators.required],
      reviewerComments:['',Validators.required]
      // Other form controls...
    });
  }


  getInternDetailsByRaCode(raCode:any){
    this.rafeedbackService.GetJseUserByRaCode(raCode).subscribe({
      next:(response) =>{
        console.log("data::::::", response)
         this.jseList = response;
      }
     })
  }

  getInternDetails(empCode:any){
    debugger
    console.log('Selected Employee Code:', empCode);
    //var empCode = this.raFeedbackUserData.employeeCode;
    this.feedbackService.GetMapRAJseUserCode(empCode).subscribe({
      next:(response) =>{
        console.log(":::::::::Given Feedback data::::::", response)
         this.raFeedbackUserData = response[0];
         this.feedbackList= response;

         this.feedbackList.forEach(feedback => {
          this.selectedRatings[feedback.feedbackId] = feedback.rating;
        });

      }
     })

     this.getAspects();
  }

  editRaFeedback(formData: any){
    debugger;
    console.log("formData",formData)
    
    this.employeeCode = formData.employeeCode || '';
    let userCode : string | null = localStorage.getItem('userCode');

    const feedbackData = new UserFeedback({
      employeeCode: formData.employeeCode,
      raCode: formData.raCode,
      reviewerComments: formData.reviewerComments,
      isLogger: userCode || '',
      aspectRatings: {},
    });
    
    for (let i = 1; i <= 15; i++) {
      const aspectRating = formData[i] || 0;
      feedbackData.aspectRatings[i] = aspectRating;
    }
    
    this.feedbackService.createRAFeedback(feedbackData).subscribe({
      next:(response) =>{
        debugger;
         console.log(response);
         if (response === 'success') {
          // Show success message
          Swal.fire({
            icon: 'success',
            title: 'Feedback update successful',
            text: 'The feedback has been updated successfully!',
          }).then(() => {
            // Reload the page or fetch data again
            this.router.navigate(['rafeedback/view']);
          });
        } else {
          // Handle other responses if needed
          console.error('Unexpected response:', response);
          Swal.fire({
            icon: 'error',
            title: 'Feedback updation failed',
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

  isRatingSelected(aspectId: number, ratingOption: number): boolean {
    const feedbackAspect = this.feedbackList.find(feedback => feedback.feedbackId === aspectId);
    const aspect = this.aspects.find(a => a.id === aspectId);
  
    if (feedbackAspect) {
      return feedbackAspect.rating === ratingOption;
    } else if (aspect) {
      return aspect.rating === (this.selectedRatings[aspectId] || 0);
    }
  
    return false;
  }
}
