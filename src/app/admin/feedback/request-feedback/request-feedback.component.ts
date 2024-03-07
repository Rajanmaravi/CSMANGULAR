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
    employeeCode:'',
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    mobile:'',
    raCode:'',
    raEmail:'',
    pmCode:'',
    projectName:'',
    batchId:0,
    batchCode:'',
    batchName:'',
    technologyId:0,
    technologyName:'',
    technologyCode:'',
    empFullName:'',
  } 

  feedbackInternForm = {
    employeeCode: [] as string[],
    empFullName:[] as string[],
  } 
  
  dropdownSettings: IDropdownSettings = {};
  selectedEmployeeCodes: string[] = [];
  employeeCodes:string[] = [];

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
     this.jseUserService.getJseUserDetails().subscribe({
      next: (response) => {
        console.log('response',response);
        this.feedbackIntern = response;
        // this.feedbackIntern = response.map((user: { employeeCode: any; empFullName: any; }) => ({
        //   employeeCode: user.employeeCode,
        //   empFullName: user.empFullName,
          
        // }));
        this.feedbackInternForm.employeeCode = response.map((user: { employeeCode: any; }) => user.employeeCode);
        this.feedbackInternForm.empFullName = response.map((user: { empFullName: any; }) => user.empFullName);
      }
     })
   }


   feedbackRequest(): void 
   {
      let emailData: any[] = [];
      console.log('Selected Employee Codes:', this.selectedEmployeeCodes);
      debugger;

      if (Array.isArray(this.feedbackIntern))
      {
        const selectedRecords: any[] = this.feedbackIntern.filter((record: any) =>
          this.employeeCodes.includes(record.employeeCode)
        );  
        //console.log('Selected Records:', selectedRecords);

        selectedRecords.forEach((feedbackData: any) => {
          const formattedData = {
            loggedInUser: localStorage.getItem('userCode') || '',
            employeeCode: feedbackData.employeeCode,
            firstName: feedbackData.firstName,
            middleName: feedbackData.middleName,
            lastName: feedbackData.lastName,
            email: feedbackData.email,
            mobile: feedbackData.mobile,
            raCode: feedbackData.raCode,
            raEmail: feedbackData.raEmail,
            pmCode: feedbackData.pmCode,
            projectName: feedbackData.projectName,
            batchCode: feedbackData.batchCode,
            batchName: feedbackData.batchName,
            technologyName: feedbackData.technologyName,
            technologyCode: feedbackData.technologyCode,
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
                this.router.navigate(['feedback']);
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
    this.employeeCodes = this.selectedEmployeeCodes.map(empCode => {
      const matches = empCode.match(/\((.*?)\)/);
      return matches && matches.length > 1 ? matches[1] : '';
    });

    console.log('Employee Codes:', this.employeeCodes);
  }

}
