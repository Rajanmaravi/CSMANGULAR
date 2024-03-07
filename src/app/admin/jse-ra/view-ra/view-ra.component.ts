import { Component } from '@angular/core';
import { Reporting, raDto } from '../../../_dto/reporting-dao.model';
import { JseRaService } from '../jse-ra.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-ra',
  templateUrl: './view-ra.component.html',
  styleUrl: './view-ra.component.css'
})
export class ViewRaComponent {

  reporting: Reporting[] = [];
  
   searchText: string = '';
  constructor(private raService:JseRaService, private router:Router){}

  ngOnInit() {
    this.getReportingData();
  }

  getReportingData() {
    this.raService.getRaList().subscribe({
      next: (response) => {
        this.reporting = response; 
      },
      error: (error) => {
        console.error('Error fetching Reporting Authority data:', error);
      }
    });
  }

  deleteReporting(ra: any) {
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
        this.raService.deleteReporting(ra).subscribe({
          next: (response) => {
            if (response === 'success') {
              // Show success message
              Swal.fire({
                icon: 'success',
                title: 'Deletion successful',
                text: 'The ra has been deleted successfully!',
              }).then(() => {
                // Reload the page or fetch data again
                this.getReportingData();
              });
            } else {
              // Handle other responses if needed
              console.error('Unexpected response:', response);
              Swal.fire({
                icon: 'error',
                title: 'Deletion failed',
                text: 'Unexpected response from the server.',
              });
            }
          },
          error: (error: any) => {
            console.error('Error deleting ra:', error);
            // Show an error message
            Swal.fire({
              icon: 'error',
              title: 'Deletion failed',
              text: 'An error occurred while deleting the ra.',
            });
          },
        });
      }
    });
  }

  updateReporting(id: number) {
 debugger
    const raToUpdate = this.reporting.find(ra => ra.id === id);
 
    if (raToUpdate) {
      const queryParams = {
        raData: encodeURIComponent(JSON.stringify({
          raCode: raToUpdate.raCode,
          raName: raToUpdate.raName,
          raEmail: raToUpdate.raEmail,
          raPhone: raToUpdate.raPhone,
        }))
      };

      this.router.navigate(['/jsera/updatera'], { queryParams });
    } else {
      console.error('RA not found for ID:', id);
    }
   
  }

}
