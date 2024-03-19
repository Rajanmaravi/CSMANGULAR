import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { Batch, BatchSearchModel } from '../../../_dto/batch-dao-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MONTHS, MonthOption } from '../../../_dto/base-enum';


@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent implements OnInit {

  batches: Batch[] = [];
  months = MONTHS;
  
   searchText: string = '';
  constructor(private batchService:BatchService, private router:Router){}

  ngOnInit() {
    this.getBatchData();
  }

  getBatchData() {
    this.batchService.getBatchList().subscribe({
      next: (response) => {
        this.batches = response; 
        //this.filteredBatches = [...this.batches];
      },
      error: (error) => {
        console.error('Error fetching batch data:', error);
      }
    });
  }

  getMonthName(monthNumber: number): string {
    debugger;
    const month = this.months.find(m => m.value === Number(monthNumber));
    console.log("Found month:", month);
  
    return month ? month.name : '';
  }
  
  

  deleteBatch(batch: any) {
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
        this.batchService.deleteBatch(batch).subscribe({
          next: (response) => {
            if (response === 'success') {
              // Show success message
              Swal.fire({
                icon: 'success',
                title: 'Deletion successful',
                text: 'The batch has been deleted successfully!',
              }).then(() => {
                // Reload the page or fetch data again
                this.getBatchData();
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
          error: (error) => {
            console.error('Error deleting batch:', error);
            // Show an error message
            Swal.fire({
              icon: 'error',
              title: 'Deletion failed',
              text: 'An error occurred while deleting the batch.',
            });
          },
        });
      }
    });
  }

  updateBatch(id: number) {
 debugger
    const batchToUpdate = this.batches.find(batch => batch.id === id);
 
    if (batchToUpdate) {
      const queryParams = {
        batchData: encodeURIComponent(JSON.stringify({
          batchCode: batchToUpdate.batchCode,
          year: batchToUpdate.year,
          month: batchToUpdate.month,
          batchName: batchToUpdate.batchName
        }))
      };

      this.router.navigate(['map/batch/updateBatch'], { queryParams });
    } else {
      console.error('Batch not found for ID:', id);
    }
   
  }
  

}
