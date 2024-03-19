import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BatchDaoModel, BatchModel } from '../../../_dto/batch-dao-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BatchService } from '../batch.service';
import { Month, MonthOption, getMonthOptions } from '../../../_dto/base-enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-batch',
  templateUrl: './update-batch.component.html',
  styleUrl: './update-batch.component.css'
})
export class UpdateBatchComponent implements OnInit {

  
  batch: BatchModel | any;
  months: MonthOption[] = getMonthOptions();

  constructor(
    private route: ActivatedRoute,
    private batchService:BatchService,
    private router:Router
    ) {}


  ngOnInit() {
    debugger
    this.route.queryParams.subscribe(params => {
      const batchData = params['batchData'];
      if (batchData) {
        console.log('Batch Data:', batchData);
        const decodedData = decodeURIComponent(batchData);
        const actualData = JSON.parse(decodedData);
        this.batch = actualData;
        console.log('Batch Data:', actualData);
      }
    });
  }

  updateBatch() {
    if (this.batch) {
      console.log('Updating Batch:', this.batch);
  
      this.batchService.updateBatchData(this.batch).subscribe({
        next: (response) => {
          if(response ==="success")
          console.log('Batch updated successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Batch update successful',
            text: 'Batch updated successfully!',
          });

          this.router.navigate(['map/batch']);
          
        },
        error: (error: any) => {
          console.error('Error updating batch:', error);
        }
      });
    } else {
      console.error('Batch is undefined.');
    }
  }
  

}
