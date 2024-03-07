import { Component, OnInit } from '@angular/core';
import { JseRAMapDaoDetailsModel } from '../../../_dto/reporting-dao.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MapInternRaService } from '../map-intern-ra.service';

@Component({
  selector: 'app-view-map-ra-intern',
  templateUrl: './view-map-ra-intern.component.html',
  styleUrl: './view-map-ra-intern.component.css'
})
export class ViewMapRaInternComponent {

  jseRaMapData:JseRAMapDaoDetailsModel[] = [];
  searchText = '';

  constructor(
    private mapRaInternService:MapInternRaService,
    private router:Router
  ){}

  ngOnInit(): void {
   this.getMapRAIntern();
  }

  getMapRAIntern(){
     this.mapRaInternService.getMapRAJseUser().subscribe({
      next:(response) =>{
        console.log("data:",response);
        this.jseRaMapData = response;
      }
     })
  }

  deleteMapRAJse(jseData: any) {
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
        this.mapRaInternService.deleteMapRAJse(jseData).subscribe({
          next: (response:any) => {
            if (response === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Deletion successful',
                text: 'The Map RA Jse User has been deleted successfully!',
              }).then(() => {
                this.getMapRAIntern();
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
            console.error('Error deleting Map RA intern jse user:', error);
            Swal.fire({
              icon: 'error',
              title: 'Deletion failed',
              text: 'An error occurred while deleting the Map RA inter jse user.',
            });
          },
        });
      }
    });
  }

  updateMapRAJseUser(id: number) {
    debugger
       const jseToUpdate = this.jseRaMapData.find(jse => jse.id === id);
    
       if (jseToUpdate) {
         const queryParams = {
           jseUserMapToRAData: encodeURIComponent(JSON.stringify({
              id:jseToUpdate.id,
              employeeCode :jseToUpdate.employeeCode,
              firstName:jseToUpdate.firstName,
              middleName:jseToUpdate.middleName,
              lastName:jseToUpdate.lastName,
              email:jseToUpdate.email,
              mobile:jseToUpdate.mobile,
              raCode:jseToUpdate.raCode,
              raName:jseToUpdate.raName,
              raEmail:jseToUpdate.raEmail,	
              batchId:jseToUpdate.batchId,
              batchCode:jseToUpdate.batchCode,
              batchName:jseToUpdate.batchName,
              technologyId:jseToUpdate.technologyId,
              technologyCode:jseToUpdate.technologyCode,
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
   
         this.router.navigate(['/mapra/update'], { queryParams });
       } else {
         console.error('Map RA Intern not found for ID:', id);
       }      
     } 
}
