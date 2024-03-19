import { Component, OnInit } from '@angular/core';
import { JseUserService } from '../jse-user.service';
import {JseUserDao, JseUserDetails} from '../../../_dto/intern-dao.model';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-jse-user',
  templateUrl: './view-jse-user.component.html',
  styleUrl: './view-jse-user.component.css'
})
export class ViewJseUserComponent implements OnInit {

  jseDetails:JseUserDao[]=[];
  searchText = '';
  
  constructor(
    private jseUserService:JseUserService,
    private router:Router,
    ){}
  ngOnInit(): void {
    this.getJseUsers();
  }

   getJseUsers(){
     this.jseUserService.getJseUser().subscribe({
      next:(response) =>{
         this.jseDetails = response;
      }
     })
   }

   deleteJseUser(jseData: any) {
    debugger;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.jseUserService.deleteJseUser(jseData).subscribe({
          next: (response) => {
            if (response === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Deletion successful',
                text: 'The Jse User has been deleted successfully!',
              }).then(() => {
                this.getJseUsers();
                this.router.navigate(['map/intern']);
              });
            } else {
              console.error('Unexpected response:', response);
              Swal.fire({
                icon: 'error',
                title: 'Deletion failed',
                text: 'Unexpected response from the server.',
              });
            }
          },
          error: (error: any) => {
            console.error('Error deleting intern jse user:', error);
            Swal.fire({
              icon: 'error',
              title: 'Deletion failed',
              text: 'An error occurred while deleting the inter jse user.',
            });
          },
        });
      }
    });
  }

  updateJseUser(id: number) {
    debugger
       const jseToUpdate = this.jseDetails.find(jse => jse.id === id);
    
       if (jseToUpdate) {
         const queryParams = {
           jseUserData: encodeURIComponent(JSON.stringify({
              id:jseToUpdate.id,
              employeeCode :jseToUpdate.employeeCode,
              firstName:jseToUpdate.firstName,
              middleName:jseToUpdate.middleName,
              lastName:jseToUpdate.lastName,
              email:jseToUpdate.email,
              mobile:jseToUpdate.mobile,	
              batchId:jseToUpdate.batchId,
              batchCode:jseToUpdate.batchCode,
              batchName:jseToUpdate.batchName,
              month:jseToUpdate.month,
              year:jseToUpdate.year,
              technologyId:jseToUpdate.technologyId,
              technologyName:jseToUpdate.technologyName,
              isActive:jseToUpdate.isActive,
              isDeleted:jseToUpdate.isDeleted,
              createdOn:jseToUpdate.createdOn,
              modifiedOn:jseToUpdate.modifiedOn,
              createdBy:jseToUpdate.createdBy,
              modifiedBy:jseToUpdate.modifiedBy,
              loggedInUser:'',
           }))
         };
   
         this.router.navigate(['map/intern/updateintern'], { queryParams });
       } else {
         console.error('Batch not found for ID:', id);
       }      
     } 

}


