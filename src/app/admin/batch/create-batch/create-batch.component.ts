import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Year, Month ,MonthOption, getMonthOptions, FiscalYear} from '../../../_dto/base-enum';
import Swal from 'sweetalert2';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrl: './create-batch.component.css'
})
export class CreateBatchComponent implements OnInit {

  createBatchForm: FormGroup |any;
  months: MonthOption[];

  fiscalYears = Object.keys(FiscalYear).map(key => ({ value: key, label: (FiscalYear as any)[key] }));
  
  constructor(
     private formBuilder: FormBuilder,
     private batchService:BatchService,
     private router:Router,   
     ) {
      this.months = getMonthOptions();
     }

  ngOnInit(): void {
    this.createBatchForm = this.formBuilder.group({   
      batchCode:['', Validators.required],
      year: ['', Validators.required],
      month: ['', Validators.required],
      batchName:['', Validators.required]
    });
  }

  createBatch() {
    const formData = this.createBatchForm.value;

    this.batchService.CreateBatch(formData).subscribe({
      next: (response) => {
        console.log('Batch create successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Batch create successful',
          text: 'Batch has been created successfully!',
        });
        this.createBatchForm.reset();
        this.router.navigate(['map/batch']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

}
