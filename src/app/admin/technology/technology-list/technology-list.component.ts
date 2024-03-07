import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';
import {TechnologyDao} from '../../../_dto/technology-dao.model'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrl: './technology-list.component.css'
})
export class TechnologyListComponent implements OnInit {

  technology: TechnologyDao[] = [];

   searchText = '';

  constructor(private technologyService:TechnologyService,private router:Router){}

  ngOnInit(): void {
    this.TechnologyDetails();
  }

  TechnologyDetails(){
    debugger
      this.technologyService.getTechnology().subscribe({
        next:(response) =>{
           console.log("technology data",response);
           this.technology = response;
           console.log(this.technology)
        }
      })
  }

  deleteTechnology(batch: any) {
    // Show confirmation dialog
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
        // User clicked "Yes, delete it!"
        this.technologyService.deleteTechnology(batch).subscribe({
          next: (response) => {
            debugger
            console.log(response);
            if (response === 'success') {
              // Show success message
              Swal.fire({
                icon: 'success',
                title: 'Deletion successful',
                text: 'The technology has been deleted successfully!',
              }).then(() => {
                // Reload the page or fetch data again
                this.TechnologyDetails();
              });
            }
          },
          error: (error) => {
            console.error('Error deleting technology:', error);
            // Show an error message
            if(error && error.error === 'Unable to remove this Technology ! There are one or more JSE attached to this Technology.')
            {
              Swal.fire({
                icon: 'error',
                title: 'Deletion failed',
                text: 'Unable to remove this Technology ! There are one or more JSE attached to this Technology.',
              });
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Deletion failed',
                text: 'An error occurred while deleting the technology.',
              });        
            }
          },
        });
      }
    });
  }

  updateTechnology(id: number) {
    debugger
       const techToUpdate = this.technology.find(tech => tech.id === id);
    
       if (techToUpdate) {
         const queryParams = {
           techData: encodeURIComponent(JSON.stringify({
             isActive: techToUpdate.isActive,
             technologyCode: techToUpdate.technologyCode,
             technologyName: techToUpdate.technologyName
           }))
         };
   
         this.router.navigate(['/technology/techUpdate'], { queryParams });
       } else {
         console.error('Batch not found for ID:', id);
       }      
     } 

}
