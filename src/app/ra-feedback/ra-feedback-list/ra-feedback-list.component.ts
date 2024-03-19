import { Component, OnInit } from '@angular/core';
import { RA } from '../../_dto/intern-dao.model';
import { FeedbackByRaCode, FeedbackData } from '../../_dto/reporting-dao.model';
import { FeedbackService } from '../../admin/feedback/feedback.service';
import { BatchService } from '../../admin/batch/batch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ra-feedback-list',
  templateUrl: './ra-feedback-list.component.html',
  styleUrl: './ra-feedback-list.component.css'
})
export class RaFeedbackListComponent implements OnInit {


  raList: RA[]=[];
  internUser = {
    raCode:'',
    raEmail:'',
  } 
  formBuilder: any;
  feedbackList : FeedbackByRaCode[]=[];
  searchText: string = '';
  employeeName:string = '';
  feedbackDetails : FeedbackData[] = [];

  constructor(
    private feedbackService:FeedbackService,
    private batchService:BatchService,
    private router:Router
    ){}

  ngOnInit(){
    this. getRaData();
  }
 

   getRaData(){
    this.batchService.getRaList().subscribe({
      next:(Response) =>{
         this.raList = Response;
         console.log('RA List' , Response);
      },
      error: (error) =>{
        console.error('Error fetching ra data:',error);
      }
    })
  }

  getRaFeedback(raCode:any){
     this.feedbackService.getRAFeedbackByRaCode(raCode).subscribe({
      next:(response)=>{
        console.log(response);
        this.feedbackList = response;
      }
     })
  }

  getFeedbackDatails(feed:any){
    debugger
     this.feedbackService.getRARatingFeedback(feed).subscribe({
      next:(response) =>{
        debugger
        console.log(response);
        this.feedbackDetails = response;
        this.employeeName = response[0].firstName + ' ' + response[0].middleName + ' ' + response[0].lastName +'('+response[0].employeeCode+')';
      }
     })
  }

  editRAFeedback(data:any){
   let empCode = data.employeeCode;
    if (data) {
      const queryParams = {
        feedbackData: encodeURIComponent(JSON.stringify({
          isActive: data.isActive,
          employeeCode: data.employeeCode,
          raCode: data.raCode
        }))
      };

      this.router.navigate(['rafeedback/edit'], { queryParams });
    } else {
      console.error('Feedback data not found for employee code:', empCode);
    }    
  }

}
