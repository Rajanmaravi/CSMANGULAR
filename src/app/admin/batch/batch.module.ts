import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // Add this line
import { ReactiveFormsModule } from '@angular/forms'; 

import { BatchRoutingModule } from './batch-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { CreateBatchComponent } from './create-batch/create-batch.component';
import { AppComponent } from '../../app.component';
import { UpdateBatchComponent } from './update-batch/update-batch.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    BatchListComponent,
    CreateBatchComponent,
    UpdateBatchComponent,
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ShareModule
  ],
  bootstrap: [AppComponent],
})
export class BatchModule { }
