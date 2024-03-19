import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import {JseUser, Technology, Batch, RA, JseUserDetails} from '../../../_dto/intern-dao.model';
import { BatchService } from '../../batch/batch.service';
import { FeedbackByRaCode, FeedbackData } from '../../../_dto/reporting-dao.model';

@Component({
  selector: 'app-conform-ra-feedback',
  templateUrl: './conform-ra-feedback.component.html',
  styleUrl: './conform-ra-feedback.component.css'
})
export class ConformRaFeedbackComponent implements OnInit {

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
    private batchService:BatchService
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

  conformRaFeedback(feed:any){
    debugger
    //  this.feedbackService.getRARatingFeedback(feed).subscribe({
    //   next:(response) =>{
    //     debugger
    //     console.log(response);
    //     this.feedbackDetails = response;
    //     this.employeeName = response[0].firstName + ' ' + response[0].middleName + ' ' + response[0].lastName +'('+response[0].employeeCode+')';
    //   }
    //  })
  }

}
