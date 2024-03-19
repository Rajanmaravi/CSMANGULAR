import { Component, OnInit, ViewChild } from '@angular/core';
import { JseUserService } from '../../jse-user/jse-user.service';
import { Router } from '@angular/router';
import {JseUserDetails} from '../../../_dto/intern-dao.model';
import { FormGroup, NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FeedbackService } from '../feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.component.html',
  styleUrl: './request-feedback.component.css'
})
export class RequestFeedbackComponent implements OnInit {

  @ViewChild('feedbackRequestForm') feedbackRequestForm!: NgForm;
  jseDetails:JseUserDetails[]=[];
  searchText = '';

  feedbackIntern = {
    raCode:'',
    raEmail:'',
    raFullName:''
  } 

  feedbackInternForm = {
    // employeeCode: [] as string[],
    // empFullName:[] as string[],
    raCode: [] as string[],
    raFullName:[] as string[],
  } 
  
  dropdownSettings: IDropdownSettings = {};
  selectedReportingAuthorityCodes: string[] = [];
  raCodes:string[] = [];

  constructor(
    private jseUserService:JseUserService,
    private router:Router,
    private feedbackService:FeedbackService,
    ){}

  ngOnInit(): void {
    this.getMapRaJseUsers();

    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3
    };
  }

  getMapRaJseUsers()
   {

    //  this.jseUserService.getJseUserDetails().subscribe({
    //   next: (response) => {
    //     console.log('response',response);
    //     this.feedbackIntern = response;
    //      this.feedbackInternForm.employeeCode = response.map((user: { employeeCode: any; }) => user.employeeCode);
    //      this.feedbackInternForm.empFullName = response.map((user: { empFullName: any; }) => user.empFullName);
    //   }
    //  })

     this.feedbackService.GetMapRA().subscribe({
      next:(response) =>{
          this.feedbackIntern = response;
          this.feedbackInternForm.raCode = response.map((user: { raCode: any; }) => user.raCode);
         this.feedbackInternForm.raFullName = response.map((user: { raFullName: any; }) => user.raFullName);
      }
     })
   }


   feedbackRequest(): void 
   {
    debugger;
      let emailData: any[] = [];
      console.log('Selected RA Codes:', this.selectedReportingAuthorityCodes);
      debugger;

      if (Array.isArray(this.feedbackIntern))
      {
        const selectedRecords: any[] = this.feedbackIntern.filter((record: any) =>
          this.raCodes.includes(record.raCode)
        );  
        //console.log('Selected Records:', selectedRecords);

        selectedRecords.forEach((feedbackData: any) => {
          const formattedData = {
            loggedInUser: localStorage.getItem('userCode') || '',
            raCode: feedbackData.raCode,
            raEmail: feedbackData.raEmail,
            //raFullName:feedbackData.raFullName
          };
      
          emailData.push(formattedData);
        });
      
        console.log('Formatted Email Data:', emailData);

        this.feedbackService.sendFeedbackEmail(emailData).subscribe(
        {
              next:(response) =>
              {
                console.log(response);
                console.log('Feedback mail send successful', response);
                Swal.fire({
                  icon: 'success',
                  title: 'Feedback mail send successfully',
                  text: 'Feedback mail has been sent successfully!',
                });
                this.router.navigate(['map/feedback']);
              },
            error: (error) => 
            {
              console.error('Intern Registration failed', error);
            }
        })        
      }
      else 
      {
        console.error('Invalid data format for this.feedbackIntern. Expecting an array.');
      }
    }

  onItemSelect(item: any) 
  {
    this.extractEmployeeCodes();
    console.log('onItemSelect', item);
  }
  
  onSelectAll(items: any)
  {
    this.extractEmployeeCodes();
    console.log('onSelectAll', items);
  }

  onItemDeSelect(item: any)
  {
    console.log('onItem DeSelect', item);
  }

  onDropDownClose()
  {
    console.log('dropdown closed');
  }

  extractEmployeeCodes() {
    this.raCodes = this.selectedReportingAuthorityCodes.map(raCode => {
      const matches = raCode.match(/\((.*?)\)/);
      return matches && matches.length > 1 ? matches[1] : '';
    });

    console.log('RA Codes:', this.raCodes);
  }

}
